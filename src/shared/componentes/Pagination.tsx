import { useEffect, useState } from "react";

interface Props {
  totalPages: number;
  minPages: number;
  currentPage: number;
  sendCurrentPage: (currentPage: number) => void;
}

export const Pagination = ({
  totalPages,
  minPages,
  currentPage,
  sendCurrentPage,
}: Props) => {
  const [currentState, setCurrentState] = useState({
    startPage: 1,
    currentPage: currentPage,
    minPages: 1,
  });

  useEffect(() => {
    setCurrentState({ ...currentState, currentPage: currentPage });
  }, [currentPage]);
  
  useEffect(() => {
    sendCurrentPage(currentState.currentPage);
  }, [currentState.currentPage]);

  useEffect(() => {
    totalPages - (currentState.startPage - 1) < minPages
      ? setCurrentState((current) => ({
          ...current,
          minPages: totalPages - currentState.startPage + 1,
        }))
      : setCurrentState((current) => ({
          ...current,
          minPages: minPages,
        }));
  }, [currentState.startPage]);

  useEffect(() => {
    if (
      currentState.currentPage - currentState.minPages ===
      currentState.startPage
    )
      setCurrentState((current) => ({
        ...current,
        startPage: current.startPage + minPages,
      }));
    if (currentState.currentPage < currentState.startPage)
      setCurrentState((current) => ({
        ...current,
        startPage: current.startPage - minPages,
      }));
  }, [currentState.currentPage]);

  const handleCurrentPage = (value: number) => {
    setCurrentState((current) => ({ ...current, currentPage: value }));
  };

  const handleNextPage = () => {
    if (currentState.currentPage === totalPages) return;
    setCurrentState((current) => ({
      ...current,
      currentPage: current.currentPage + 1,
    }));
  };

  const handlePrevPage = () => {
    if (currentState.currentPage === 1) return;
    setCurrentState((current) => ({
      ...current,
      currentPage: current.currentPage - 1,
    }));
  };

  return (
    <div className="join">
      <button
        onClick={handlePrevPage}
        disabled={currentState.currentPage === 1}
        className="join-item btn"
      >
        «
      </button>
      {[...Array(currentState.minPages).keys()].map((_value, index) => (
        <button
          key={index}
          onClick={(e) => handleCurrentPage(+e.currentTarget.innerText)}
          className={`join-item btn ${currentState.currentPage === index + currentState.startPage && "btn-info"}`}
        >
          {index + currentState.startPage}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        disabled={currentState.currentPage === totalPages}
        className="join-item btn"
      >
        »
      </button>
    </div>
  );
};
