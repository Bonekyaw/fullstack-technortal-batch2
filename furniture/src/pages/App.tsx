import { Button } from "@/components/ui/button";
import { useSession, signOut } from "@/lib/auth-client";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    // console.log("Session data:", session);
    if (!isPending && !session) {
      // Redirect to login page if not authenticated
      navigate("/login");
    }
  }, [session, isPending, navigate]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <>
      <h1>Welcome to the Furniture Store</h1>
      {session && <p>Hello, {session.user.name}!</p>}
      {session && <p>Your email: {session.user.email}</p>}
      {session ? (
        <Button onClick={() => signOut()}>Sign Out</Button>
      ) : (
        <p>Please sign in to access your account.</p>
      )}
    </>
  );
}

export default App;
