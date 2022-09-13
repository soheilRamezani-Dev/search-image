
const Images = ({ images }) => {
  return (
    <div class="d-flex flex-wrap justify-content-center">
      {images.map((val) => {
        return (
            <div class="card1 p-1 align-self-center">
            <img className="w-100 shadow-1-strong rounded mb-4" src={val.urls.thumb} />
          </div>
        );
      })}
    </div>
  );
};

export default Images;


  
   