import Flex from "./flex/page";
import Grid from "./grid/page";

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <Flex />
      <Grid />
    </div>
  );
}
