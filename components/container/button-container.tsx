import { Button } from "@/components/ui/button";
import { Mail, Loader2, Link } from "lucide-react";

const ButtonContainer = () => {
  return (
    <>
      <Button>Button</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </>
  );
};

export default ButtonContainer;
