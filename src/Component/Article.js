import React, {useEffect, useState} from "react";
import { useTable, useGlobalFilter } from "react-table";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useFetch } from "./useFetch";
// import Article from "./Component/Article";

function Article(props) {
  const searchValue = React.useRef("");
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (loading) return;
    setArticles(data[page]);
  }, [loading, page]);
  
const nextPage = () => {
  setPage((oldPage) => {
    let nextPage = oldPage + 1;
    if (nextPage > data.length - 1) {
      nextPage = 0;
    }
    return nextPage;
  });
};
const prevPage = () => {
  setPage((oldPage) => {
    let prevPage = oldPage - 1;
    if (prevPage < 0) {
      prevPage = data.length - 1;
    }
    return prevPage;
  });
   
};

const handlePage = (index) => {
  setPage(index);
};

    const useStyles = makeStyles({
      table: {
        minWidth: 650,
      },
    });
    const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">Source</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody ref={searchValue}>
            {articles.map((row) => {
              const key_id = Math.random();
              return (
                <TableRow key={row.url}>
                  <TableCell component="th" scope="row">
                    <img
                      style={{ width: "150px" }}
                      src={row.urlToImage}
                      alt={row.title}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <p>{row.source.name}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{row.author}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{row.title}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{row.publishedAt}</p>
                  </TableCell>
                  <TableCell align="right">
                    <a href={row.url} target="_blank">
                      open
                    </a>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {!loading && (
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>
            prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? "active-btn" : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextPage}>
            next
          </button>
        </div>
      )}
    </>
  );
}

export default Article;
