import { useState } from 'react';
import RegisterModel from '../models/RegisterModel';

const useRegisterViewModel = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const registerUser = async () => {
        setIsLoading(true);
        try {
            await RegisterModel.register(username, password);
            // registro exitoso
        } catch (error) {
            // error
        } finally {
            setIsLoading(false);
        }
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        isLoading,
        registerUser,
    };
};

export default useRegisterViewModel;
