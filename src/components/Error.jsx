function Error({ mensaje, visto }) {
  return (
    <h4
      className="w-25"
      style={{
        display: visto,
        color: "red",
        fontStyle: "oblique",
        position: "absolute",
        top: "10%",
        left: "2%",
      }}
    >
      {mensaje}
    </h4>
  );
}

export default Error;
