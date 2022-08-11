import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";
import Container from "../../../common/components/UI/Container";
import Heading from "../../../common/components/Heading";
import { InputText } from "primereact/inputtext";
import NextImage from "../../../common/components/NextImage";
import Box from "../../../common/components/Box";
import Tabs, { TabPane } from "rc-tabs";
import Fade from "react-reveal/Fade";
import RequestFormWrapper from "./requestForm.style";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import ClientService from "../../../services/client.services";

const AvailableRestaurants = () => {
  const [tabIndex, setTabIndex] = useState("0");
  const [data, setData] = useState({
    nombre: "",
    nit: "",
    ncr: "",
    telefono: "",
    email: "",
    razon_social: "",
    actividad_eco: "",
    constitucion_emp: "",
    file1: null,
    file2: null,
    file3: null,
  });

  const uploadClient = async () => {

    const client = {
      act_economica: data.actividad_eco,
      email: data.email,
      nit: data.nit,
      constitucion_empresa: data.constitucion_emp,
      nrc: data.ncr,
      razon_social: data.razon_social,
      telefono: data.telefono,
      nombre: data.nombre,
      files: [data.file1, data.file2, data.file3],
    };

    const result = await ClientService.guardar(client);

  };

  return (
    <RequestFormWrapper id="requestForm">
      <Container className="ct">
        {/* <div style={{backgroundImage:"url('/bulb.png')"}} className={"inputContainer"}>
                    <input type="text" placeholder="Nombre..." />
                    <input type="text" placeholder="Razon social" />
                    <input type="text" placeholder="Nit..." />
                    <input type="text" placeholder="Nrc..." />
                    <input type="text" placeholder="Correo..." />
                    <input type="text" placeholder="Telefono..." />
                </div> */}
        <button style={{ zIndex: 9999 }} onClick={() => setTabIndex("0")}>
          Tab0
        </button>
        <button style={{ zIndex: 9999 }} onClick={() => setTabIndex("1")}>
          Tab1
        </button>
        <button style={{ zIndex: 9999 }} onClick={() => setTabIndex("2")}>
          Tab2
        </button>

        <div className="form">
          <div className="textsub">
            <Heading as="h2" content="Solicitud de servicio" />
            <p>
              Lorem Ipsum is simply dummy text of the pri recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the pri recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <p>{tabIndex}</p>
          </div>
          {tabIndex == "0" && (
            <div class="container2">
              <Heading as="h2" content="Crea tu solicitud" />
              <Heading as="h2" content="Paso 1" />
              <div class="containerx">
                <span className="p-float-label">
                  <InputText
                    id="in"
                    value={data.nombre}
                    onChange={(e) =>
                      setData({ ...data, nombre: e.target.value })
                    }
                  />
                  <label htmlFor="in">Nombre</label>
                </span>
                <span className="p-float-label">
                  <InputText
                    id="in"
                    value={data.nit}
                    onChange={(e) => setData({ ...data, nit: e.target.value })}
                  />
                  <label htmlFor="in">Nit</label>
                </span>
                <span className="p-float-label">
                  <InputText
                    id="in"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                  <label htmlFor="in">Correo</label>
                </span>
                <span className="p-float-label">
                  <InputText
                    id="in"
                    value={data.telefono}
                    onChange={(e) =>
                      setData({ ...data, telefono: e.target.value })
                    }
                  />
                  <label htmlFor="in">Telefono</label>
                </span>
                <span className="p-float-label">
                  <InputText
                    id="in"
                    value={data.ncr}
                    onChange={(e) => setData({ ...data, ncr: e.target.value })}
                  />
                  <label htmlFor="in">Nrc</label>
                </span>

                {/* <p>Welcome</p>
                        <input type="email" placeholder="Nombre..."/>
                        <input type="password" placeholder="Password"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="button" value="Sign in"/>
                        <a href="#">Forgot Password?</a> */}
              </div>
            </div>
          )}
          {tabIndex == "1" && (
            <div class="container2">
              <Heading as="h2" content="Crea tu solicitud" />
              <Heading as="h2" content="Paso 2" />

              <div class="containerx">
                <span className="p-float-label">
                  <InputText
                    id="in"
                    value={data.razon_social}
                    onChange={(e) =>
                      setData({ ...data, razon_social: e.target.value })
                    }
                  />
                  <label htmlFor="in">Razon social</label>
                </span>

                <span className="p-float-label">
                  <InputText
                    id="in"
                    value={data.actividad_eco}
                    onChange={(e) =>
                      setData({ ...data, actividad_eco: e.target.value })
                    }
                  />
                  <label htmlFor="in">Actividad Economica</label>
                </span>
                <span className="p-float-label">
                  <InputText
                    id="in"
                    value={data.constitucion_emp}
                    onChange={(e) =>
                      setData({ ...data, constitucion_emp: e.target.value })
                    }
                  />
                  <label htmlFor="in">Constitucion Empresa</label>
                </span>
                {/* <p>Welcome</p>
                        <input type="email" placeholder="Nombre..."/>
                        <input type="password" placeholder="Password"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="button" value="Sign in"/>
                        <a href="#">Forgot Password?</a> */}
              </div>
            </div>
          )}
          {tabIndex == "2" && (
            <div class="container2">
              <Heading as="h2" content="Crea tu solicitud" />
              <Heading as="h2" content="Paso 3 Documentos" />

              <div class="containerx">
                <div>
                  <h3>Foto NIT</h3>
                  <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setData({ ...data, file1: event.target.files[0] });
                    }}
                  />
                </div>

                <div>
                  <h3>Foto Constitucion Empresa</h3>
                  <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setData({ ...data, file2: event.target.files[0] });
                    }}
                  />
                </div>

                <div>
                  <h3>Foto NCR</h3>
                  <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setData({ ...data, file3: event.target.files[0] });
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* <div class="drops">
                        <div class="drop drop-1"></div>
                        <div class="drop drop-2"></div>
                        <div class="drop drop-3"></div>
                        <div class="drop drop-4"></div>
                        <div class="drop drop-5"></div>
                    </div> */}

        <Box className="text-center">
          <a className="MoreButton" onClick={() => uploadClient()}>
            Enviar solicitud <Icon size={14} icon={arrowRight} />
          </a>
        </Box>
      </Container>
    </RequestFormWrapper>
  );
};

export default AvailableRestaurants;
