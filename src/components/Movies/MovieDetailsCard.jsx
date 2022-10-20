import {
  ContainerDetails,
  Img,
  TitleName,
  TitleOverview,
  YearText,
  PopularityText,
  GenresList,
} from './MovieDetails.module';

export default function MovieDetailsCard({
  httpsPoster,
  title,
  year,
  genresMovies,
  voteAverage,
  overview,
}) {
  return (
    <ContainerDetails>
      <Img src={httpsPoster} alt={title} />
      <div>
        <TitleName>
          {title}
          <YearText>({year})</YearText>
        </TitleName>
        <PopularityText>Popularity {voteAverage} </PopularityText>
        <TitleOverview>Overview</TitleOverview>
        <p>{overview}</p>
        <h3>
          Genres
          <GenresList>{genresMovies}</GenresList>
        </h3>
      </div>
    </ContainerDetails>
  );
}
