import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import { Box } from './Box';
import { Loading } from './Loading';
import { Footer } from './Footer/Footer';

export const Layout = () => {
    return (
        <Box as="div"
            mx="auto"
            // my="200px"
            maxWidth="1280px"
            minHeight="100%"
            display="flex"
            flexDirection="column"
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
            {/* <Footer /> */}
        </Box>
    );
};