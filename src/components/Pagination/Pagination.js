import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({info, setPageNumber, pageNumber}) => {

  let [width, setWidth] = useState(window.innerWidth);

  let updateDemension = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", updateDemension);
    return () => window.removeEventListener("resize", updateDemension);
  }, []);
  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination {
              font-size: 14px;
            }
          }
        `}

      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        pageRangeDisplayed={width < 576 ? 1 : 2}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        nextLabel="Следующая →"
        previousLabel="← Предыдущая"
        nextClassName="btn btn-primary next"
        previousClassName="btn btn-primary prev"
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
    </>
  )
  // <button onClick={prev} className="btn btn-primary">← Предыдущая страница</button>
  // <button onClick={next} className="btn btn-primary">Следующая страница →</button>
};

export default Pagination;
