// Shape Component Type
import { FC, ReactNode } from "react";

export interface LogoShape {
  logoImg: FC;      // React component (Shape1, Shape2, etc.)
  logoText: string;
}

// Navbar
export interface NavbarMenuItem {
  item: string;
}

export interface NavbarData {
  logoText: string;
  menuItems: NavbarMenuItem[];
  buttonText: string;
}

// Header
export interface HeaderStrip {
  part1: string;
  part2: string;
}

export interface HeaderData {
  strip: HeaderStrip;
  heading: string;
  text1: string;
  text2: string;
  logosWrap: LogoShape[];
}

// Services
export interface ServiceItem {
  id: string;
  heading: string;
  text: string;
}

export interface ServicesHeading {
  part1: string;
  part2: string;
  part3: string;
  part4: string;
  part5: string;
  part6: string;
}

export interface ServicesData {
  heading: ServicesHeading;
  services: ServiceItem[];
}

// About
export interface AboutCard {
  heading: string;
  text: string;
}

export interface AboutCardsData {
  card1: AboutCard;
  card2: AboutCard;
  card3: AboutCard;
  card4: AboutCard;
}

export interface AboutData {
  heading: string;
  text: string;
  cardsData: AboutCardsData;
}

// Advertisment
export interface SubText1 {
  heading: string;
  text: string;
}

export interface SubHeading {
  part1: string;
  part2: string;
  part3: string;
  part4: string;
  part5: string;
}

export interface AdvertismentData {
  mainHeading: string;
  subText1: SubText1;
  subHeading: SubHeading;
  subText2: string;
}

// Journey
export interface JourneyGridItem {
  heading: string;
  text: string;
}

export interface JourneyData {
  heading: string;
  gridtext: {
    grid1: JourneyGridItem;
    grid2: JourneyGridItem;
    grid3: JourneyGridItem;
    grid4: JourneyGridItem;
    grid5: JourneyGridItem;
  };
}

// Footer
export interface FooterData {
  heading: string;
  text: string;
  callHeading: string;
  callText: string;
  emailHeading: string;
  emailText: string;
  boldHeading: string;
  logoHeading: string;
  logoText: string;
  copyrigthText: string;
}
