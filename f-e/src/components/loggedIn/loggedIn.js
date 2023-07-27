import Footer from "../footer";
import Header from "../header";
import Loginsignin from "../loginInorSignIn/loginsignin"
import TodoList from "../toDo/todolist";

const LoggedIn = () => {

    return (

        <div>
            <Header />
            <Loginsignin />
            <TodoList/>
            <Footer />
        </div>

    );
};

export default LoggedIn;