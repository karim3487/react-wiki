import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({info, setPageNumber, pageNumber}) => {
  return <ReactPaginate
    className="pagination justify-content-center gap-4 my-4"
    pageRangeDisplayed={2}
    marginPagesDisplayed={2}
    nextLabel="Следующая →"
    previousLabel="← Предыдущая"
    nextClassName="btn btn-primary"
    previousClassName="btn btn-primary"
    previousLinkClassName={`${styles.btn}`}
    nextLinkClassName={`${styles.btn}`}
    pageClassName="page-item"
    pageLinkClassName="page-link"
    onPageChange={
      (data) => {
        setPageNumber(data.selected + 1);
      }
    }
    activeClassName="active"
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    pageCount={info?.pages}
  />
  // <button onClick={prev} className="btn btn-primary">← Предыдущая страница</button>
  // <button onClick={next} className="btn btn-primary">Следующая страница →</button>
};

export default Pagination;
