import "./Timeline.css";

interface Props {
  elements: any[];
}

const Timeline: React.FC<Props> = (props: Props) => {
  return (
    <div className="timeline">
      {props.elements.map((el, idx) => {
        return (
          <div className="timeline-item" key={`timeline-item-${idx + 1}`}>
            <div className="timeline-item-content">
              <div className="timeline-item-time">{el.time}</div>
              <div className="timeline-item-title">
                <h2 className="title-text">{el.name}</h2>
              </div>
              <div className="timeline-item-text">{el.location}</div>
            </div>
            <div className="circle"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
