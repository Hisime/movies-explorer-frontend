import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import {useEffect, useState} from "react";
import api from "../../utils/MainApi";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Alert from "../Alert/Alert";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    const [isAuthorizing, setIsAuthorizing] = useState(false);
    const [alertMessage, setAlertMessage] = useState({
        message: '',
        isSuccess: false,
    });
    const location = useLocation();

    useEffect(() => {
        tokenCheck()
    }, [])

    useEffect(() => {
        if (!loggedIn) {
            return
        }
        api.getUserInfo()
            .then((res) => {
                setCurrentUser(res);
            })
            .catch((err) => console.log(err));
    }, [loggedIn]);

    const onNewMessage = (message, isSuccess = false) => {
        setAlertMessage({message, isSuccess});
    }

    const onLogout = () => {
        api.logout().catch((e) => e).finally(() => {
            localStorage.removeItem('id');
            setLoggedIn(false);
            navigate('/')
        })
    }

    const onLogin = ({email, password}) => {
        setIsAuthorizing(true);
        api.authorize(email, password)
            .then(data => {
                if (data._id) {
                    localStorage.setItem('id', data._id)
                    setLoggedIn(true)
                    setCurrentUser(data);
                    onNewMessage('');
                    navigate('/movies')
                }
            })
            .catch((err) => onNewMessage(err))
            .finally(() => setIsAuthorizing(false))
    }

    const onRegister = ({email, password, name}) => {
        setIsAuthorizing(true);
        api.register(email, password, name)
            .then(() => onLogin({email, password}))
            .catch((err) => {
                setIsAuthorizing(false)
                onNewMessage(err);
            })
    }

    const onEditUser = ({email, name}) => {
        api.updateUser(email, name).then((user) => {
            setCurrentUser(user);
            onNewMessage('Данные пользователя изменены', true)
        }).catch((err) => onNewMessage(err))
    }

    const tokenCheck = () => {
        const id = localStorage.getItem('id');
        if (!id) {
            return
        }
        api.getUserInfo()
            .then((res) => {
                if (res) {
                    setCurrentUser(res);
                    setLoggedIn(true)
                    if (['/sign-up', '/sign-in'].includes(location.pathname)) {
                        navigate('/movies');
                        return;
                    }
                    navigate(location.pathname);
                }
            })
            .catch((err) => console.log(err));
    }
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Alert message={alertMessage.message.toString()} isSuccess={alertMessage.isSuccess} closeAlert={() => onNewMessage('')}></Alert>
            <Routes>
                <Route path="/sign-up" element={<Register handleRegister={onRegister} isRegisterProcessing={isAuthorizing}/>}/>
                <Route path="/sign-in" element={<Login handleLogin={onLogin} isRegisterProcessing={isAuthorizing}/>}/>
                <Route path="/profile" element={<ProtectedRoute loggedIn={loggedIn} element={() => <Profile handleEditUser={onEditUser} handleLogout={onLogout}/>}/>}/>
                <Route path="/movies" element={<ProtectedRoute loggedIn={loggedIn} element={() => <Movies handleAlert={onNewMessage}/>}/>}/>
                <Route path="/saved-movies"
                       element={<ProtectedRoute loggedIn={loggedIn} element={() => <SavedMovies handleAlert={onNewMessage}/>}/>}/>
                <Route path={'/'} element={<Main loggedIn={loggedIn}/>}/>
                <Route path={'*'} element={<PageNotFound/>}/>
            </Routes>
        </CurrentUserContext.Provider>

    );
}

export default App;
