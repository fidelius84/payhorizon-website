// ─────────────────────────────────────────
// PAYHORIZON v2 — components.js
// ─────────────────────────────────────────

const NAV = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo" aria-label="Payhorizon home">
      <div class="nav-logo-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      Payhorizon
    </a>
    <ul class="nav-links" role="list">
      <li><a href="index.html">Home</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="sectors.html">Sectors</a></li>
      <li><a href="acquirers.html">Our Panel</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
    <div class="nav-right">
      <a href="contact.html" class="btn btn-teal">Get a free review</a>
    </div>
    <button class="nav-burger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<nav class="mobile-nav" aria-label="Mobile navigation">
  <a href="index.html">Home</a>
  <a href="services.html">Services</a>
  <a href="sectors.html">Sectors</a>
  <a href="acquirers.html">Our Panel</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
  <a href="contact.html" class="btn btn-teal">Get a free review</a>
</nav>
`;

const FOOTER = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="nav-logo" style="margin-bottom:0">
          <div class="nav-logo-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          Payhorizon
        </div>
        <p class="footer-brand-body">
          Independent merchant services broker. We introduce UK businesses to FCA-regulated payment providers — with no hidden agenda, full rate transparency, and ongoing support.
        </p>
      </div>
      <div>
        <p class="footer-col-label">Services</p>
        <ul class="footer-links">
          <li><a href="services.html#terminals">Card Terminals</a></li>
          <li><a href="services.html#icpp">IC++ Pricing</a></li>
          <li><a href="services.html#ecommerce">Online Payments</a></li>
          <li><a href="services.html#epos">EPOS Systems</a></li>
          <li><a href="services.html#openbanking">Open Banking</a></li>
          <li><a href="services.html#mca">Business Funding</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-label">Company</p>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="acquirers.html">Our Panel</a></li>
          <li><a href="sectors.html">Sectors</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-label">Legal</p>
        <ul class="footer-links">
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
          <li><a href="terms.html">Terms &amp; Conditions</a></li>
          <li><a href="cookie-policy.html">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-legal">
        <strong style="color:rgba(255,255,255,0.35);display:block;margin-bottom:4px;">Payhorizon Limited</strong>
        Registered in England &amp; Wales. Company No. 16092547. Registered office: 16 Brampton Court, 7 Union Road, Romford, RM7 0GS.<br>
        Payhorizon Limited is an introducer appointed by <strong style="color:rgba(255,255,255,0.3)">M World Business Solutions Limited</strong> (FCA FRN: 1003907). Payhorizon Limited is not authorised or regulated by the Financial Conduct Authority. ICO Registration No. ZC038563.<br>
        Payhorizon Limited does not hold client funds, execute payments, or act as an acquirer, payment institution, or e-money institution. All merchant agreements are between the merchant and the relevant FCA-regulated acquiring institution.
        <br><br>
        <a href="privacy-policy.html">Privacy Policy</a> &nbsp;&middot;&nbsp;
        <a href="terms.html">Terms</a> &nbsp;&middot;&nbsp;
        <a href="cookie-policy.html">Cookies</a>
        &nbsp;&middot;&nbsp; &copy; ${new Date().getFullYear()} Payhorizon Limited. All rights reserved.
      </div>
      <div class="footer-regs">
        <span class="footer-reg">ICO ZC038563</span>
        <span class="footer-reg">Co. 16092547</span>
        <span class="footer-reg">Via MWBS FRN 1003907</span>
      </div>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const n = document.getElementById('nav-ph');
  const f = document.getElementById('footer-ph');
  if (n) n.outerHTML = NAV;
  if (f) f.innerHTML = FOOTER;
});
