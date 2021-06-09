export interface Project {
  name: string;
  img: {
    mob: string,
    web: string
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
