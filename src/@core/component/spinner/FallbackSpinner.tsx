import logo from "../../../assets/images/logo/logo.png";

export const FallbackSpinner = () => {
  return (
    <div className="fallback-spinner app-loader">
      <img className="fallback-logo" src={logo} alt="logo" />
      <div className="loading">
        <div className="effect-1 effects"></div>
        <div className="effect-2 effects"></div>
        <div className="effect-3 effects"></div>
      </div>
    </div>
  );
};
