import { Project, Technology } from './interfaces';

export const projects: Project[] = [{
  name: 'The Little Hotel',
  img: {
    mob: './assets/projects/tlh-mob.png',
    web: './assets/projects/tlh-web.png',
  },
  logo: './assets/projects/tlh-logo.png',
  description: 'Represents small hotel scheduling management. Included business analytics and financial accounting. Responsive web and mobile application, built on Ionic technology.',
  url: 'https://thelittlehotel.herokuapp.com/',
  order: 0,
  technologies: [
    'ngrx', 'ionic', 'rxjs', 'angular', 'react',
    'node', 'mongo', 'mongoose', 'express', 'typescript', 'sass', 'cloudinary', 'heroku',
    'javascript', 'html', 'css'
  ],
}, {
  name: 'HMADE - HandMADE',
  img: {
    mob: './assets/projects/hmade-mob.png',
    web: './assets/projects/hmade-web.png',
  },
  logo: './assets/projects/hmade-logo.png',
  description: 'Workshop of creativity. Gallery of handmade toys, decorations, bouquets etc. Responsive web and mobile application, built on Angular technology.',
  url: 'https://hmade.work/',
  order: 1,
  technologies: [
    'cloudflare', 'ubuntu', 'nodemailer', 'mailjet', 'passport', 'fabric',
    'date-fns', 'ngx-translate', 'materialize', 'bootstrap', 'react-redux', 'sheetjs',
    'javascript', 'html', 'css'
  ],
}, {
  name: 'Graboplast floors',
  img: {
    mob: './assets/projects/grabo-mob.png',
    web: './assets/projects/grabo-web.png',
  },
  logo: './assets/projects/grabo-logo.png',
  description: 'Presentation Catalog of floor coverings. Responsive web and mobile application, built on Angular technology.',
  url: 'https://graboplast.ua/',
  order: 1,
  technologies: [
    'ngrx', 'ionic', 'rxjs', 'angular', 'react',
    'node', 'mongo', 'mongoose', 'express', 'typescript', 'sass', 'cloudinary', 'heroku',
    'cloudflare', 'ubuntu', 'nodemailer', 'mailjet', 'passport', 'fabric',
  ],
},
];

// technologies: [
//   'ngrx', 'ionic', 'rxjs', 'angular', 'react',
//   'node', 'mongo', 'mongoose', 'express', 'typescript', 'sass', 'cloudinary', 'heroku',
//   'cloudflare', 'ubuntu', 'nodemailer', 'mailjet', 'passport', 'fabric',
//   'date-fns', 'ngx-translate', 'materialize', 'bootstrap', 'react-redux', 'sheetjs',
//   'javascript', 'html', 'css'
// ],


export const technologies: Technology[] = [{
  _id: 'ionic',
  name: 'Ionic',
  logo: './assets/logos/ionic.png',
  description: 'An open source mobile UI toolkit for building high quality, cross-platform native and web app experiences',
  url: 'https://ionicframework.com/',
}, {
  _id: 'rxjs',
  name: 'RxJS',
  logo: './assets/logos/rxjs.png',
  description: 'Reactive Extensions Library for JavaScript',
  url: 'https://rxjs.dev/',
}, {
  _id: 'angular',
  name: 'Angular',
  logo: './assets/logos/angular.png',
  description: 'The modern web developer\'s platform',
  url: 'https://angular.io/',
}, {
  _id: 'react',
  name: 'React',
  logo: './assets/logos/react.png',
  description: 'A JavaScript library for building user interfaces',
  url: 'https://reactjs.org/',
}, {
  _id: 'node',
  name: 'Node.js',
  logo: './assets/logos/node.png',
  description: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine',
  url: 'https://nodejs.org/en/',
}, {
  _id: 'mongo',
  name: 'MongoDB',
  logo: './assets/logos/mongodb.png',
  description: 'MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era',
  url: 'https://www.mongodb.com/',
}, {
  _id: 'mongoose',
  name: 'Mongoose',
  logo: './assets/logos/mongoose.png',
  description: 'Elegant mongoDB object modeling for node.js',
  url: 'https://mongoosejs.com/',
},
{
  _id: 'ngrx',
  name: 'NgRX',
  logo: './assets/logos/ngrx.svg',
  description: 'Reactive State for Angular',
  url: 'https://ngrx.io/',
}, {
  _id: 'express',
  name: 'Express',
  logo: './assets/logos/express.svg',
  description: 'Fast, unopinionated, minimalist web framework for Node.js',
  url: 'https://expressjs.com/',
}, {
  _id: 'typescript',
  name: 'TypeScript',
  logo: './assets/logos/typescript.png',
  description: 'JavaScript and More',
  url: 'https://www.typescriptlang.org/',
}, {
  _id: 'sass',
  name: 'Sass',
  logo: './assets/logos/sass2.png',
  description: 'CSS with superpowers',
  url: 'https://sass-lang.com/',
}, {
  _id: 'cloudinary',
  name: 'Cloudinary',
  logo: './assets/logos/cloudinary.png',
  description: 'Developers and marketers use Cloudinary to quickly and easily create, manage and deliver their digital experiences across any browser, device and bandwidth',
  url: 'https://cloudinary.com/',
}, {
  _id: 'heroku',
  name: 'Heroku',
  logo: './assets/logos/heroku.svg',
  description: 'Heroku provides services and tools to build, run, and scale web applications',
  url: 'https://heroku.com/',
}, {
  _id: 'cloudflare',
  name: 'Cloudflare',
  logo: './assets/logos/cloudflare.svg',
  description: 'Protect and accelerate your websites, apps, and teams',
  url: 'https://www.cloudflare.com/',
}, {
  _id: 'ubuntu',
  name: 'Ubuntu',
  logo: './assets/logos/ubuntu.png',
  description: 'Data science workstations',
  url: 'https://ubuntu.com/',
}, {
  _id: 'nodemailer',
  name: 'Nodemailer',
  logo: './assets/logos/nodemailer.png',
  description: 'Nodemailer is a module for Node.js applications to allow easy as cake email sending',
  url: 'https://nodemailer.com/',
}, {
  _id: 'mailjet',
  name: 'Mailjet',
  logo: './assets/logos/mailjet.png',
  description: 'One platform to create, edit and send your emails as a team',
  url: 'https://www.mailjet.com/',
}, {
  _id: 'passport',
  name: 'Passport',
  logo: './assets/logos/passport.png',
  description: 'Simple, unobtrusive authentication for Node.js',
  url: 'http://www.passportjs.org/',
}, {
  _id: 'fabric',
  name: 'Fabric',
  logo: './assets/logos/fabric.png',
  description: 'Fabric.js is a powerful and simple Javascript HTML5 canvas library',
  url: 'http://fabricjs.com/',
}, {
  _id: 'date-fns',
  name: 'Date-fns',
  logo: './assets/logos/date-fns.png',
  description: 'Modern JavaScript date utility library',
  url: 'https://date-fns.org/',
}, {
  _id: 'ngx-translate',
  name: 'NGX-Translate',
  logo: './assets/logos/ngx-translate.png',
  description: 'NGX-Translate is an internationalization library for Angular',
  url: 'http://www.ngx-translate.com/',
}, {
  _id: 'materialize',
  name: 'Materialize',
  logo: './assets/logos/materialize.svg',
  description: 'A modern responsive front-end framework based on Material Design',
  url: 'https://materializecss.com/',
},
{
  _id: 'bootstrap',
  name: 'Bootstrap',
  logo: './assets/logos/bootstrap.svg',
  description: 'Quickly design and customize responsive mobile-first sites with Bootstrap',
  url: 'https://getbootstrap.com/',
},
{
  _id: 'react-redux',
  name: 'React redux',
  logo: './assets/logos/react-redux.png',
  description: 'Official React bindings for Redux',
  url: 'https://react-redux.js.org/',
},
{
  _id: 'sheetjs',
  name: 'SheetJS',
  logo: './assets/logos/sheetjs.png',
  description: 'Read, edit, and export spreadsheets. Works in web browsers and servers',
  url: 'https://sheetjs.com/',
},
{
  _id: 'javascript',
  name: 'Javascript',
  logo: './assets/logos/javascript.svg',
  description: 'JavaScript is high-level, often just-in-time compiled, and multi-paradigm programming language',
  url: 'https://en.wikipedia.org/wiki/JavaScript',
},
{
  _id: 'html',
  name: 'HTML',
  logo: './assets/logos/html.png',
  description: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser',
  url: 'https://en.wikipedia.org/wiki/HTML',
},
{
  _id: 'css',
  name: 'CSS',
  logo: './assets/logos/css.png',
  description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language',
  url: 'https://en.wikipedia.org/wiki/CSS',
},

];
