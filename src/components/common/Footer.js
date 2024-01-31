import { faEarthAsia } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer({ type }) {
  return (
    <footer className={type}>
      <ul>
        <li>Policy</li>
        <li>Terms</li>
        <li>Settings</li>
        <li>Copyright &copy; 2024 Oh's Teacher</li>
      </ul>

      <form className="footer-form">
        <FontAwesomeIcon icon={faEarthAsia} className="icon-globe" />
        <select name="language" id="">
          <option value="eng">Eng</option>
          <option value="kor">Kor</option>
          <option value="jap">Jap</option>
          <option value="chi">Chi</option>
        </select>
      </form>
    </footer>
  )
}

export default Footer
