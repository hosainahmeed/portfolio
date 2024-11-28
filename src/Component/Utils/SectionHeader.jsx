function SectionHeader({ subHead, head }) {
  return (
    <div className="text-center flex items-center flex-col gap-3 mb-8">
      <h3 className="text-white">{subHead}</h3>
      <h1 className="text-white text-3xl font-black">{head}</h1>
    </div>
  );
}

export default SectionHeader;
