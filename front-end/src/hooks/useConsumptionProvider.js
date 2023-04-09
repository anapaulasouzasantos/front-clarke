import { useState } from 'react';

const useConsumptionProvider = () => {
    const [consumption, setConsumption] = useState('');
    const [supplier, setSuplier] = useState([]);
    const [showTable, setShowTable] = useState(false);

    return {
        consumption,
        setConsumption,
        supplier,
        setSuplier,
        showTable,
        setShowTable
    }
}

export default useConsumptionProvider;