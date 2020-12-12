import React from 'react';
import { Container, Pagination, Row } from 'react-bootstrap';
import { IPaginationFilter } from 'src/api/filters/pagination.filter';

interface IProps {
  step: number;
  onChange: (filter: IPaginationFilter) => void;
  totalPages?: number;
}

const getArray = (to: number) => [...Array(to).keys()].map((i) => i + 1);

const PaginationComponent: React.FC<IProps> = ({ children, step, onChange, totalPages = 5 }) => {
  const pages = getArray(totalPages);
  const [selectedPage, setSelectedPage] = React.useState<number>(1);

  const onPageSelect = (page: number) => {
    setSelectedPage(page);
    onChange({ offset: (page - 1) * step, limit: step });
  };

  return (
    <Container>
      <Row>{children}</Row>
      <Row>
        <Pagination>
          {pages.map((page) => (
            <Pagination.Item key={page} onClick={() => onPageSelect(page)} active={page === selectedPage}>
              {page}
            </Pagination.Item>
          ))}
        </Pagination>
      </Row>
    </Container>
  );
};

export default PaginationComponent;
