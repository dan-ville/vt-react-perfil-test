import { 
    Button,
    Form,
    Input,
    notification,
    Select
} from 'antd';

import React, { useState } from 'react';

const FormUser = ()=>{

    const initialData = {
        primerNombre : "",
        segundoNombre : "",
        primerApellido : "",
        segundoApellido : "",
        tipoIdentificacion : ""
    }

    const tipoId = [
        {
            id    : 1,
            sigla : "CC",
            descripcion : "Cédula de ciudadanía"
        },
        {
            id    : 2,
            sigla : "TI",
            descripcion : "Tarjeta de identidad"
        },
        {
            id    : 3,
            sigla : "RC",
            descripcion : "Registro Civil"
        }
    ]

    const [userData, setUserData] = useState(initialData)

    const handleChange = ({target})=>{
        setUserData({...userData, 
            [target.name] : target.value}
        )
    }

    const sendData = ()=>{
        if(userData.primerNombre !== ""){
            console.log(userData);
        }
        else{
            notification.error(
                {
                    message : "Error",
                    description : "Datos sin completar",
                    placement : "bottomRight"
                }
            )
        }
    }

    return(
        <>
            <Form 
                layout = "horizontal"
                labelCol = {{span : 5}}
            >
                <Form.Item label = "Tipo Identificacion">
                    <Select name = "tipoIdentificacion">
                        {
                            tipoId.map(x=>{
                               return(
                                   <Select.Option key = {x.id}>{x.descripcion}</Select.Option>
                               ) 
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item label = "Primer nombre" rules = {[{
                    required : true,
                    message  : "primerNombre es requerido"
                }]}>
                    <Input 
                        name         = "primerNombre" 
                        type         = "text"
                        autoComplete = "off"
                        placeholder  = "primer nombre ejemplo : Pedro"
                        onChange     = {handleChange}
                    />
                </Form.Item>
                <Form.Item label = "Segundo nombre">
                    <Input name = "segundoNombre" onChange = {handleChange}/>
                </Form.Item>
                <Form.Item label = "Primer apellido">
                    <Input name = "primerApellido" onChange = {handleChange}/>
                </Form.Item>
                <Form.Item label = "Segundo apellido">
                    <Input name = "segundoApellido" onChange = {handleChange}/>
                </Form.Item>
            </Form>
            <Button type = "primary" onClick = {sendData}>
                Enviar datos
            </Button>
        </>
    )
}

export default FormUser