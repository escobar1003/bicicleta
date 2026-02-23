import { useState } from 'react'

export default function Formulario(){

    const [id,setId]=useState("");
    const [marca,setMarca]=useState("");
    const [precio,setPrecio]=useState("");
    const [propietario,setPropietario]=useState("");
    const [tipo,setTipo]=useState("");
    const [color,setColor]=useState("");

    const [bicicletas,setBicicletas]=useState([]);

    function guardar(){
        let datos={id,marca,precio,propietario,tipo,color}; //objeto guarda datos
        setBicicletas([...bicicletas,datos]) //sin ... se borra lo anterior
        console.log(bicicletas); 
    }

    return(
        <div>
            <h1>FORMULARIO BICICLETAS</h1>

            <label>ID</label>
            <input required onChange={(event)=>setId(event.target.value)} /> 
            <br></br>

            <label>Marca</label>
            <input required onChange={(event)=>setMarca(event.target.value)} />
            <br></br>

            <label>Precio</label>
            <input required onChange={(event)=>setPrecio(event.target.value)} />
            <br></br>

            <label>Propietario</label>
            <input required onChange={(event)=>setPropietario(event.target.value)} />
            <br></br>

            <label>Tipo</label>
            <input required onChange={(event)=>setTipo(event.target.value)} />
            <br></br>

            <label>Color</label>
            <input required onChange={(event)=>setColor(event.target.value)} />
            <br></br>

            <button onClick={()=>guardar()} >Guardar</button>
            <br></br>

            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Marca</th>
                        <th>Precio</th>
                        <th>Propietario</th>
                        <th>Tipo</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {bicicletas.map((b,index)=>(
                        <tr key={index}>
                            <td>{b.id}</td> 
                            <td>{b.marca}</td>
                            <td>{b.precio}</td>
                            <td>{b.propietario}</td>
                            <td>{b.tipo}</td>
                            <td>{b.color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

