import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const Background = styled("div")({
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});

const TrendBox = styled(motion.div)({
    backgroundColor: "rgb(116, 172, 223, 0.5)",
    padding: "20px",
    borderRadius: "15px",
    margin: "20px auto",
    maxWidth: "100%",
    textAlign: "center",
    color: "white",
});

const CarouselImageContainer = styled(Box)({
    position: "relative",
    height: "450px",
    overflow: "hidden",
    cursor: "pointer", 
});

function HomePage() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/copa_america");
    };

    return (
        <Background>
            <Container maxWidth="lg" sx={{ position: "relative" }}>
                <TrendBox
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Typography variant="h6" mb={2}>
                        Titulos de la Selección
                    </Typography>
                    <Box sx={{ maxWidth: "80%", margin: "0 auto" }}>
                        <Carousel
                            showThumbs={false}
                            autoPlay
                            infiniteLoop
                            interval={5000}
                            showStatus={false}
                            dynamicHeight={false}
                        >
                            <div onClick={handleRedirect}>
                                <CarouselImageContainer>
                                    <motion.img
                                        src="/img/copa1.jpg"
                                        alt="Campeón Copa América"
                                        style={{ height: "100%", width: "100%", objectFit: "cover" }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            color: "white",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            textAlign: "center",
                                            opacity: 0,
                                            transition: "opacity 0.3s ease",
                                            ":hover": { opacity: 1 },
                                        }}
                                    >
                                        Detalles sobre el campeón de la Copa América
                                    </Box>
                                </CarouselImageContainer>
                            </div>

                            {/* Imagen 2 del carrusel con clic para redirigir */}
                            <div onClick={handleRedirect}>
                                <CarouselImageContainer>
                                    <motion.img
                                        src="/img/copa2.jpg"
                                        alt="Campeón histórico"
                                        style={{ height: "100%", width: "100%", objectFit: "cover" }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </CarouselImageContainer>
                            </div>
                        </Carousel>
                    </Box>
                </TrendBox>
            </Container>
        </Background>
    );
}

export default HomePage;

