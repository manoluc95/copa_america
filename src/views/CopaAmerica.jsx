import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { partidos } from "../components/partidos/partidos";

const CopaAmerica = () => {
  const navigate = useNavigate();

  const fases = {
    grupos: partidos.filter((partido) => partido.fase === "De grupos"),
    cuartos: partidos.filter((partido) => partido.fase === "Cuartos de final"),
    semifinales: partidos.filter((partido) => partido.fase === "Semifinales"),
    final: partidos.filter((partido) => partido.fase === "Final"),
  };

  const handleMatchClick = (partido) => {
    navigate(`/partido/${partido.id}`);
  };

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
                    <Typography variant="h6">
                      {partido.equipo1} {partido.resultado} {partido.equipo2}
                    </Typography>
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
    </Box>
  );
};

export default CopaAmerica;
