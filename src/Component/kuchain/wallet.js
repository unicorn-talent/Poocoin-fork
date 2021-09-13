import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#262626',
    color: theme.palette.common.white,
    padding: 0,
    paddingLeft: 10,
    textAlignLast: 'center',
    borderColor: '#262626'
  },
  body: {
    fontSize: '0.875rem',
    padding: 0,
    paddingLeft: 10,
    maxWidth: 100,
    backgroundColor: '#303030',
    color: '#fff',
    textAlignLast: 'center',
    borderColor: '#262626'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const rows = Array.from(Array(1).keys()).map(item => {
  return {
    name: "THOREUM",
    othername: "Thoreum",
    id: "0x580de58c1bd593a43dadcf0a739d504621817c05",
    tokenMoney: "0.0000",
    balanceMoney: "0.00",
    calories: '0.00'
  }
})
const useStyles = makeStyles({
  modalLeft: {
    textAlign: 'left',
    color: '#3eb8ff !important',
    cursor: 'pointer',
  },
  modalRight: {
    textAlign: 'right',
    cursor: 'pointer',
    color: '#3eb8ff !important'
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.tableHead}>
        <Grid item xs={6}>
          <div className={classes.modalLeft}>
            Load new tokens
          </div>
        </Grid>
      </Grid>
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.tableTh}>Tokens</StyledTableCell>
              <StyledTableCell className={classes.tableTh}>Balance</StyledTableCell>
              <StyledTableCell className={classes.tableTh}></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.id
                    ? <Link to={`/tokens/${row.id}`}>
                      {row.name}&nbsp;
                      <span className={'textSuccess'}>${row.tokenMoney}</span>
                      <br />
                      <span className={'textMuted'}>{row.othername}</span>
                    </Link>
                    : row.name}
                </StyledTableCell>
                <StyledTableCell>
                  <span>{row.calories}</span>
                  <br />
                  <span className={'textSuccess'}>${row.balanceMoney}</span></StyledTableCell>
                <StyledTableCell><StarOutlineIcon /></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}