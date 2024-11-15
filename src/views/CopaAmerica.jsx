import { useState } from "react";
import { Box, Typography, Card, CardContent, Dialog, DialogTitle, DialogContent, Button, CardMedia, Grid } from "@mui/material";
import { jugadoresArgentina } from "../components/jugadores/Argentina";
import { partidos } from "../components/partidos/partidos";

const CopaAmerica = () => {
  const [selectedMatch, setSelectedMatch] = useState(null);

  const handleMatchClick = (match) => {
    setSelectedMatch(match);
  };

  const handleClose = () => {
    setSelectedMatch(null);
  };

  const fases = {
    grupos: partidos.filter((partido) => partido.fase === "De grupos"),
    cuartos: partidos.filter((partido) => partido.fase === "Cuartos de final"),
    semifinales: partidos.filter((partido) => partido.fase === "Semifinales"),
    final: partidos.filter((partido) => partido.fase === "Final"),
  };

  const findPlayerData = (nombre) => jugadoresArgentina.find((jugador) => jugador.nombre === nombre);

  return (
    <Box padding={5} marginTop={8}>
      <Typography variant="h4" gutterBottom>
        Copa América 2024
      </Typography>
      <Typography variant="body1" paragraph>
        Argentina se consagró campeona de la Copa América 2024.
      </Typography>

      {/* Sección de partidos por fase */}
      {Object.entries(fases).map(([fase, partidosFase]) => (
        <Box marginTop={4} key={fase}>
          <Typography variant="h5" gutterBottom>
            {fase.charAt(0).toUpperCase() + fase.slice(1)}
          </Typography>
          <Grid container spacing={2}>
            {partidosFase.map((partido) => (
              <Grid item xs={12} sm={6} md={4} key={partido.id}>
                <Card sx={{ cursor: "pointer" }} onClick={() => handleMatchClick(partido)}>
                  <CardContent>
                    <Typography variant="h6">{partido.equipo1} {partido.resultado} {partido.equipo2}</Typography>
                    <Typography variant="body2">Fase: {partido.fase}</Typography>
                    <Typography variant="body2">Fecha: {partido.fecha}</Typography>
                    <Typography variant="body2">Estadio: {partido.estadio}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      <Dialog open={Boolean(selectedMatch)} onClose={handleClose}>
  <DialogTitle>Detalles del Partido</DialogTitle>
  <DialogContent>
    {/* Sección de goleadores del partido */}
    {selectedMatch.goleadores && (
      <>
        <Typography variant="h6" gutterBottom>Goleadores:</Typography>
        <Grid container spacing={2}>
          {selectedMatch.goleadores.map((goleador, index) => {
            const playerData = findPlayerData(goleador);
            return (
              <Grid item xs={6} sm={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="100"
                    image={playerData?.foto || "default.jpg"}
                    alt={goleador}
                  />
                  <CardContent>
                    <Typography variant="body2">{goleador}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </>
    )}

    {/* Sección de penales */}
    {selectedMatch.penales && (
      <>
        <Typography variant="h6" gutterBottom>Tiros desde el Punto Penal:</Typography>
        <Box>
          {selectedMatch.penales.map((penal, index) => (
            <Typography key={index} variant="body2">
              {penal.jugador}: {penal.resultado}
            </Typography>
          ))}
        </Box>
      </>
    )}

    <Button onClick={handleClose} sx={{ marginTop: 2 }}>
      Cerrar
    </Button>
  </DialogContent>
</Dialog>
    </Box>
  );
};

export default CopaAmerica;
