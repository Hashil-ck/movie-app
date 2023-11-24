import { createRef, useRef, useState } from "react";
import Details from "./Details";

function MovieGrid({ results }) {
    const [isOpen, setIsOpen] = useState(false);
    const [movie, setMovie] = useState({});
    
    const showDetails = (index)=>{
        setMovie(results[index])
        setIsOpen(true)
    }


    return (
        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-3 w-[98%] mx-2 p-3 my-2  ">
            
            {results.length > 0 ? results.map(({ id,
                poster_path,
                original_title,
                release_date,
                overview },index) => (
                <div
                    className="bg-gray-600 p-2 rounded-lg w-full   movie-item"
                    key={id}>
                    <img className="rounded-lg w-full " src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title} />
                    <div className='font-bold text-white mt-2'>{original_title}</div>
                    <div className='text-gray-400  '>{release_date}</div>
                    <div className='text-gray-400 w-[98%]  h-6 overflow-ellipsis overflow-clip'>
                        {overview}
                    </div>
                    <button className="bg-green-400 p-2 rounded-lg text-center mt-2 w-full font-bold" onClick={() => showDetails(index)}>
                        Details
                    </button>

                </div>
            )
            ):<>

                <div>No result found</div>
            
            </>}
            {isOpen && <Details setOpenModal={setIsOpen} movie={movie}/>}
        </div>

    );
}

export default MovieGrid;