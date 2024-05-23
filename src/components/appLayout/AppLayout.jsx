import {useSelector} from "react-redux";
import {getIsOnAddItemPage} from "../../globalSlice";
import AddItem from "../addItem/AddItem";
import Home from "../home/Home";

function AppLayout() {

    const isAddItemPage = useSelector(getIsOnAddItemPage);

    return (
        <>
            {isAddItemPage ? <AddItem/> : <Home/>}
        </>
    );
}

export default AppLayout;