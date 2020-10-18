import PropTypes from "prop-types";
import {GameType} from "./const.js";

export const genreQuestionType = PropTypes.shape({
  answers: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })),
  genre: PropTypes.string.isRequired,
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
});

export const artistQuestionType = PropTypes.shape({
  answers: PropTypes.arrayOf(PropTypes.shape({
    artist: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })),
  song: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
});

export const questionsType = PropTypes.arrayOf(PropTypes.oneOfType([genreQuestionType, artistQuestionType]));
