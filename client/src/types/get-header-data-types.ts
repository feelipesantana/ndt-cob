interface LogoFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    url: string;
  }
  
  interface LogoData {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: LogoFormat;
        large: LogoFormat;
        medium: LogoFormat;
        small: LogoFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any; // You can define a specific type for provider_metadata if needed
      createdAt: string;
      updatedAt: string;
    };
  }
  
  interface Link {
    id: number;
    label: string;
    URL: string;
    color_link: string;
  }
  
  interface Attributes {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    color_header: string | null;
    logo: {
      data: LogoData[];
    };
    link: Link[];
    localizations: {
      data: any[]; // You can define a specific type for localizations if needed
    };
  }
  
 export interface GetHeaderProps {
    id: number;
    attributes: Attributes;
}
  