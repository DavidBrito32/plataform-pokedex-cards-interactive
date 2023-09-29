import { Outlet } from 'react-router-dom'
import Header from '../../components/Header';

const BaseLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default BaseLayout;