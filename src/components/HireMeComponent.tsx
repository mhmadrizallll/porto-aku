const HireMeComponent = ({ onClick }: { onClick: () => void }) => {
  return (
    <div>
      <button onClick={onClick} className="hireme-btn">
        Hire Me
      </button>
    </div>
  );
};

export default HireMeComponent;
