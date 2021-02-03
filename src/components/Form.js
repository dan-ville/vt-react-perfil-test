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

    // input components may be given an onChange prop with its value set to this handleChange function. 
    // whenever changes occur (such as keystrokes) in that input component, this function will be called. 
    const handleChange = ({ target }) => {
        console.log(target)
        // the useState hook initializes the userData variable and sets it to the initalData object  
        // whenever a change occurs handleChange is called, the component that triggered the change will send the userData object passes data to the userData variable, which is then updated.
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
            {/* this form is made using antd components */}
            {/* each Form.Item is a component */}
            <Form 
                layout = "horizontal"
                labelCol = {{span : 5}}
            >
                {/* IDENTIFICATION DROPDOWN FIELD */}
                <Form.Item label = "Tipo Identificacion">
                    <Select name = "tipoIdentificacion">
                        {
                            // loops through the tipoID array to return a selectable list that the user can click on
                            tipoId.map(x=>{
                               return(
                                   <Select.Option key = {x.id}>{x.descripcion}</Select.Option>
                               ) 
                            })
                        }
                    </Select>
                </Form.Item>
                {/* FIRST NAME FIELD */}
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
                {/* MIDDLE NAME FIELD */}
                <Form.Item label = "Segundo nombre">
                    <Input name = "segundoNombre" onChange = {handleChange}/>
                </Form.Item>
                {/* LAST NAME FIELD */}
                <Form.Item label = "Primer apellido">
                    <Input name = "primerApellido" onChange = {handleChange}/>
                </Form.Item>
                {/* OTHER LAST NAME FIELD */}
                <Form.Item label = "Segundo apellido">
                    <Input name = "segundoApellido" onChange = {handleChange}/>
                </Form.Item>
            </Form>
            {/* SUBMIT DATA BUTTON */}
            <Button type = "primary" onClick = {sendData}>
                Enviar datos
            </Button>
        </>
    )
}

export default FormUser