import classes from "./Pagination.module.css";
import PaginationButton from "./PaginationButton";

const Pagination = ({ currentPage, numberOfPages }) => {
  return (
    <div className={classes.container}>
      <PaginationButton
        text="Previous"
        className={classes.button}
        moveTo={currentPage === 1 ? currentPage : currentPage - 1}
      />
      <div className={classes.pages}>
        Page <span>{currentPage}</span> of <span>{numberOfPages || currentPage}</span>
      </div>
      <PaginationButton
        text="Next"
        className={classes.button}
        moveTo={currentPage === numberOfPages ? currentPage : currentPage + 1}
      />
    </div>
  );
};

export default Pagination;
