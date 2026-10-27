import { Cursor } from '../components'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-bar mono">
        <div className="footer-msg">{'// Thanks for exploring my portfolio.'}<Cursor /></div>
        <div className="footer-right">
          <span>© {new Date().getFullYear()} Sharique Ansari</span>
          <a href="#home" className="back-top">↑ back to top</a>
        </div>
      </div>
    </footer>
  )
}
