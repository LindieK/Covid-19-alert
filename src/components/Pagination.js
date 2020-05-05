import React from 'react'

export default function Pagination({totalRecords, recordsPerPage, paginate}) {

    const PageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++){
        PageNumbers.push(i);
    }

    return (
        <tfoot>
            <ul>
                {PageNumbers.map(number => (
                    <li key={number} className="pageItem">
                        <a href="!#" className="pageLink" onClick={()=> paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </tfoot>
    )
}

