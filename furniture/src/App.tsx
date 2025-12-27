import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

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
      <h1 className="text-red-500">This is {title}</h1>
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
      <Button size="sm" variant="outline" disabled>
        <Spinner className="text-orange-300" />
        Submit
      </Button>
      <Footer>
        <p>This is Footer</p>
      </Footer>
    </>
  );
}

export default App;
