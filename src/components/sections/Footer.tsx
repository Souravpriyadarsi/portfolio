import Container from "../ui/Container";

import { footer } from "../../data/footer";

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-white/6 py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="footer-name">{footer.name}</h3>

            <p className="footer-tagline">{footer.tagline}</p>

            <p className="footer-copyright">{footer.copyright}</p>
          </div>

          <a href="#top" className="footer-top-link">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
