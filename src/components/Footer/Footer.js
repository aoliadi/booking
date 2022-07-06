import footer from "./footer.module.css";

function Footer() {
  return (
    <footer className={footer.container}>
      <p className="">&copy; aoliadi, {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
