import defaultImg from '../DefaultImage/default.jpg';

export default function CastList({ image, name, character }) {
  const imgURL = image ? `https://image.tmdb.org/t/p/w300${image}` : defaultImg;

  return (
    <>
      <li>
        <img src={imgURL} alt={name} />
        <p>{name}</p>
        <p>Character:{character}</p>
      </li>
    </>
  );
}
