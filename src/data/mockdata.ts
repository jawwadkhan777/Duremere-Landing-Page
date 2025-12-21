import Shape1 from "@/components/csv/Shape1"
import Shape2 from "@/components/csv/Shape2"
import Shape3 from "@/components/csv/Shape3"
import Shape4 from "@/components/csv/Shape4"
import { AboutData, AdvertismentData, FooterData, HeaderData, JourneyData, NavbarData, ServicesData } from "@/types"


export const navbarMenuData: NavbarData = {
    logoText: "Duremere.",
    menuItems: [
        {item: "What We Do?"},
        {item:"Why Us?"},
        {item: "Case Studies"},
    ],
    buttonText: "Get a Free Consultation"
}


export const headerData: HeaderData = {
    strip: {
        part1: "AI & Software",
        part2: "Solutions Built for the GCC",
    },
    heading: "Custom Software & AI Solutions for GCC Digital Era",
    text1: {
        part1: "We design future-ready platforms, ",
        part2: "AI-powered tools",
        part3: ", and ",
        part4: "scalable backend systems",
        part5: " that help enterprises, startups, and innovators across the GCC thrive in the digital era.",
    },
    text2: "Trusted by 4,000+ companies",
    logosWrap: [
        {
            logoImg: Shape1,
            logoText: "Boltshift"},
        {
            logoImg: Shape2,
            logoText: "Lightbox"},
        {
            logoImg: Shape3,
            logoText: "FeatherDev"},
        {
            logoImg: Shape4,
            logoText: "GLobalBank"},
        
    ]

}


export const servicesData: ServicesData = {
    heading: {
        part1: "We Design ",
        part2: "Enterprise-Grade Software ",
        part3: "And ",
        part4: "AI Platforms ",
        part5: "That Enable Efficiency, ",
        part6: "Sustainability, And Long-Term Success"
    },
    services: [
        {
            id: "01",
            heading: "Custom CRM/ERP Development",
            text: "Custom-built web, mobile, and enterprise platforms designed for performance and growth.",
        },
        {
            id: "02",
            heading: "Artificial Intelligence",
            text: "AI-powered solutions that enhance decision-making, automate processes, and drive business growth.",
        },
        {
            id: "03",
            heading: "Backend Infrastructure",
            text: "Robust, scalable, and secure infrastructure to support enterprise systems and digital platforms.",
        },
        {
            id: "04",
            heading: "Systems Integration",
            text: "Seamless integration of legacy systems with modern platforms for efficiency and performance.",
        },
    ]
}

export const aboutData: AboutData = {
    heading: "Your Digital Transformation Partner in Saudi Arabia & Dubai",
    text: "We deliver AI solutions in Saudi Arabia and custom software in Dubai, driving secure and scalable digital transformation across the GCC.",
    cardsData: {
        card1: {heading: "Local Expertise, Global Standards", text: "Deep knowledge of GCC business needs."},
        card2: {heading: "AI-Powered Growth", text: "Deliver real-time insights, enabling smarter decisions and measurable business outcomes"},
        card3: {heading: "Scalable & Secure", text: "design infrastructure that grows with your business while ensuring enterprise-grade security and compliance"},
        card4: {heading: "Proven Track Record", text: "Trusted by enterprises & fast-growing startups"},

    }    
}

export const advertismentData: AdvertismentData = {
    mainHeading: "Start Your Digital Transformation in GCC",
    subText1: {
        heading: "78%",
        text: "Growth Rate"
    },
    subHeading: {
        part1: "Let’s ",
        part2: "Turn Your Idea Into Reality ",
        part3: "With Custom ",
        part4: "AI Solutions And Enterprise-Grade Software ",
        part5: "designed for the Saudi & Dubai markets.",
        
    },
    subText2: "Ready to Build Smarter?"

}


export const journeyData: JourneyData = {
    heading: "Explore Some Of The Transformative Journeys In GCC",
    gridtext: {
        grid1: {heading: "Sapling (Kallidus)", text: "US HR Tech Platform's Engineering Scale-Up Drives $10M PE Acquisition"},
        grid2: {
            heading: "Intellirent", text: "US PropTech Startup's AI Revolution Cuts Manual Work 98%"
        },
        grid3: {
            heading: "HoneyBricks", text: "Blockchain Real Estate Platform Manages $5M+ Investments Before Acquisition them."
        },
        grid4: {
            heading: "X-QUIC", text: "Hospitality AI Platform Reconciles $300M+ in OTA Commissions Automatically"
        },
        grid5: {
            heading: "Recurate", text: "US Fashion Resale Platform Scales to 100K Monthly Transactions"
        },
    }
}

export const footerData: FooterData = {
    heading: "What's your biggest challenge right now?",
    text: "Let's talk and find out why the person who referred us rates us so highly.",
    callHeading: "Call us",
    callText: "+966 XXX XXX XXX",
    emailHeading: "Email",
    emailText: "info@duremere.ai",
    boldHeading: "Let’s Talk!",
    logoHeading: "Duremere.",
    logoText: "Empowering GCC enterprises with secure, future-ready software and AI solutions.",
    copyrigthText: {
        part1: "© 2025 Duremere AI Solutions.",
        part2: " All Rights Reserved. | ",
        part3: "Privacy Policy",
        part4: " | ",
        part5: "Terms of Service",
    },
}