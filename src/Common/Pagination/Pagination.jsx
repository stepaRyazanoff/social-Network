import React, {useEffect, useState} from "react"
import cl from './Pagination.module.css'
import cn from "classnames"

const Pagination = ({setCurrentPage, totalUsersCount, currentPage, pageSize}) => {

    const pages = []
    for (let i = 1; i < totalUsersCount; i++) {
        pages.push(i)
    }

    const portionSize = 10
    const [portionNumber, setPortionNumber] = useState(1)
    const totalPage = Math.ceil(totalUsersCount / pageSize)
    const portionCount = Math.ceil(totalPage / portionSize)
    const leftBorderPortion = (portionNumber - 1) * portionSize + 1
    const rightBorderPortion = portionNumber * portionSize

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize))
    }, [currentPage, portionSize])

    const onNextButtonClick = () => {
        setPortionNumber(portionNumber + 1)
    }
    const onPrevButtonClick = () => {
        setPortionNumber(portionNumber - 1)
    }

    const onClickToNumber = (e) => {
        setCurrentPage(+e.target.textContent)
    }

    return (
        <div className={cl.pagination}>
            <div className={cl.paginationPages}>
                {portionNumber > 1 && <span className={cl.prevBtn} onClick={onPrevButtonClick}>{'<'}</span>}
                {pages.filter(p => p >= leftBorderPortion && p <= rightBorderPortion).map(p => <span
                    className={cn({[cl.active]: currentPage === p}, cl.pageNumber)}
                    onClick={onClickToNumber}
                    key={p}>{p}</span>)}
                {portionCount > portionNumber && <span className={cl.nextBtn} onClick={onNextButtonClick}>{'>'}</span>}
            </div>
        </div>
    )
}

export default Pagination