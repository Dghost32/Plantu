import Button from "@mui/material/Button";
import swal from "sweetalert";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="text-3xl mb-10 transition ease-in-out duration-300 font-bold text-sky-400 hover:underline hover:decoration-pink-500 hover:text-neutral-100">
        Plantu!
      </h1>
      <Button
        variant="contained"
        onClick={() => {
          swal({
            title: "Click!",
            text: "MUI and Swal are working! Click the button to continue!",
            icon: "success",
          });
        }}
      >
        MUI is working!
      </Button>
    </div>
  );
}

export default App;
