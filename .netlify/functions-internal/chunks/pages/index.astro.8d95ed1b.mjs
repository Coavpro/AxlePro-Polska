import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.4a7ce0d2.mjs';
import 'html-escaper';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$6 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Astro description">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <meta name="description" content="Idol is an elegant landing page template for micro SaaS products built with AstroJS & Skeleton CSS">
    <title>${title}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
  ${renderHead()}</head>
  <body>
    ${renderSlot($$result, $$slots["default"])}
  </body></html>`;
}, "/home/bugbuster/Documents/work/AxlePro-Polska/src/layouts/Layout.astro", void 0);

const Logo = "/_astro/logodark.fbffa8e2.svg";

const $$Astro$5 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="nav astro-3EF6KSR2">
    <div class="container row astro-3EF6KSR2">
     <div class="nav-logo one-third column astro-3EF6KSR2">
         <a href="#" class="logo-link astro-3EF6KSR2">
             <img${addAttribute(Logo, "src")} alt="Brand logo" class="astro-3EF6KSR2">
         </a>
     </div>
    </div>
 </header>`;
}, "/home/bugbuster/Documents/work/AxlePro-Polska/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="product-hero astro-BBE6DXRZ">
  <div class="container astro-BBE6DXRZ">
      <div class="d-table astro-BBE6DXRZ">
          <div class="d-table-cell center astro-BBE6DXRZ">
              <div class="hero-copy astro-BBE6DXRZ">
                  <h1 class="h1-title astro-BBE6DXRZ">AxlePro-Polska</h1>
                  <p class="astro-BBE6DXRZ">Twoim zaufanym dostawcy osi i zawieszeń do ciężarówek! 
                    Naszym celem jest zapewnienie najwyższej jakości rozwiązań dla transportu ciężarowego. 
                    Oferujemy niezawodne części, które zwiększają bezpieczeństwo i wydajność Twojej floty.</p>
              </div>
          </div>
      </div>
  </div>
</section>`;
}, "/home/bugbuster/Documents/work/AxlePro-Polska/src/components/Hero.astro", void 0);

const ejes = "/_astro/eje.b38baa4d.jpg";

const suspen = "/_astro/suspen.8b52b36e.jpeg";

const $$Astro$3 = createAstro();
const $$Brief = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Brief;
  return renderTemplate`${maybeRenderHead()}<section class="product-brief astro-HRGAL3UM" id="features">
  <div class="container astro-HRGAL3UM">
    <!-- Feature Two -->
    <div class="row product-brief-items astro-HRGAL3UM">
      <div class="brief-media center one-half column astro-HRGAL3UM">
        <img${addAttribute(ejes, "src")} class="md-width astro-HRGAL3UM">
      </div>
      <div class="brief-tab one-half column astro-HRGAL3UM">
        <h3 class="h2-title astro-HRGAL3UM">Osie</h3>
        <p class="m-paragraph m-margin astro-HRGAL3UM">Oferujemy szeroki wybór osi do ciężarówek, które są niezawodne, trwałe i dostosowane do różnych potrzeb transportowych.</p>
      </div>
    </div>

    <!-- Feature One -->
    <div class="row product-brief-items astro-HRGAL3UM">
      <div class="brief-tab one-half column astro-HRGAL3UM">
        <h3 class="h2-title astro-HRGAL3UM">Zawieszenia</h3>
        <p class="m-paragraph m-margin astro-HRGAL3UM">Nasze zawieszenia gwarantują płynną i bezpieczną jazdę, niezależnie od obciążenia czy warunków drogowych.</p>
      </div>
      <div class="brief-media center one-half column astro-HRGAL3UM">
        <img${addAttribute(suspen, "src")} class="md-width astro-HRGAL3UM">
      </div>
    </div>
  </div>
</section>`;
}, "/home/bugbuster/Documents/work/AxlePro-Polska/src/components/Brief.astro", void 0);

const $$Astro$2 = createAstro();
const $$Email = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Email;
  return renderTemplate`${maybeRenderHead()}<section class="contact-form astro-MSWYB5GG">
  <div class="container row astro-MSWYB5GG">
    <div class="form-wrapper flex js column astro-MSWYB5GG">
      <h2 class="astro-MSWYB5GG">Kontaktuj się z nami</h2>
      <form action="mailto:informacja@axlepro.com" method="post" enctype="text/plain" class="astro-MSWYB5GG">
        <div class="form-group astro-MSWYB5GG">
          <label for="name" class="astro-MSWYB5GG">Imię i nazwisko</label>
          <input type="text" id="name" name="name" placeholder="Wpisz swoje imię i nazwisko" required class="astro-MSWYB5GG">
        </div>
        <div class="form-group astro-MSWYB5GG">
          <label for="email" class="astro-MSWYB5GG">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Wpisz swój e-mail" required class="astro-MSWYB5GG">
        </div>
        <div class="form-group astro-MSWYB5GG">
          <label for="message" class="astro-MSWYB5GG">Wiadomość</label>
          <textarea id="message" name="message" placeholder="Napisz swoją wiadomość" rows="5" required class="astro-MSWYB5GG"></textarea>
        </div>
        <div class="form-submit astro-MSWYB5GG">
          <button type="submit" class="submit-btn astro-MSWYB5GG">Wyślij wiadomość</button>
        </div>
      </form>
    </div>
  </div>
</section>`;
}, "/home/bugbuster/Documents/work/AxlePro-Polska/src/components/Email.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="astro-SZ7XMLTE">
  <div class="container row astro-SZ7XMLTE">
    <div class="footer-link flex js one-half column astro-SZ7XMLTE">
      <p class="astro-SZ7XMLTE">Dane kontaktowe:</p>
      <div class="emails astro-SZ7XMLTE">
        <a href="mailto:sprzedaz@axlepro.com" class="astro-SZ7XMLTE">sprzedaz@axlepro.com</a>
        <a href="mailto:informacja@axlepro.com" class="astro-SZ7XMLTE">informacja@axlepro.com</a>
      </div>
    </div>
    <div class="footer-note flex js one-half column astro-SZ7XMLTE">
      <div class="footer-info astro-SZ7XMLTE">
        <p class="astro-SZ7XMLTE">© 2025 AxlePro Polska. Wszelkie prawa zastrzeżone.</p>
        <div class="footer-links astro-SZ7XMLTE">
          <a class="astro-SZ7XMLTE">Polityka prywatności</a>
          <a class="astro-SZ7XMLTE">Warunki użytkowania</a>
        </div>
      </div>
    </div>
  </div>
</footer>`;
}, "/home/bugbuster/Documents/work/AxlePro-Polska/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Idol | Micro SaaS landing page" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, {})}
	${renderComponent($$result2, "Hero", $$Hero, {})}
	${renderComponent($$result2, "Brief", $$Brief, {})}
	${renderComponent($$result2, "Email", $$Email, {})}
	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/home/bugbuster/Documents/work/AxlePro-Polska/src/pages/index.astro", void 0);

const $$file = "/home/bugbuster/Documents/work/AxlePro-Polska/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
