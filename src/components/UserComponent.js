import {
  Table,
  TableContainer,
  TableRow,
  TableBody,
  TableCell,
  IconButton,
  TableHead,
  Chip,
  Button,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import ConfirmBar from "./ConfirmBar";
import Moment from "react-moment";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";
import { Link } from "react-router-dom";
import { green, red } from "@mui/material/colors";
function User({
  clients,
  isLoading,
  contact,
  all,
  showdate,
  showEmail,
  showAge,
  showGender,
  current,
  isFiltered,
}) {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const contactClient = (id) => {
    axios
      .post(
        `/contact-client/${id}/`,
        {},
        {
          headers: {
            Authorization: "JWT " + localStorage.getItem("access"),
          },
        }
      )
      .then((res) => setOpen(true))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="body2" color="textSecondary">
            {all ? "Toutes les Clients " : "Clients Trop Simule"}
          </Typography>
          {!current && (
            <Link to="/Users" style={{ textDecoration: "none" }}>
              <Button>Voir tout les Clients</Button>
            </Link>
          )}
        </Box>
        <TableContainer component={Paper} sx={{ width: "100%", height: "94%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>name</TableCell>
                {showdate && (
                  <TableCell noWrap>Date D'enregistrement</TableCell>
                )}
                {showEmail && <TableCell>Email</TableCell>}
                {showGender && <TableCell>Gender</TableCell>}
                {showAge && <TableCell>Age</TableCell>}
                <TableCell>Metier</TableCell>
                <TableCell>Simulations</TableCell>
                <TableCell align="center">Verified</TableCell>
                {contact && (
                  <TableCell align="center" noWrap>
                    Contact
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading &&
                clients
                  .slice(
                    0,
                    isFiltered ? clients.length : all ? clients.length - 1 : 8
                  )
                  .map((client, index) => (
                    <TableRow
                      key={index}
                      sx={{ background: index % 2 === 0 ? "#f7f7f7" : "white" }}
                    >
                      <TableCell>{client.name}</TableCell>
                      {showdate && (
                        <TableCell>
                          <Moment format="DD/MM/YYYY">
                            {client.created_at}
                          </Moment>
                        </TableCell>
                      )}
                      {showEmail && <TableCell>{client.email}</TableCell>}
                      {showGender && <TableCell>{client.gender}</TableCell>}
                      {showAge && <TableCell>{client.age}</TableCell>}
                      <TableCell>{client.jsuis?.name}</TableCell>
                      <TableCell>{client.simulations_count}</TableCell>
                      <TableCell align="center">
                        <Chip
                          sx={{
                            p: 0,
                            m: 0,
                            background: client.verified
                              ? green["A200"]
                              : red["A200"],
                          }}
                          size="small"
                          label={client.verified ? "verified" : "not verified"}
                        />
                      </TableCell>
                      {contact && (
                        <TableCell align="center">
                          {client.verified && (
                            <IconButton
                              onClick={() => contactClient(client.id)}
                            >
                              <EmailIcon color="secondary" />
                            </IconButton>
                          )}
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <ConfirmBar open={open} handleClose={handleClose} />
    </>
  );
}

export default User;
