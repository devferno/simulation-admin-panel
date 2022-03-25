import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const Simulations = ({
  simulations,
  isLoading,
  disableDate,
  showUser,
  current,
  all,
  isFiltered,
}) => {
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
            {all ? "Toutes les simulations " : "Dérnières Simulations"}
          </Typography>
          {!current && (
            <Link to="/Simulations" style={{ textDecoration: "none" }}>
              <Button>Voir toutes les simulations</Button>
            </Link>
          )}
        </Box>
        <TableContainer component={Paper} sx={{ width: "100%" }}>
          <Table>
            <TableHead>
              <TableRow>
                {showUser && <TableCell>User email</TableCell>}
                {!disableDate && <TableCell>Date de Simulation</TableCell>}
                <TableCell>Montant</TableCell>
                <TableCell>Duree</TableCell>
                <TableCell>Taux</TableCell>
                <TableCell>Projet</TableCell>
                <TableCell>salaire</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading &&
                simulations
                  .slice(
                    0,
                    isFiltered
                      ? simulations.length
                      : all
                      ? simulations.length - 1
                      : 8
                  )
                  .map((item, index) => (
                    <TableRow
                      key={index}
                      sx={{ background: index % 2 === 0 ? "#f7f7f7" : "white" }}
                    >
                      {showUser && (
                        <TableCell noWrap>
                          <Typography variant="body2" noWrap>
                            {item.client?.email}
                          </Typography>
                        </TableCell>
                      )}
                      {!disableDate && (
                        <TableCell>
                          <Moment format="DD/MM/YYYY">{item.created_at}</Moment>
                        </TableCell>
                      )}

                      <TableCell>{item.prix}</TableCell>
                      <TableCell>{item.duree}</TableCell>
                      <TableCell>{item.taux}</TableCell>
                      <TableCell>{item.projet?.name}</TableCell>
                      <TableCell>{item.salaire}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Simulations;
