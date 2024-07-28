import React from 'react';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button 
          key={page} 
          onClick={() => setCurrentPage(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </button>
      ))}
 </div>
  );
};

export default Pagination;