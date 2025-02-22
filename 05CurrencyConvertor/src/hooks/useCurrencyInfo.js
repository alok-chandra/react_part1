import { useEffect,useState } from "react"

function useCurrencyInfo(currency="USD"){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => {
            setData(res['rates']);
        }).catch((err) => {
            console.log(err);
        })
    }, [currency])
    console.log(data?data:null);
    return data;
}

export default useCurrencyInfo;