import React, {useState}  from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Grid from '@mui/material/Grid';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Checkbox from '@mui/material/Checkbox';
import ClientService from "../../../services/client.services";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Datos Personales', 'Copia de Documentos', 'Informacion de facturacion'];



// function getStepContent(step) {
//   const [data, setData] = useState({
//     nombre: "",
//     nit: "",
//     ncr: "",
//     telefono: "",
//     email: "",
//     razon_social: "",
//     actividad_eco: "",
//     constitucion_emp: "",
//     file1: null,
//     file2: null,
//     file3: null,
//   });
  
//   const uploadClient = async () => {
  
//     const client = {
//       act_economica: data.actividad_eco,
//       email: data.email,
//       nit: data.nit,
//       constitucion_empresa: data.constitucion_emp,
//       nrc: data.ncr,
//       razon_social: data.razon_social,
//       telefono: data.telefono,
//       nombre: data.nombre,
//       files: [data.file1, data.file2, data.file3],
//     };
  
//     const result = await ClientService.guardar(client);
  
//   };
//   switch (step) {
//     case 0:
//       return (<React.Fragment>
//         <Typography variant="h6" gutterBottom>
//           Informacion Personal
//         </Typography>
//         <Grid container spacing={3}>
//           <Grid item xs={12} >
//             <TextField
//               required
//               id="firstName"
//               name="firstName"
//               label="Nombre Completo"
//               fullWidth
//               autoComplete="given-name"
//               variant="standard"
//               value={data.nombre}
//               onChange={(e) =>
//                 setData({ ...data, nombre: e.target.value })
//               }
//             />
//           </Grid>
//           <Grid item xs={12} >
//             <TextField
//               required
//               id="lastName"
//               name="lastName"
//               label="Nit"
//               fullWidth
//               autoComplete="family-name"
//               variant="standard"
//               value={data.nit}
//               onChange={(e) => setData({ ...data, nit: e.target.value })}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               id="address1"
//               name="address1"
//               label="Correo Electronico"
//               fullWidth
//               autoComplete="shipping address-line1"
//               variant="standard"
//               value={data.email}
//               onChange={(e) =>
//                 setData({ ...data, email: e.target.value })
//               }
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               id="address2"
//               name="address2"
//               label="Telefono"
//               fullWidth
//               autoComplete="shipping address-line2"
//               variant="standard"
//               value={data.telefono}
//               onChange={(e) =>
//                 setData({ ...data, telefono: e.target.value })
//               }
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="city"
//               name="city"
//               label="Nrc"
//               fullWidth
//               autoComplete="shipping address-level2"
//               variant="standard"
         
//               value={data.ncr}
//               onChange={(e) => setData({ ...data, ncr: e.target.value })}
          
//             />
//           </Grid>
//           {/* <Grid item xs={12} sm={6}>
//             <TextField
//               id="state"
//               name="state"
//               label="State/Province/Region"
//               fullWidth
//               variant="standard"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="zip"
//               name="zip"
//               label="Zip / Postal code"
//               fullWidth
//               autoComplete="shipping postal-code"
//               variant="standard"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="country"
//               name="country"
//               label="Country"
//               fullWidth
//               autoComplete="shipping country"
//               variant="standard"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
//               label="Use this address for payment details"
//             />
//           </Grid> */}
//         </Grid>
//       </React.Fragment>);
//     case 1:
//       return (<React.Fragment>
//         <Typography variant="h6" gutterBottom>
//           Payment method
//         </Typography>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               required
//               id="cardName"
//               label="Razon social"
//               fullWidth
//               autoComplete="cc-name"
//               variant="standard"
//               value={data.razon_social}
//               onChange={(e) =>
//                 setData({ ...data, razon_social: e.target.value })
//               }
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               required
//               id="cardNumber"
//               label="Actividad Economica"
//               fullWidth
//               autoComplete="cc-number"
//               variant="standard"
//               value={data.actividad_eco}
//               onChange={(e) =>
//                 setData({ ...data, actividad_eco: e.target.value })
//               }
//             />
//           </Grid>
//           <Grid item xs={12} >
//             <TextField
//               required
//               id="expDate"
//               label="Constitucion Empresa"
//               fullWidth
//               autoComplete="cc-exp"
//               variant="standard"
//               value={data.constitucion_emp}
//               onChange={(e) =>
//                 setData({ ...data, constitucion_emp: e.target.value })
//               }
//             />
//           </Grid>
    
     
//           {/* <Grid item xs={12} md={6}>
//             <TextField
//               required
//               id="cvv"
//               label="CVV"
//               helperText="Last three digits on signature strip"
//               fullWidth
//               autoComplete="cc-csc"
//               variant="standard"
//             />
//           </Grid> */}
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={<Checkbox color="secondary" name="saveCard" value="yes" />}
//               label="Remember credit card details for next time"
//             />
//           </Grid>
//         </Grid>
//       </React.Fragment>);
//     case 2:
//       return (<React.Fragment>
//         <Typography variant="h6" gutterBottom>
//           Payment method
//         </Typography>
//         <Grid container spacing={3}>
         
//           <Grid  item xs={12} md={12}>
//           <h4>Foto NIT</h4>
//                     <input
//                       type="file"
//                       class="custom-file-input"
//                       name="myImage"
//                       onChange={(event) => {
//                         console.log(event.target.files[0]);
//                         setData({ ...data, file1: event.target.files[0] });
//                       }}
//                     />
//           </Grid>
//           <Grid  item xs={12} >
//           <h4>Foto Constitucion Empresa</h4>
//                     <input
//                       type="file"
//                       name="myImage"
//                       class="custom-file-input"
//                       onChange={(event) => {
//                         console.log(event.target.files[0]);
//                         setData({ ...data, file2: event.target.files[0] });
//                       }}
//                     />
//           </Grid>
//           <Grid  item xs={12} >
//           <h4>Foto NCR</h4>
//                     <input
//                       type="file"
//                       name="myImage"
//                       class="custom-file-input"
//                       onChange={(event) => {
//                         console.log(event.target.files[0]);
//                         setData({ ...data, file3: event.target.files[0] });
//                       }}
//                     />
//           </Grid>
     
//           {/* <Grid item xs={12} md={6}>
//             <TextField
//               required
//               id="cvv"
//               label="CVV"
//               helperText="Last three digits on signature strip"
//               fullWidth
//               autoComplete="cc-csc"
//               variant="standard"
//             />
//           </Grid> */}
       
//         </Grid>
//       </React.Fragment>);
//     default:
//       throw new Error('Unknown step');
//   }
// }

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
 

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
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
  function getStepContent(step) {
 
    switch (step) {
      case 0:
        return (<React.Fragment>
          <Typography variant="h6" gutterBottom>
            Informacion Personal
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} >
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Nombre Completo"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value={data.nombre}
                onChange={(e) =>
                  setData({ ...data, nombre: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Nit"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                value={data.nit}
                onChange={(e) => setData({ ...data, nit: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                label="Correo Electronico"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
                value={data.email}
                onChange={(e) =>
                  setData({ ...data, email: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="address2"
                name="address2"
                label="Telefono"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                value={data.telefono}
                onChange={(e) =>
                  setData({ ...data, telefono: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="Nrc"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
           
                value={data.ncr}
                onChange={(e) => setData({ ...data, ncr: e.target.value })}
            
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Use this address for payment details"
              />
            </Grid> */}
          </Grid>
        </React.Fragment>);
      case 1:
        return (<React.Fragment>
          <Typography variant="h6" gutterBottom>
            Payment method
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardName"
                label="Razon social"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
                value={data.razon_social}
                onChange={(e) =>
                  setData({ ...data, razon_social: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardNumber"
                label="Actividad Economica"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
                value={data.actividad_eco}
                onChange={(e) =>
                  setData({ ...data, actividad_eco: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                required
                id="expDate"
                label="Constitucion Empresa"
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
                value={data.constitucion_emp}
                onChange={(e) =>
                  setData({ ...data, constitucion_emp: e.target.value })
                }
              />
            </Grid>
      
       
            {/* <Grid item xs={12} md={6}>
              <TextField
                required
                id="cvv"
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
              />
            </Grid> */}
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                label="Remember credit card details for next time"
              />
            </Grid>
          </Grid>
        </React.Fragment>);
      case 2:
        return (<React.Fragment>
          <Typography variant="h6" gutterBottom>
            Payment method
          </Typography>
          <Grid container spacing={3}>
           
            <Grid  item xs={12} md={12}>
            <h4>Foto NIT</h4>
                      <input
                        type="file"
                        class="custom-file-input"
                        name="myImage"
                        onChange={(event) => {
                          console.log(event.target.files[0]);
                          setData({ ...data, file1: event.target.files[0] });
                        }}
                      />
            </Grid>
            <Grid  item xs={12} >
            <h4>Foto Constitucion Empresa</h4>
                      <input
                        type="file"
                        name="myImage"
                        class="custom-file-input"
                        onChange={(event) => {
                          console.log(event.target.files[0]);
                          setData({ ...data, file2: event.target.files[0] });
                        }}
                      />
            </Grid>
            <Grid  item xs={12} >
            <h4>Foto NCR</h4>
                      <input
                        type="file"
                        name="myImage"
                        class="custom-file-input"
                        onChange={(event) => {
                          console.log(event.target.files[0]);
                          setData({ ...data, file3: event.target.files[0] });
                        }}
                      />
            </Grid>
       
            {/* <Grid item xs={12} md={6}>
              <TextField
                required
                id="cvv"
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
              />
            </Grid> */}
         
          </Grid>
        </React.Fragment>);
      default:
        throw new Error('Unknown step');
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            UVIECA Creación de Solicitud
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Crear una Solicitud
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                     Regresar
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={activeStep === steps.length - 1 ? uploadClient : handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Enviar solicitud' : 'Siguiente'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        {/* <Copyright /> */}
      </Container>
    </ThemeProvider>
  );
}