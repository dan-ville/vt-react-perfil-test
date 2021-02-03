import React, { useEffect, useState } from "react";
import { Tabs, Image, Button, Form, Input, Select } from "antd";


import { 
  BellOutlined, 
  NumberOutlined, 
  MailOutlined, 
  PhoneOutlined,
  EnvironmentOutlined,
  UserOutlined
} from "@ant-design/icons";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./perfil.css";

// This grabs the necessary properties from each component API for Antd components
const { TabPane } = Tabs;
const { Option } = Select;

export const Perfil = () => {
  const initialData = {
    nombre: "",
    apellido: "",
    "Tipo documento": "",
    "Numero documento": "",
    "Pais de afiliacion": "",
    "Dia de nacimiento": "",
    "Mes de nacimiento": "",
    "Ano de nacimiento": "",
    "Correo electronico": "",
    Celular: "",
    Genero: "",
    "Pais de residencia": "",
    "Estado de residencia": "",
    "Ciudad de residencia": "",
    Direccion: "",
    "Codigo postal": "",
    Nacionalidad: "",
    "Alias-One2trip": "",
    "Pais operacion - One2trip": "",
  };

  return (
    <>
      <Tabs tabPosition="left">
        <TabPane tab="Información Básica" key="1">
          {/* FOTO DE PERFIL */}
          <div className="foto-perfil-div">
            <div className="foto-perfil">
              {/* How do I get the image to be round? */}
              <Image
                width={200}
                // why won't my profileDefault.png load?!
                // update: to render local files, you need to import them 
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                alt="default profile"
                preview="false"
              />
            </div>
            {/* If you set a button type from AntD's predetermined types, some CSS properties won't work correctly, so I left out the type prop */}
            <Button size="middle" className="btn-cargar">
              Cargar
            </Button>
          </div>

          {/* CONTENIDO DE PERFIL */}
          <div className="info-perfil-div">
            <div>
              <h2>Nombre Apellido</h2>
              <p>{`Fecha expiración {YYYY-MM-DD}`}</p>
            </div>

            {/* INFORMACION DE EL USUARIO */}
            <Form layout="vertical" className="info-usuario">
              {/* TIPO DOCUMENTO */}
              <Form.Item className="form-item" label="Tipo documento">
                <Input
                  prefix={<NumberOutlined className="form-input-icon" />}
                  placeholder="Número de seguro social"
                />
              </Form.Item>
              {/* NUMERO DOCUMENTO */}
              <Form.Item className="form-item" label="Numero documento">
                <Input
                  prefix={<NumberOutlined className="form-input-icon" />}
                  placeholder="Private"
                />
              </Form.Item>
              {/* PAIS DE AFILIACION */}
              <Form.Item className="form-item" label="Pais de afiliacion">
                <Input></Input>
              </Form.Item>
              {/* DIA DE NACIMIENTO */}
              <Form.Item className="form-item" label="Dia de nacimiento">
                <Input></Input>
              </Form.Item>
              {/* MES DE NACIMIENTO */}
              <Form.Item className="form-item" label="Mes de nacimiento">
                <Input></Input>
              </Form.Item>
              {/* ANO DE NACIMIENTO */}
              <Form.Item className="form-item" label="Ano de nacimiento">
                <Input></Input>
              </Form.Item>
              {/* CORREO ELECTRONICO */}
              <Form.Item className="form-item" label="Correo electronico">
                <Input
                  prefix={<MailOutlined className="form-input-icon" />}
                  placeholder="ex: abc123@gmail.com"
                />
              </Form.Item>
              {/* CELULAR */}
              <Form.Item className="form-item" label="Celular">
                <Input prefix={<PhoneOutlined className="form-input-icon" />} />
              </Form.Item>
              {/* GENERO */}
              <Form.Item className="form-item" label="Genero">
                <Select>
                  <Option value="Masculino">Masculino</Option>
                  <Option value="Femenino">Femenino</Option>
                  <Option value="Otro">Otro</Option>
                </Select>
              </Form.Item>
              {/* PAIS DE RESIDENCIA */}
              <Form.Item className="form-item" label="Pais de residencia">
                <Input></Input>
              </Form.Item>
              {/* ESTADO DE RESIDENCIA */}
              <Form.Item className="form-item" label="Estado de nacimiento">
                <Input></Input>
              </Form.Item>
              {/* CIUDAD DE RESIDENCIA */}
              <Form.Item className="form-item" label="Ciudad de nacimiento">
                <Input></Input>
              </Form.Item>
              {/* DIRECCION */}
              <Form.Item className="form-item" label="Direccion">
                <Input
                  prefix={<EnvironmentOutlined className="form-input-icon" />}
                />
              </Form.Item>
              {/* CODIGO POSTAL */}
              <Form.Item className="form-item" label="Codigo postal">
                <Input
                  prefix={<NumberOutlined className="form-input-icon" />}
                />
              </Form.Item>
              {/* NACIONALIDAD */}
              <Form.Item className="form-item" label="Nacionalidad">
                <Input></Input>
              </Form.Item>
              {/* ALIAS - ONE2TRIP */}
              <Form.Item className="form-item" label="Alias - One2trip">
                <Input prefix={<UserOutlined className="form-input-icon" />} />
              </Form.Item>
              {/* PAIS OPERACION - ONE2TRIP */}
              <Form.Item
                className="form-item"
                label="Pais Operacion - One2trip"
              >
                <Input></Input>
              </Form.Item>
            </Form>
            {/* Footer */}
            <div className="info-footer">
              <Button id="footer-button" size="large" icon={<BellOutlined />}>
                Telegram
              </Button>
              <p id="footer-text-1">
                Puedes unirte a nuestra comunidad de Telegram para recibir
                notificaciones relacionadas con tus compras, sean de turismo o
                binario. No te preocupes, serán sólo relacionadas con tus
                movimientos.
              </p>
              <p id="footer-text-2">¿Qué esperas? ¡Únete!</p>
            </div>
          </div>
          {/*  */}
          <Button id="btn-volver" type="ghost">
            Volver
          </Button>
        </TabPane>

        {/* Proximo tab */}
        <TabPane tab="Tarjeta de Crédito" key="2"></TabPane>
  
        {/* Proximo tab */}
        <TabPane tab="Fee Personalizado" key="3"></TabPane>
      </Tabs>
    </>
  );
};
