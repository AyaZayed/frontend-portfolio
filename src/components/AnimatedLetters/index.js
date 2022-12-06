import "./index.scss";

function AnimatedLetters({ letterClass, strArr, idx }) {
  return (
    <span>
      {strArr.map((letter, i) => {
        return (
          <span key={letter + i} className={`${letterClass} _${i + idx}`}>
            {letter}
          </span>
        );
      })}
    </span>
  );
}

export default AnimatedLetters;
