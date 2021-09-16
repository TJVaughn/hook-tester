import axios from "axios";
import React, { useEffect, useState } from "react";
import Socket from "./Socket";

function Hooks() {

    const [allHooks, setAllHooks] = useState([])

    const getHooks = async () => {
        let res = await axios.get('/hook')
        setAllHooks(res.data.body)
        // console.log(allHooks);
    }
    const deleteHook = async (id) => {
        await axios.delete(`/hook/${id}`)
        getHooks()
    }

    const createHook = async(evt) => {
        evt.preventDefault()
        await axios.post('/hook') 
        getHooks()
    }

    useEffect(()=>{
        getHooks()
    }, [setAllHooks])
    return ( 
        <div>
            <div>
                <h1>Create Hook </h1>
                <form onSubmit={createHook}>
                    <button>CREATE HOOK</button>
                </form>
                <hr />
            </div> 
            {allHooks.map(i => (
                <div key={i._id}>
                    <h3>{`/hook/${i.url}`}</h3>
                    <p>
                        {JSON.stringify(i.data)}
                    </p>
                    <button onClick={() => {deleteHook(i._id)}}>
                        DELETE HOOK
                    </button>
                    <hr />
                </div>
            ))}
            <Socket refresh={getHooks} />
        </div>
     );
}

export default Hooks;