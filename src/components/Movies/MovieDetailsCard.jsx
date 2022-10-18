export default function MovieDetailsCard({
  httpsPoster,
  title,
  year,
  genresMovies,
  voteAverage,
  overview,
}) {
  return (
    <div>
      <img src={httpsPoster} alt={title} />
      <h1>
        {title}
        <p>{year}</p>
      </h1>
      <p>Popularity {voteAverage} </p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genresMovies}</p>
    </div>
  );
}
