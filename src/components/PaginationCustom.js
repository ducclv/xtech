import React from 'react';
import {Pagination} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import './styles/pagination.scss';

interface Props {
    totalItem: number;
    pageSize: number;
    pageNumber: number;
    onClick: (val: number) => void;
}

const PaginationCustom: React.FC<Props> = ({
                                               totalItem,
                                               pageSize,
                                               pageNumber,
                                               onClick,
                                           }) => {
    const totalPage = Math.ceil(totalItem / pageSize);
    const pageItems = (): number[] => {
        let start = pageNumber > 3 ? pageNumber - 2 : 1;
        let end = start + 4;
        if (end > totalPage) {
            let newStart = start - (end - totalPage);
            start = newStart < 1 ? 1 : newStart;
        }
        let items = [];
        for (let i = start; i <= totalPage && i <= end; i++) {
            items.push(i);
        }
        return items;
    };

    return (
        <Pagination size="sm" className="pagination-test-bank">
            {!isMobile && (
                <Pagination.First
                    className="list-bank-pagination-item-icon list-bank-pagination-item"
                    onClick={() => onClick(1)}
                    disabled={pageNumber === 1 || totalPage === 0}
                />
            )}
            <Pagination.Prev
                style={{color: '#000000'}}
                className="list-bank-pagination-item-icon list-bank-pagination-item"
                onClick={() => onClick(pageNumber - 1)}
                disabled={pageNumber === 1 || totalItem === 0}></Pagination.Prev>
            {pageItems().map((val, i) => (
                <Pagination.Item
                    className="list-bank-pagination-item"
                    key={i}
                    active={pageNumber === val}
                    onClick={() => onClick(val)}>
                    {val}
                </Pagination.Item>
            ))}
            <Pagination.Next
                className="list-bank-pagination-item-icon list-bank-pagination-item"
                onClick={() => onClick(pageNumber + 1)}
                disabled={pageNumber === totalPage || totalItem === 0}
            />
            {!isMobile && (
                <Pagination.Last
                    className="list-bank-pagination-item-icon list-bank-pagination-item"
                    onClick={() => onClick(totalPage)}
                    disabled={pageNumber === totalPage || totalPage === 0}
                />
            )}
        </Pagination>
    );
};

export default PaginationCustom;
