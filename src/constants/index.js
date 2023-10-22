import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '10+', label: 'Brands' },
    { value: '50+', label: 'Shops' },
    { value: '25k+', label: 'Customers, I guess?' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Water Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Earth Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Fire Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Haha, in your dreams. You'll be charged accordingly."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Yeah, so secure that you don't have a payment option at all. No payment, no chance of loss."
    },
    {
        imgURL: support,
        label: "Reasonable Prices",
        subtext: "*No Comments*  Go through the Popular Shoes section again, you'll get it."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'I started crawling',
        rating: '-6/5',
        feedback: "Once you walk in them, you'll never want to walk again!"
    },
    {
        imgURL: customer2,
        customerName: 'Good Store, literally!',
        rating: '-11/10',
        feedback: "I might be a returning customer because the store smells nice!"
    }
];


export const footerLinks = [
    {
        title: "Team",
        links: [
            { name: "Mohith", link: "https://mohithgupta.github.io" },
            { name: "Stack Overflow", link: "https://stackoverflow.com" },
            { name: "Youtube", link: "https://youtube.com" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "You", link: "#" },
            { name: "are not", link: "#" },
            { name: "getting", link: "#" },
            { name: "any", link: "#" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "your@mail.com", link: "mailto:your@mail.com" },
            { name: "+910123456789", link: "tel:+910123456789" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
