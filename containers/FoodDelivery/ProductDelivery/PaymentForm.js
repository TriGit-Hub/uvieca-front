import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm() {
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
  return (
    <React.Fragment>
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
          />
        </Grid>
        <Grid  item xs={12} >
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
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Marcar casilla si usted se hara cargo de la informacion de facturacion"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}