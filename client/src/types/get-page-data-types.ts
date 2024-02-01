
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

  interface Channel {
    id: number;
    title: string;
    bg_color: string;
    info: string;
    description_info: string;
    bg_image:{
      data:{
        id:number
        url:string;
      }
    }
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
    channel:Channel
}

export interface DataObjectType {
    id: number;
    attributes: AttributesHighlightType;
}

