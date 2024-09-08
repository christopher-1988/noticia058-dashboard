import { Pagination } from "react-bootstrap";

interface Props {
  page: number;
  setPage: (params: number) => void;
  pagination: number[];
  previousPage: () => void;
  nextPage: () => void;
}

const Paginator: React.FC<Props> = ({
  page,
  setPage,
  pagination = [],
  previousPage,
  nextPage,
}) => {
  return (
    <>
      <Pagination>
        <Pagination.Prev onClick={previousPage} disabled={page === 1} />
        {pagination.map((pageNum) => (
          <Pagination.Item
            key={pageNum}
            active={pageNum === page}
            onClick={() => setPage(pageNum)}
          >
            {pageNum}
          </Pagination.Item>
        ))}

        <Pagination.Next onClick={nextPage} />
      </Pagination>
    </>
  );
};

export default Paginator;
