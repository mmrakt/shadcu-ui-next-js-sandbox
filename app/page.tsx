import ButtonContainer from "@/components/container/button-container";
import { CardContainer } from "@/components/container/card-container";
import { DropdownMenuContainer } from "@/components/container/dropdown-menu-container";
import { FormContainer } from "@/components/container/form-container";

function Heading({ text }: { text: string }) {
  return <h2 className="text-3xl font-bold">{text}</h2>;
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div className="flex flex-col gap-4">
        <Heading text="Button" />
        <div className="flex gap-4">
          <ButtonContainer />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Heading text="Card" />
        <div className="flex gap-4">
          <CardContainer />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Heading text="Form" />
        <div className="flex gap-4">
          <FormContainer />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Heading text="Dropdown Menu" />
        <div className="flex gap-4">
          <DropdownMenuContainer />
        </div>
      </div>
    </main>
  );
}
