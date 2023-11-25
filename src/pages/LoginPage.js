import { useState } from "react";
import { SIGNUP_PAGE_PATH, HOME_PAGE_PATH } from "../constants/PathConstants";
import useNavigation from "../hooks/use-navigation";
import { useAuthenticateLoginUserMutation } from "../store";
import { useDispatch } from 'react-redux';
import { setLoggedInCustomer } from '../store';

function LoginPage() {
    const [ loginError, setLoginError] = useState("");
    const { navigate } = useNavigation();
    const [authenticateLoginUser, results] = useAuthenticateLoginUserMutation();
    const dispatch = useDispatch();

    const hasLoginError = loginError.length > 0 ? true : false;

    const handleLoginClick = async(event) => {
        //TODO: Implement OAuth2 authentication, as the industry standard
        event.preventDefault();

        let Customer = { customerUsername: event.target[0].value, customerPassword: event.target[1].value };
        const results = await authenticateLoginUser(Customer).unwrap();
        
        if(results.errorMessage != null) {
            setLoginError(results.errorMessage);
        } else {
            let storedCustomer = {customerId: results.customerId, customerUsername: results.customerUsername, 
                customerFirstName: results.customerFirstName, customerLastName: results.customerLastName, customerEmail: results.customerEmail};
            dispatch(setLoggedInCustomer(storedCustomer));
            navigate(HOME_PAGE_PATH);
        }
    }

    /**
     * Method to handle navigation
     * Meta key (Mac) and ctrl key (Windows) will use the href to navigate
     * to a new tab.
     * Prevent default to stop the app from refetching data from the server.
     * @param {*} event 
     * @returns 
     */
    const handleSignupClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(SIGNUP_PAGE_PATH);
    };
    
    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleLoginClick}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button type="submit" className="button is-primary w-full">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href={SIGNUP_PAGE_PATH} className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={handleSignupClick}>Sign up</a>
                            </p>
                            {hasLoginError && <p className="text-sm text-red-800">{loginError}</p>}
                        </form>
                    </div>
                </div>
            </div>
      </section>
    );
};

export default LoginPage;