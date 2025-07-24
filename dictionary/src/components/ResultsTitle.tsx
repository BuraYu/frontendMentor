interface SearchbarProps {
  darkMode: boolean;
  word: string;
}

const ResultsTitle = ({ darkMode, word }: SearchbarProps) => {
  return (
    <div>
      <h1>{word}</h1>
    </div>
  );
};

export default ResultsTitle;
