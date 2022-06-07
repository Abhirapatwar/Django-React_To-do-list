import react, { useEffect } from 'react'
import '../try.css'
import Plan from '../Components/Plan.js'
import { useState } from 'react'
import axios from 'axios'
// import background from "../static/ws.png";

function Home() {
    const [data, setData] = useState("");
    const [items, setItems] = useState([]);

    const showPlan = () => {
        axios.get('http://127.0.0.1:8000/lists').then((response) => {
            // console.log(response.data)
            setItems(response.data)
        })
    }

    const AddPlan = (d) => {
        axios.post('http://127.0.0.1:8000/create/', d).then((response) => {
            setData("")
            showPlan()
        })
    }

    function funcdata(thing) {
        setData(thing.target.value);

    }
    function handlechange() {
        // if (data !== "") {
        //     const item = [...items, data];
        //     setItems(item)
        //     setData("")
        // }
        let dt = { item: data }
        AddPlan(dt)

    }
    function handeldelete(id) {
        // const olditems = [...items]
        // const x= olditems.filter((element,i)=>{
        //     return i !== id
        // })
        // setItems(x)
        // console.log('deleted', { id })
        axios.delete(`http://127.0.0.1:8000/delete/${id}`).then((response) => {
            showPlan()
        })
    }

    useEffect(() => {
        showPlan()
    })

    return (
        <>
            <div >
                <div className="container arow">
                    <div className="row">
                        <div className="col-sm-6 mx-auto mt-5">
                            <h1 className='text-center texth1'>Today's Plan </h1>
                            <div className="input-group mb-3 mt-5 acol">
                                <input type="text" className="form-control ainp" value={data} onChange={funcdata} placeholder="Write here" aria-label="Write content" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handlechange} >Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    items.map((values, i) => {
                        return <Plan key={i} id={values.id} values={values.item} senddel={handeldelete} />
                    })
                }
            </div>
        </>
    )

}
export default Home