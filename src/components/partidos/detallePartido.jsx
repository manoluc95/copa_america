import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";
import { partidos } from "./partidos";
import { jugadoresArgentina } from "../jugadores/Argentina"; // jugadores de argentina

const DetallePartido = () => {
    const { id } = useParams();
    const partido = partidos.find((p) => p.id === parseInt(id));
    const findPlayerData = (nombre) => jugadoresArgentina.find((jugador) => jugador.nombre === nombre);

    if (!partido) {
        return <Typography variant="h6">Partido no encontrado</Typography>;
    }

    return (
        <Box padding={5}>
            <Typography variant="h4" gutterBottom>
                Detalles del Partido
            </Typography>
            <Typography variant="h5">
                {partido.equipo1} {partido.resultado} {partido.equipo2}
            </Typography>
            <Typography variant="body1">Fase: {partido.fase}</Typography>
            <Typography variant="body1">Fecha: {partido.fecha}</Typography>
            <Typography variant="body1">Estadio: {partido.estadio}</Typography>

            {/* Goleadores */}
            {partido.goleadores?.length > 0 && (
                <Box marginTop={4}>
                    <Typography variant="h6" gutterBottom>Goleadores:</Typography>
                    <Grid container spacing={2}>
                        {partido.goleadores.map((goleador, index) => {
                            const playerData = findPlayerData(goleador);
                            return (
                                <Grid item xs={6} sm={12} key={index}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={playerData?.foto || "default.jpg"}
                                            alt={goleador}
                                            sx={{ objectFit: "cover", objectPosition: "top" }}
                                        />
                                        <CardContent>
                                            <Typography variant="body2">{goleador}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            )}

            {/* Penales */}
            {partido.penales?.length > 0 && (
                <Box marginTop={4}>
                    <Typography variant="h6" gutterBottom>Tiros de Penal:</Typography>
                    <Box>
                        {partido.penales.map((penal, index) => (
                            <Typography key={index} variant="body2">
                                {penal.jugador}: {penal.resultado}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default DetallePartido;
