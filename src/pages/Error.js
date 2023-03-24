import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className="error-container">
            <h1 className="error-title">Something went wrong!</h1>
            <Link to='/' className="error-link">Home</Link>
        </div>
    );
}

export default ErrorPage;