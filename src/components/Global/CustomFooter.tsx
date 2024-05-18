export default function CustomFooter() {
  return (
    <footer className="footer bg-base-200 p-10 text-base-content">
      <aside>
        <img
          src="./src/assets/geo-quest-logo.svg"
          className="h-16 w-16"
          alt="Geo Quest Logo"
        />
        <div>
          <h3>Geo Quest Ltd.</h3>
          <p>Providing reliable tech since 2012</p>
          <p>
            Developed by{" "}
            <a
              className="link-hover link font-semibold"
              href="https://github.com/tolikhalas/Viso-Test-Task-React"
            >
              Anatolii Halas
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link-hover link">Branding</a>
        <a className="link-hover link">Design</a>
        <a className="link-hover link">Marketing</a>
        <a className="link-hover link">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link-hover link">About us</a>
        <a className="link-hover link">Contact</a>
        <a className="link-hover link">Jobs</a>
        <a className="link-hover link">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link-hover link">Terms of use</a>
        <a className="link-hover link">Privacy policy</a>
        <a className="link-hover link">Cookie policy</a>
      </nav>
    </footer>
  );
}
