import "./MenuButton.css";

interface Props {
  onClick: () => void;
  isOpened: boolean;
}

const MenuButton: React.FC<Props> = (props) => {
  return (
    <div className="hamburger" onClick={() => props.onClick()}>
      <div className={`bar1 ${props.isOpened ? "change" : ""}`}></div>
      <div className={`bar2 ${props.isOpened ? "change" : ""}`}></div>
      <div className={`bar3 ${props.isOpened ? "change" : ""}`}></div>
    </div>
  );
};

export default MenuButton;
