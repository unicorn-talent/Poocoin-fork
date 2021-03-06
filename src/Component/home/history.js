import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { vettedValues } from "../../PooCoin/index.js";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#262626',
    color: theme.palette.common.white,
    padding: 0,
    paddingLeft: 10,
    textAlignLast: 'left',
    borderColor: '#262626',
  },
  body: {
    fontSize: '0.875rem',
    padding: 0,
    paddingLeft: 10,
    backgroundColor: '#303030',
    color: '#fff',
    borderColor: '#262626',
    borderBottom: '#262626',
    textAlignLast: 'left',
    borderRadius: 0
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
  upper: {
    textTransform: 'uppercase !important'
  },
  otherName: {
    color: '#ADB5BD',
    fontSize: 12
  },
  CircularProgress: {
    color: "#b2b5be",
    marginTop: '20px'
  },
  linkToken: {
    '&:hover': {
      color: 'white',
    }
  }
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [vettedData, setVettedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const setVettedValues = (data) => {
    if (data.length === 0) {
      setLoading(true)
    } else {
      setLoading(false)
      setVettedData(data);
    }
  };

  useEffect(() => {
    vettedValues(setVettedValues);
  }, []);

  return (
    <div>
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tokens</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vettedData.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <Link
                    to={{
                      pathname: `/tokens/${row.linkAddress}`,
                      state: row.linkAddress,
                    }}
                    onClick={() => dispatch({ type: 'SET_TOKENADDRESS', payload: row.linkAddress })}
                    className={classes.linkToken}
                  >
                    <span className={classes.uppper}>{row.name}</span>
                    <div className={classes.otherName}>{row.name}</div>
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {loading && (
        <CircularProgress size={20} className={classes.CircularProgress} />
      )}
    </div>
  );
}