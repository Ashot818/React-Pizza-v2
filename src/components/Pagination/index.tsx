import React from 'react'
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss'

type PaginationProps = {
  currentPage:number;
  onChangePage:(page:number)=> void
}

export const Pagination:React.FC<PaginationProps> = ({onChangePage, currentPage}) =>  <div>
  <ReactPaginate
className={styles.root}
  breakLabel="..."
  nextLabel=" >"
  onPageChange={e=>onChangePage(e.selected+1)}
  pageRangeDisplayed={4}
  pageCount={3}
  previousLabel="< "
  forcePage={currentPage - 1}

/></div>
 
   
  

