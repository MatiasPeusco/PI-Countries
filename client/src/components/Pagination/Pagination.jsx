import {
    PaginationContainer,
    PaginationItem,
    PaginationButton,
} from "./StyledPagination";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <>
            <PaginationContainer>
                <PaginationItem className="page-item">
                    <PaginationButton
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Anterior
                    </PaginationButton>
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index} className={`page-item`}>
                        <PaginationButton
                            onClick={() => goToPage(index + 1)}
                            className={` ${currentPage === index + 1 ? "active" : ""}`}
                        >
                            {index + 1}
                        </PaginationButton>
                    </PaginationItem>
                ))}
                <PaginationItem className="page-item">
                    <PaginationButton
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Siguiente
                    </PaginationButton>
                </PaginationItem>
            </PaginationContainer>
        </>
    );
};

export default Pagination;