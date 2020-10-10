import PropTypes from "prop-types";
import {GameType} from "./const.js";

export const genreQuestionType = PropTypes.shape({
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
});

export const artistQuestionType = PropTypes.shape({
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
});

export const questionsType = PropTypes.arrayOf(PropTypes.oneOfType([genreQuestionType, artistQuestionType])).isRequired;

export const errorsCountType = PropTypes.number.isRequired;

export const onPlayButtonClickType = PropTypes.func.isRequired;
