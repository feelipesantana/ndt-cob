
export interface PostTypes {
    id: number;
    title: string;
    description: string;
    about: string;
    image:{
      data:{
        attributes:{
          id:number
          url:string
          width: number,
          height: number,
        }
      }
    }
  }
  
  interface HighLightZone {
    id: number;
    __component: string;
    post:PostTypes[];
  }
  

 export interface AttributesHighlightType {
    title: string;
    code: null | any;
    slug: null | any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    color_page: string;
    highlight_zone: HighLightZone[];
}

export interface DataObjectType {
    id: number;
    attributes: AttributesHighlightType;
}

