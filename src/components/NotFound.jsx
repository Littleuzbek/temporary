import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound">
        <h1>Page Not Found!</h1>
        <p>Something went wrong! Please go back to home page</p>
        <Link to='/'>Home</Link>
    </div>
  )
}
