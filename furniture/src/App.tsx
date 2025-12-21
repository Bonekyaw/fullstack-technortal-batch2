import "./App.css";
import { useState } from "react";

// type HeaderProps = {
//   title: string;
//   body: string;
// };

interface TitleProps {
  title: string;
}

interface HeaderPropsInterface extends TitleProps {
  body: string;
}

function Header({ title, body }: HeaderPropsInterface) {
  return (
    <>
      <h1>This is {title}</h1>
      <div>This is {body}</div>
    </>
  );
}

function Footer({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

// const TabButton = ({
//   label,
//   onPress,
// }: {
//   label: string;
//   onPress: () => void;
// }) => <button onClick={onPress}>{label}</button>;

function App() {
  const [counter, setCounter] = useState(0);
  const date = new Date().toLocaleDateString();

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      <Header title="Furniture Store" body="Welcome to our furniture store!" />
      <h2>Today is {date}</h2>
      <button onClick={increment}>Count - {counter}</button>
      <Footer>
        <p>This is Footer</p>
      </Footer>
    </>
  );
}

export default App;
