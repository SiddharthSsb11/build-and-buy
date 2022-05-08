import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ pages, page, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination className="d-flex justify-content-center" style={{marginTop:"0.5rem"}}>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={ keyword ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate