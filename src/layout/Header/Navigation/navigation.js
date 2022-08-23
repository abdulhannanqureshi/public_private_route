const token =  localStorage.getItem("token");

const navigation = [
  { name: "Home", href: "/", current: true, token: true },
  { name: "Market Place", href: "/marketplace", current: false, token: true },
  { name: "About Us", href: "/about-us", current: false, token: true },
  { name: "Contact Us", href: "/contact-us", current: false, token: true },
];

  export default navigation