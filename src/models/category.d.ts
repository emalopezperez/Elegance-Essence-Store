export type Category = {
  categories: ProductCategory[];
  pages: NavigationPage[];
};

export type ProductCategory = {
  id: string;
  name: string;
  featuredItems: FeaturedProduct[];
  sections: ProductSection[][];
};

export type FeaturedProduct = {
  name: string;
  href: PageHref;
  imageSrc: string;
  imageAlt: string;
};

export enum PageHref {
  Empty = "#",
  Home = "/",
  Store = "/store",
}

export type ProductSection = {
  id: string;
  name: string;
  items: NavigationPage[];
};

export type NavigationPage = {
  name: string;
  href: PageHref;
};
