export interface Project {
  name: string;
  img: {
    mob: string,
    mon: string,
    tab: string,
  };
  logo: string;
  description: string;
  url: string;
  order: number;
  technologies: string[];
}

 export interface Technology {
   _id: string;
   name: string;
   logo: string;
   description: string;
   url: string;
 }
