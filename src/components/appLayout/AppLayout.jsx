import {useSelector} from "react-redux";
import {getIsOnAddItemPage} from "../../globalSlice";
import AddItem from "../addItem/AddItem";
import Home from "../home/Home";
import {isUserLoggedIn} from "../auth/authSlice";
import LoginFormContainer from "../auth/LoginFormContainer";

function AppLayout() {

    const isLoggedIn = useSelector(isUserLoggedIn);
    const isAddItemPage = useSelector(getIsOnAddItemPage);

    if (!isLoggedIn) {
        return <LoginFormContainer/>
    }

    return (
        <>
            {isAddItemPage ? <AddItem/> : <Home/>}
        </>
    );
}

export default AppLayout;