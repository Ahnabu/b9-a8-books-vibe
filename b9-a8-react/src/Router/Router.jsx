import { Button } from '@material-tailwind/react'
import { Outlet } from 'react-router-dom';

const Router = () => {
    return (
        <div>
            <Button>Button</Button>
            <h1 className='text-3xl'>text</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Router;