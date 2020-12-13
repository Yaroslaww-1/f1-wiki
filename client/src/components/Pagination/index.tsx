import React from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
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
    <Container fluid>
      <Row>{children}</Row>
      <Row>
        <Col>
          <Pagination className="justify-content-center">
            {pages.map((page) => (
              <Pagination.Item key={page} onClick={() => onPageSelect(page)} active={page === selectedPage}>
                {page}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default PaginationComponent;
