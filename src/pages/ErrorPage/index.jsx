import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <h1>Error Page</h1>
            <Link to={"/"}>Voltar a segurança</Link>
        </>
    )
}

export default ErrorPage;