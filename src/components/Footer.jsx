export default function Footer() {
  return (
    <footer className="footer py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-2">
        <div><strong>RICH HEALTH</strong> - Fresh salads. Rich life.</div>
        <div>richhealth@gmail.com | © {new Date().getFullYear()} RICH HEALTH. All rights reserved.</div>
      </div>
    </footer>
  );
}
