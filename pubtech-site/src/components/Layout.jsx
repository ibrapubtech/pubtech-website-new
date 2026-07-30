import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children, showGhostRocket = false, contactEmail }) {
  return (
    <>
      <div className="bg-stage"></div>
      <div className="bg-grain"></div>
      {showGhostRocket && (
        <div className="rocket-ghost" aria-hidden="true">
          <img src="/assets/illustrations/rocket.png" alt="" />
        </div>
      )}

      <Nav contactEmail={contactEmail} />

      <main id="smooth-content">
        {children}
        <Footer />
      </main>
    </>
  );
}
