export default function GridBackground({ variant = "light" }) {
  if (variant === "dark") {
    return (
      <>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff14_1px,transparent_1px)] bg-size-[26px_26px] mask-[radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbeb78] rounded-full blur-[120px] opacity-[0.12] -mr-40 -mt-40 -z-10" />
      </>
    );
  }

  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#00000010_1px,transparent_1px)] bg-size-[26px_26px] mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute top-0 right-0 w-md h-112 bg-[#725eed] rounded-full blur-[120px] opacity-[0.07] -mr-40 -mt-40 -z-10" />
    </>
  );
}
