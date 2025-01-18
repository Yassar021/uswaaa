import { ProjectProps, SocialLinkProps, NavigationItemProps } from './types';

export const projectsData: ProjectProps[] = [
  {
    number: "01",
    title: "Spatial Analysis for Urban Planning",
    description: "Developed geospatial models to analyze. Leveraged Google Earth Engine for advanced spatial data processing and visualization.",
    // additionalText: "Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.",
    linkText: "More shots from this project ↗",
    linkUrl: "#"
  },
  {
    number: "02",
    title: " Mapping Environmental Risks,",
    description: "Conducted risk mapping. Focused on utilizing GIS tools like ArcGIS to assess and visualize potential impacts.",
    linkText: "See case study →",
    linkUrl: "#"
  },
  {
    number: "03",
    title: "Collaborative Mapping Initiative",
    description: "Worked with [tim/komunitas] on an open-source project to enhance accessibility of spatial data for",
    linkText: "Project WIP",
    linkUrl: "#"
  }
];

export const projects: ProjectProps[] = [
  {
    number: "01",
    title: "Spatial Analysis for Urban Planning",
    description: "Developed geospatial models to analyze. Leveraged Google Earth Engine for advanced spatial data processing and visualization.",
    linkText: "More shots from this project ↗",
    linkHref: "/",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/485de4f9acd5fa05bf5f8ea76f479b0ec2f8cc7731c2c0091bfb97ad6a16097d?apiKey=198cb895976944b4a234b85e05ffd29d&",
    imageAlt: "Urban planning spatial analysis visualization"
  },
  {
    number: "02",
    title: "PCollaborative Mapping Initiative",
    description: "Conducted risk mapping. Focused on utilizing GIS tools like ArcGis to assess and visualize potential impacts.",
    linkText: "See case study →",
    linkHref: "#",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bff6ece8edaca9fd0d55706c10569ef087bd5e5579b2c6894e05ce27d4da5cc3?apiKey=198cb895976944b4a234b85e05ffd29d&",
    imageAlt: "Risk mapping visualization"
  },
  {
    number: "03",
    title: "Collaborative Mapping Initiative",
    description: "Worked with Aganta.id on an open-source project to enhance accessibility of spatial data for",
    linkText: "Project WIP",
    linkHref: "#",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bb6eb28103ea52d99a741a757b943f73fc016a701a27f95e42b878f849ec9e8?apiKey=198cb895976944b4a234b85e05ffd29d&",
    imageAlt: "Collaborative mapping project visualization"
  }
];

export const navigationItems: NavigationItemProps[] = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  // { label: "Playground", href: "/" },
  { label: "Contact", href: "/contact" }
];

export const socialLinks: SocialLinkProps[] = [
  { name: "Github", url: "https://github.com/olenjeluk/" },
  { name: "Linkedin", url: "https://www.linkedin.com/in/uswatunhr/" },
  { name: "Instagram", url: "https://www.instagram.com/uswatunhr_/" }
];
