import React from 'react'

export default function Pagination({totalRecords, recordsPerPage, paginate}) {

    const PageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++){
        PageNumbers.push(i);
    }

    return (
        <nav id="table-footer" aria-label="Page navigation">
            <ul className="pagination">
                {PageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link" onClick={()=> paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

