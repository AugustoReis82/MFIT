import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Gender from './gender';
import CPF  from './cpf';
import CEP from './cep';
import axios from 'axios';

const theme = createTheme();

const api = axios.create({ 
  baseURL: 'https://mais-fit.herokuapp.com/',
})

export default function SignUp() {
  const SignUpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const formData = {
      completeName: data.get("completeName"),
      email: data.get("email"),
      numero: data.get("numero"),
      logradouro: data.get("logradouro"),
      bairro: data.get("bairro"),
      complemento: data.get("complemento"),
      password: data.get("password")
    }

    api.post('/clientes').then(({data}) => {
      return data
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box component="form" onSubmit={SignUpSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="completeName"
                  required
                  fullWidth
                  id="completeName"
                  label="Nome Completo"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <Gender  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <CPF />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CEP />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  id="numero"
                  label="Número"
                  name="numero"
                  autoComplete="numero"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="logradouro"
                  label="Logradouro"
                  name="logradouro"
                  autoComplete="logradouro"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="bairro"
                  label="Bairro"
                  name="bairro"
                  autoComplete="bairro"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="complemento"
                  label="Complemento"
                  name="complemento"
                  autoComplete="complemento"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}