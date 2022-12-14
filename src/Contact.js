import React from 'react';
import Stack from '@mui/material/Stack';
import location from "./Image/location.png"
import mail from "./Image/mail.png"
import call from "./Image/call.png"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Contact = () => {

    return (
        <section id="Contact">
            <div style={{
                width: "100%",
                display: "flex",
                height: "100%",
            }}>
                <div style={{
                    height: "98%",
                    width: "100%",
                    display: "flex",
                    margin: "50px"
                }}>

                    {/*blue div*/}
                    <div style={{
                        height: "70%",
                        width: "45%",
                        top: "0px",
                        left: "0px",
                        backgroundColor: "rgb(1, 61, 129)",
                        position: "relative",
                        marginTop: "7.2%",
                        color: "white"
                    }}>
                        <div style={{
                            margin: "40px",
                            width: "85%",

                        }}>
                            <p style={{
                                fontSize: "35px",
                                marginTop: "10px",
                                fontWeight: "bold"
                            }}>
                                CONTACT US
                            </p>
                            <div style={{
                                width: "83%",
                                marginTop: "25px",

                            }}>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%"
                                }}>
                                    <div style={{
                                        marginTop: "25px",
                                        backgroundColor: "rgb(1, 61, 129)",
                                        height: "40px",
                                        width: "40px"
                                    }}>
                                        <img src={location}
                                            height="40px"
                                            width="40px"
                                            style={{ background: "transparent" }} />
                                    </div>
                                    <div style={{
                                        fontSize: "20px",
                                        marginTop: "20px",

                                    }}>
                                        <p>
                                            4012,Palladium Mall,Near
                                        </p>
                                        <p>
                                            Dhiraj Sons,Yogichowk
                                        </p>
                                        <p>
                                            Punagam,Surat- 395010
                                        </p>

                                    </div>
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "92%"
                                }}>
                                    <div style={{
                                        marginTop: "20px",
                                        backgroundColor: "rgb(1, 61, 129)",
                                        height: "40px",
                                        width: "40px"
                                    }}>
                                        <img src={mail}
                                            height="40px"
                                            width="40px"
                                        />
                                    </div>

                                    <div style={{
                                        fontSize: "20px",
                                        marginTop: "30px",

                                    }}>
                                        <p>
                                            info@oceanmtech.com
                                        </p>
                                    </div>
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "78%",
                                }}>
                                    <div style={{
                                        marginTop: "40px",
                                        backgroundColor: "rgb(1, 61, 129)",
                                        height: "40px",
                                        width: "40px"
                                    }}>
                                        <img src={call}
                                            height="40px"
                                            width="40px"
                                            style={{
                                                backgroundColor: "rgb(1, 61, 129)"
                                            }}
                                        />
                                    </div>
                                    <div style={{
                                        fontSize: "20px",
                                        marginTop: "45px",

                                    }}>
                                        <p>
                                            +91 910 690 2181
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/*white div*/}
                    <div style={{
                        height: "100%",
                        width: "90%",

                        // overflow: "hidden",
                        //  position:"absolute",
                        backgroundColor: "white",
                        marginLeft: "-120px",
                        boxShadow: "3px 3px 3px 3px gray"
                    }}>
                        <Stack
                            direction="row"
                            // spacing={2}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <div style={{
                                height: "100%",
                                width: "16%",

                            }}>

                            </div>
                            <div style={{
                                width: "90%",
                                height: "100%",
                                marginLeft: "30px",

                                color: "rgb(1, 61, 129)"
                            }}>
                                <p style={{
                                    fontSize: "35px",
                                    fontWeight: "bold",
                                    marginTop: "55px",
                                }}>
                                    Send a Message
                                </p>

                                <TextField
                                    id="standard-number"
                                    label="First Name"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {
                                            color: 'rgb(1, 61, 129)',
                                            fontSize: "20px"
                                        },
                                    }}
                                    // autoFocus
                                    style={{
                                        width: "45%",
                                        marginRight: "30px",
                                        marginTop: "33px"
                                    }}
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-number"
                                    label="Last Name"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {
                                            color: 'rgb(1, 61, 129)',
                                            fontSize: "20px"
                                        },
                                    }}
                                    //autoFocus
                                    style={{
                                        width: "45%",
                                        marginTop: "33px"
                                    }}
                                    variant="standard"
                                />
                                <div style={{ marginTop: "40px" }}>
                                    <TextField
                                        id="standard-number"
                                        label="Email Address"
                                        type="text"
                                        InputLabelProps={{
                                            shrink: true,
                                            style: {
                                                color: 'rgb(1, 61, 129)',
                                                fontSize: "20px"
                                            },
                                        }}
                                        //  autoFocus
                                        style={{ width: "45%", marginRight: "30px", }}
                                        variant="standard"
                                    />
                                    <TextField
                                        id="standard-number"
                                        label="Mobile Number"
                                        type="text"
                                        InputLabelProps={{
                                            shrink: true,
                                            style: {
                                                color: 'rgb(1, 61, 129)',
                                                fontSize: "20px"
                                            },
                                        }}
                                        //autoFocus
                                        style={{ width: "45%" }}
                                        variant="standard"
                                    />
                                </div>
                                <TextField

                                    id="standard-multiline-static"
                                    label="Write your  message here....."
                                    multiline
                                    rows={4}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {
                                            color: 'rgb(1, 61, 129)',
                                            fontSize: "20px"
                                        },
                                    }}
                                    style={{
                                        marginTop: "40px",
                                        width: "94%"
                                    }}
                                    // defaultValue="Default Value"
                                    variant="standard"
                                />

                                <Button variant='contained'
                                    style={{
                                        width: "120px",
                                        height: "50px",
                                        marginTop: "45px",
                                        backgroundColor: "rgb(1, 61, 129)"
                                    }}>
                                    SEND
                                </Button>
                            </div>
                        </Stack>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact;