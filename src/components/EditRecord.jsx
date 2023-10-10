import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const EditRecord = ({url}) => {
    const [record, setRecord] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getRecordById();
    }, [])

    const getRecordById = async () => {
        const res = await axios.get(
            `${url}rFormWeb/${id}`
        );
        setRecord(res.data);
    }

  return (
    <div>
        <h1>Editar Registro</h1>
        <div> 
            <label>idcuest</label>
            <input type="text" value={record.cuestn} onChange={ e => setRecord({...record, cuestn: e.target.value})}/>
        </div>
    </div>
  )
}
