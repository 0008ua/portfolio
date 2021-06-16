import { Message } from './../../interfaces';
import { MessageService } from './../../services/message.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  messageForm: FormGroup;
  @ViewChild('messageFormDirective', { static: false }) messageFormDirective: FormGroupDirective;
  @ViewChild('toast') menuToggleRef: ElementRef;
  toast: any;
  isAlertDanger: boolean;
  alertText: string;
  alertHeader: string;

  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.messageForm = new FormGroup({
      text: new FormControl('',
        {
          updateOn: 'change',
          validators: [
            // Validators.pattern('^[a-zA-Z0-9_-]+$'),
            Validators.minLength(2),
            Validators.maxLength(360),
            Validators.required,
          ],
        }),
      email: new FormControl(
        '',
        {
          updateOn: 'change',
          validators: [
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            Validators.required,
          ]
        }),
      name: new FormControl('',
        {
          updateOn: 'change',
          validators: [
            Validators.pattern('^[a-zA-Z0-9_-]+$'),
            Validators.minLength(2),
            Validators.maxLength(50),
            Validators.required,
          ],
        }),
    })
  }

  ngAfterViewInit() {
    this.toast = new Toast(this.menuToggleRef.nativeElement, { delay: 3000 });
  }

  sendMessageHandler() {
    const message: Message = this.messageForm.value;
    console.log('message', message);
    this.messageService.sendMessage(message)
      .subscribe((result) => {
        this.showToast('Message sent successfully', 'I\'ll contact you soon', false);
        this.resetForm();
      },
        (err) => this.showToast('Fail', err.error.message || err.message, true)
      )
  }


  resetForm() {
    if (this.messageFormDirective) {
      this.messageFormDirective.resetForm();
    }
  }

  showToast(header = '', text = '', isAlertDanger = false) {
    this.isAlertDanger = isAlertDanger;
    this.alertText = text;
    this.alertHeader = header;
    this.toast.show();
  }
}
