import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots
      height="120"
      width="120"
      color="#134360"
      ariaLabel="dots-loading"
      visible={true}
      wrapperStyle={{ alignSelf: "center" }}
    />
  );
};

export default Loader;
