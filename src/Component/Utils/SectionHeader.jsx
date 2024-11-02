function SectionHeader({ subHead, head }) {
  return (
    <div className="text-center flex items-center flex-col gap-3 mb-28">
      <h3>{subHead}</h3>
      <h1 className="text-3xl font-black">{head}</h1>
    </div>
  );
}

export default SectionHeader;
