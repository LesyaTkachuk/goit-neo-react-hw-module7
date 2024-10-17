import { Toaster as ReactHotToaster } from "react-hot-toast";

const Toaster = () => {
  return (
    <ReactHotToaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        style: {
          fontWeight: 500,
          border: "1px solid #691510",
          borderRadius: "10px",
          background: "#fc655b",
          color: "#faebd7",
          padding: "16px",
        },
        iconTheme: {
          primary: "#691510",
          secondary: "#faebd7",
        },
      }}
    />
  );
};

export default Toaster;
