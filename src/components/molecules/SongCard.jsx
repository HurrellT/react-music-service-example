const SongCard = ({image, title}) => {
  return (
    <div className="card album m-2 shadow-sm" >
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text" data-bs-toggle="tooltip" data-bs-placement="bottom" title={title}>{title}</p>
      </div>
    </div>
  )
}

export default SongCard;