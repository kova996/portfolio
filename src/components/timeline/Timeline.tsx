import "./Timeline.css";

interface Props {
  elements: string[];
}

const Timeline: React.FC<Props> = (props: Props) => {
  return (
    <div className="timeline">
      {props.elements.map((el, idx) => {
        return (
          <div className="timeline-item" key={`timeline-item-${idx + 1}`}>
            <div className="timeline-item-content">
              <div className="timeline-item-tag">Tag</div>
              <div className="timeline-item-title">
                <h1 className="title-text">Fe</h1>
              </div>
              <div className="timeline-item-text">{el}</div>
            </div>
            <div className="circle"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
