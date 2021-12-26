import React from "react";
import "./Error.css";

const Error = ({ serverErr }) => {
  const [serverErrMsg, setServerErrMsg] = React.useState("");

  React.useEffect(() => {
    if (serverErr.includes(429)) {
      setServerErrMsg("	You have hit your rate-limit");
    } else if (serverErr.includes(404)) {
      setServerErrMsg("A requested resource does not exist");
    } else if (serverErr.includes(500)) {
      setServerErrMsg("Internal Server Error");
    }
  }, [serverErr]);

  return (
    <div className="error__container">
      <p className="error__msg">{serverErrMsg}</p>
    </div>
  );
};

export default Error;
