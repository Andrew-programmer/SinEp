import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Context} from "./index";
import {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router";
import {HOME_ROUTE, LOGIN_ROUTE} from "./uutils/consts";
import {socket} from "./socket";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = observer(() => {
    const {gender, user} = useContext(Context);
    const [isConnected, setIsConnected] = useState(socket.connected)
    const [fooEvents, setFooEvents] = useState([]);

    useEffect(() => {
        gender.fetchGenders();
        user.fetchUser();

        const onConnect = () => {
            setIsConnected(true);
        };

        const onDisconnect = () => {
            setIsConnected(false);
        };

        const onFooEvents = (value) => {
          setFooEvents(prevState => [...prevState, value]);
        };

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('foo', onFooEvents);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('foo', onFooEvents);
        }

    }, []);


    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter className={'App'}>
                <AppRouter/>
            </BrowserRouter>
        </ThemeProvider>
    );
});

export default App;
