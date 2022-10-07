import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import { Box } from './Box';
import { Loading } from './Loading';

export const Layout = () => {
    return (
        <Box as="div"
            mx="auto"
            // my="200px"
            width="960px"
            // p={5}
            // bg="maybeYellow"
            // border="normal"
            // borderRadius="sm"
            // borderColor="almostDarkGreen"
            // boxShadow="shadow"
        >
            <AppBar />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </Box>
    );
};