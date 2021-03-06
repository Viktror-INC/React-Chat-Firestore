import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import {useContext} from "react";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";
import './index.css';

function App() {
    const {auth} = useContext(Context);
    const [user,loading, error] = useAuthState(auth);
    console.log(user, error)
    if (loading) {
        return <Loader/>
    }
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
