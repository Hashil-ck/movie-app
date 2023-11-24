function Details({ setOpenModal, movie }) {
    return (
      <>
        <div
          className="bg-black/80 w-[100vw] z-10 h-[100vh]  fixed top-0 left-0"
          onClick={() => setOpenModal(false)}
        />
        <div className="fixed inset-0 flex justify-center items-center z-30">
          <div className=" bg-black/80  p-6 rounded-lg ">
            <div>
              <div className="text-white font-bold text-3xl overflow-hidden">
                {movie.original_title}
              </div>
              <div className="flex gap-4 mt-4 row-span-2">
                <div className="w-auto">
                  <div> {movie.original_language} </div>
                  <div> {movie.origin_country} </div>
                  <div className="text-white/40 w-[300px]"> {movie.overview} </div>
                </div>
                <div >
                  <img
                    width="250"
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt={movie.original_title}
                  />
                </div>
              </div>
  
              <button
                className="bg-red-400 p-2 rounded-lg text-center"
                onClick={() => setOpenModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Details;
  