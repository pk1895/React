import { useLocation } from "react-router";
import useQueryParams from "./hooks/use-queryparams";

function App() {
  // const baseUrl = "https://example.com";
  // const urlWithParams = `${baseUrl}?${params.toString()}`;
  // console.log(urlWithParams);
  const { search } = useLocation();
  // console.log(location);
  const query = useQueryParams(search);
  console.log(query);
  // console.log(query.get("mailId"));

  return (
    <>
      <p>Hello World</p>
    </>
  );
}

export default App;
