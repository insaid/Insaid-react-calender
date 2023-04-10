import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Box,
  Paper,
  Container,
  Grid,
  CardMedia,
} from "@mui/material";
import { Link, useNavigate,useParams } from "react-router-dom";
// import Loginnav from "./Navbar/Loginnav";
import calendarimg from "./images/schedule.png";
import Footer from "./Navbar/Footer";
// import Withoutlogin from "./Navbar/Withoutlogin";
import Myaccountnav from "./Navbar/myaccountnav";
import axios from "axios";
import ClientConfig from "./client";
const Myaccount = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [enrooll, setEnrooll] = useState("");
  let navigate = useNavigate();
  const [program, setData] = useState("");
  const options = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  


 
  const sendData = {
    email: localStorage.getItem("email"),
   
  };
  const siteUrl = ClientConfig.siteUrl;
  useEffect(() => {
    // console.log(auth)
   
    var enrooll = localStorage.getItem("count");
    setEnrooll(enrooll);
   
    axios
      .post(`${siteUrl}/login/fetchinfo `, sendData, options)
      .then((result) => {
        setData(result.data);
        console.log(result.data);
      });
  }, []);
  const handleClickOpen = (enrol_id, category, program_id) => {
    console.log(enrol_id, category);
    window.localStorage.setItem("enrol_id", enrol_id);
    window.localStorage.setItem("category", category);
    window.localStorage.setItem("program_id", program_id);
    navigate(`/Calendar`);
  };

  if (enrooll == "2") {
    return (
      <>
        <Myaccountnav />
        <Box sx={{ backgroundColor: "#f3f6f9", pb: 17 }}>
          <Box sx={{ pt: 10 }}>
            <Container fixed>
              <Box sx={{ mt: 5 }}>
                <Typography sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                  CHOOSE YOUR CALENDAR
                </Typography>
              </Box>
              <Grid container rowSpacing={1} sx={{ justifyContent: "center" }}>
                {program &&
                  program.map(({ enrol_id, program_id, category }) => {
                    if (program_id == "1" || program_id == "10") {
                      return (
                        <Grid item lg={4} md={12} sm={12} sx={{ mx: 2 }}>
                          <center>
                            <Box
                              sx={{
                                boxShadow:
                                  "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                height: "161px",
                                width: "200px",
                                borderRadius: "25px",
                                backgroundColor: "#FBAB7",
                                backgroundImage:
                                  "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
                                mt: 12,
                              }}
                              onClick={() =>
                                handleClickOpen(enrol_id, category, program_id)
                              }
                            >
                              <center>
                                {" "}
                                <CardMedia
                                  component="img"
                                  image={calendarimg}
                                  alt="green iguana"
                                  sx={{ width: "128px", ml: 0.5 }}
                                />
                              </center>
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                DS Calendar
                              </Typography>
                            </Box>
                          </center>
                        </Grid>
                      );
                    }
                    if (program_id == "2" || program_id == "11") {
                      return (
                        <Grid item lg={4} md={12} sm={12} sx={{ mx: 2 }}>
                          <center>
                            <Box
                              sx={{
                                boxShadow:
                                  "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                height: "161px",
                                width: "200px",
                                borderRadius: "25px",
                                backgroundColor: "#FBAB7",
                                backgroundImage:
                                  "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
                                mt: 12,
                              }}
                              onClick={() =>
                                handleClickOpen(enrol_id, category, program_id)
                              }
                            >
                              <center>
                                {" "}
                                <CardMedia
                                  component="img"
                                  image={calendarimg}
                                  alt="green iguana"
                                  sx={{ width: "128px", ml: 0.5 }}
                                />
                              </center>
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                DS Calendar
                              </Typography>
                            </Box>
                          </center>
                        </Grid>
                      );
                    }
                    if (program_id == "3" || program_id == "12") {
                      return (
                        <Grid item lg={4} md={12} sm={12} sx={{ mx: 2 }}>
                          <center>
                            <Box
                              sx={{
                                boxShadow:
                                  "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                height: "161px",
                                width: "200px",
                                borderRadius: "25px",
                                backgroundColor: "#FBAB7",
                                backgroundImage:
                                  "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
                                mt: 12,
                              }}
                              onClick={() =>
                                handleClickOpen(enrol_id, category, program_id)
                              }
                            >
                              <center>
                                {" "}
                                <CardMedia
                                  component="img"
                                  image={calendarimg}
                                  alt="green iguana"
                                  sx={{ width: "128px", ml: 0.5 }}
                                />
                              </center>
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                DS Calendar
                              </Typography>
                            </Box>
                          </center>
                        </Grid>
                      );
                    }
                    if (program_id == "4" || program_id == "13") {
                      return (
                        <Grid item lg={4} md={12} sm={12} sx={{ mx: 2 }}>
                          <center>
                            <Box
                              sx={{
                                boxShadow:
                                  "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                height: "161px",
                                width: "200px",
                                borderRadius: "25px",
                                backgroundColor: "#FBAB7",
                                backgroundImage:
                                  "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
                                mt: 12,
                              }}
                              onClick={() =>
                                handleClickOpen(enrol_id, category, program_id)
                              }
                            >
                              <center>
                                {" "}
                                <CardMedia
                                  component="img"
                                  image={calendarimg}
                                  alt="green iguana"
                                  sx={{ width: "128px", ml: 0.5 }}
                                />
                              </center>
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                DS Calendar
                              </Typography>
                            </Box>
                          </center>
                        </Grid>
                      );
                    }
                    if (program_id == "19") {
                      return (
                        <Grid item lg={4} md={12} sm={12} sx={{ mx: 2 }}>
                          <center>
                            <Box
                              sx={{
                                boxShadow:
                                  "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                height: "161px",
                                width: "200px",
                                borderRadius: "25px",
                                backgroundColor: "#FBAB7",
                                backgroundImage:
                                  "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
                                mt: 12,
                              }}
                              onClick={() =>
                                handleClickOpen(enrol_id, category, program_id)
                              }
                            >
                              <center>
                                {" "}
                                <CardMedia
                                  component="img"
                                  image={calendarimg}
                                  alt="green iguana"
                                  sx={{ width: "128px", ml: 0.5 }}
                                />
                              </center>
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                DS Calendar
                              </Typography>
                            </Box>
                          </center>
                        </Grid>
                      );
                    }
                    if (program_id == "20") {
                      return (
                        <Grid item lg={4} md={12} sm={12} sx={{ mx: 2 }}>
                          <center>
                            <Box
                              sx={{
                                boxShadow:
                                  "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                height: "161px",
                                width: "200px",
                                borderRadius: "25px",
                                backgroundColor: "#FBAB7",
                                backgroundImage:
                                  "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
                                mt: 12,
                              }}
                              onClick={() =>
                                handleClickOpen(enrol_id, category, program_id)
                              }
                            >
                              <center>
                                {" "}
                                <CardMedia
                                  component="img"
                                  image={calendarimg}
                                  alt="green iguana"
                                  sx={{ width: "128px", ml: 0.5 }}
                                />
                              </center>
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                DS Calendar
                              </Typography>
                            </Box>
                          </center>
                        </Grid>
                      );
                    }
                    if (program_id == "21") {
                      return (
                        <Grid item lg={4} md={12} sm={12} sx={{ mx: 2 }}>
                          <center>
                            <Box
                              sx={{
                                boxShadow:
                                  "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                height: "161px",
                                width: "200px",
                                borderRadius: "25px",
                                backgroundColor: "#FBAB7",
                                backgroundImage:
                                  "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
                                mt: 12,
                              }}
                              onClick={() =>
                                handleClickOpen(enrol_id, category, program_id)
                              }
                            >
                              <center>
                                {" "}
                                <CardMedia
                                  component="img"
                                  image={calendarimg}
                                  alt="green iguana"
                                  sx={{ width: "128px", ml: 0.5 }}
                                />
                              </center>
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                DS Calendar
                              </Typography>
                            </Box>
                          </center>
                        </Grid>
                      );
                    }
                    if (program_id == "14" || program_id == "16") {
                      return (
                        <Grid item lg={4} md={12} sm={12} sx={{ mx: 2 }}>
                          <center>
                            <Box
                              sx={{
                                boxShadow:
                                  "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                height: "161px",
                                width: "200px",
                                borderRadius: "25px",
                                backgroundColor: "#08AEEA",
                                backgroundImage:
                                  "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)",
                                mt: 12,
                              }}
                              onClick={() =>
                                handleClickOpen(enrol_id, category, program_id)
                              }
                            >
                              <center>
                                {" "}
                                <CardMedia
                                  component="img"
                                  image={calendarimg}
                                  alt="green iguana"
                                  sx={{ width: "128px", ml: 0.5 }}
                                />
                              </center>
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                PM Calendar
                              </Typography>
                            </Box>
                          </center>
                        </Grid>
                      );
                    }
                    if (program_id == "15" || program_id == "17") {
                      return (
                        <Grid item lg={4} md={12} sm={12} sx={{ mx: 2 }}>
                          <center>
                            <Box
                              sx={{
                                boxShadow:
                                  "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                height: "161px",
                                width: "200px",
                                borderRadius: "25px",
                                backgroundColor: "#08AEEA",
                                backgroundImage:
                                  "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)",
                                mt: 12,
                              }}
                              onClick={() =>
                                handleClickOpen(enrol_id, category, program_id)
                              }
                            >
                              <center>
                                {" "}
                                <CardMedia
                                  component="img"
                                  image={calendarimg}
                                  alt="green iguana"
                                  sx={{ width: "128px", ml: 0.5 }}
                                />
                              </center>
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                PM Calendar
                              </Typography>
                            </Box>
                          </center>
                        </Grid>
                      );
                    }
                    if (program_id == "18") {
                      return (
                        <Grid item lg={4} md={12} sm={12} sx={{ mx: 2 }}>
                          <center>
                            <Box
                              sx={{
                                boxShadow:
                                  "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                height: "161px",
                                width: "200px",
                                borderRadius: "25px",
                                backgroundColor: "#08AEEA",
                                backgroundImage:
                                  "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)",
                                mt: 12,
                              }}
                              onClick={() =>
                                handleClickOpen(enrol_id, category, program_id)
                              }
                            >
                              <center>
                                {" "}
                                <CardMedia
                                  component="img"
                                  image={calendarimg}
                                  alt="green iguana"
                                  sx={{ width: "128px", ml: 0.5 }}
                                />
                              </center>
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                PM Calendar
                              </Typography>
                            </Box>
                          </center>
                        </Grid>
                      );
                    }
                    if (program_id == "26") {
                      return (
                        <Grid item lg={4} md={12} sm={12} sx={{ mx: 2 }}>
                          <center>
                            <Box
                              sx={{
                                boxShadow:
                                  "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                height: "161px",
                                width: "200px",
                                borderRadius: "25px",
                                backgroundColor: "#08AEEA",
                                backgroundImage:
                                  "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)",
                                mt: 12,
                              }}
                              onClick={() =>
                                handleClickOpen(enrol_id, category, program_id)
                              }
                            >
                              <center>
                                {" "}
                                <CardMedia
                                  component="img"
                                  image={calendarimg}
                                  alt="green iguana"
                                  sx={{ width: "128px", ml: 0.5 }}
                                />
                              </center>
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                PM Calendar
                              </Typography>
                            </Box>
                          </center>
                        </Grid>
                      );
                    }
                    if (program_id == "22") {
                      return (
                        <Grid item lg={4} md={12} sm={12} sx={{ mx: 2 }}>
                          <center>
                            <Box
                              sx={{
                                boxShadow:
                                  "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                height: "161px",
                                width: "200px",
                                borderRadius: "25px",
                                backgroundColor: "#08AEEA",
                                backgroundImage:
                                  "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)",
                                mt: 12,
                              }}
                              onClick={() =>
                                handleClickOpen(enrol_id, category, program_id)
                              }
                            >
                              <center>
                                {" "}
                                <CardMedia
                                  component="img"
                                  image={calendarimg}
                                  alt="green iguana"
                                  sx={{ width: "128px", ml: 0.5 }}
                                />
                              </center>
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "#fff",
                                  fontWeight: "bold",
                                }}
                              >
                                PM Calendar
                              </Typography>
                            </Box>
                          </center>
                        </Grid>
                      );
                    }
                  })}
              </Grid>
            </Container>
          </Box>
        </Box>
      </>
    );
  }
};
export default Myaccount;
