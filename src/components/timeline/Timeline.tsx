import "./Timeline.css";

interface Props {
  elements: string[];
}

const Timeline: React.FC<Props> = (props: Props) => {
  return (
    <div className="timeline">
      {props.elements.map((el, idx) => {
        return (
          <div className="timeline-item" key={`timeline-item-${idx+1}`}>
            <div className="timeline-item-content">{el}</div>
            <div className="circle"></div>
          </div>
        );
      })}
      
    </div>
  );
};

export default Timeline;
