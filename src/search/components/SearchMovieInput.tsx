import { useEffect, type Dispatch, type SetStateAction } from "react";

interface Props {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}
export const SearchMovieInput = ({ input, setInput }: Props) => {
  useEffect(() => {
    localStorage.setItem("query", input);
  }, [input]);
  return (
    <div className="mb-4 flex gap-2 justify-center">
      <label className="input input-info">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          placeholder="Search movie"
          className="grow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <button onClick={()=>setInput('')} disabled={input===""} className="btn btn-info">Clear</button>
    </div>
  );
};
