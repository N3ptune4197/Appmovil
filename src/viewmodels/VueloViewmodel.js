import { useState, useEffect } from 'react';
import VueloModel from '../models/VueloModel';

const useVueloViewModel = () => {
    const [vuelos, setVuelos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Integrar API
        setIsLoading(true);
        // Simulación de una llamada a API
        setTimeout(() => {
            const fetchedVuelos = [
                new VueloModel(1, 'Lima', 'Cusco', '2024-09-15', 50),
                new VueloModel(2, 'Lima', 'Arequipa', '2024-09-16', 80),
            ];
            setVuelos(fetchedVuelos);
            setIsLoading(false);
        }, 1000);
    }, []);

    return {
        vuelos,
        isLoading,
    };
};

export default useVueloViewModel;
