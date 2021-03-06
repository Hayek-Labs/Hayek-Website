import { useEffect } from 'react';
import styles from './index.less';

const IDesign = () => {
  return (
    <div className={styles.idesign}>
      <svg
        className="anchorBezierSVG"
        viewBox="0 0 800 200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <g
            id="anchorPopGroup"
            fill="none"
            stroke="#ededed"
            stroke-width="3"
            stroke-linecap="round"
            stroke-miterlimit="10"
          >
            <line x1="24" y1="17.5" x2="24" y2="1.5" />
            <line x1="29.5" y1="25" x2="45.5" y2="25" />
            <line x1="23" y1="30.5" x2="23" y2="46.5" />
            <line x1="17.5" y1="24" x2="1.5" y2="24" />
          </g>
          <mask id="mainMask">
            <rect width="100%" height="100%" fill="#000" />
            <path
              className="mainLineMask"
              fill="#FFF"
              stroke="none"
              stroke-miterlimit="10"
              d="M148,122.5c133-92.2,377-84.8,504,0C762.3,196.2,58.4,184.6,148,122.5z"
            />
          </mask>
          <mask id="mainMaskInverse">
            <rect width="100%" height="100%" fill="#FFF" />
            <path
              className="mainLineMask"
              fill="#000"
              stroke="none"
              stroke-miterlimit="10"
              d="M148,122.5c133-92.2,377-84.8,504,0C762.3,196.2,58.4,184.6,148,122.5z"
            />
          </mask>
        </defs>
        <g mask="url(#mainMask)">
          <text className="maskText1" x="50%" y="60%" style="fill:#ededed;">
            I DESIGN
          </text>
        </g>
        <g mask="url(#mainMaskInverse)">
          <text className="maskText2" x="50%" y="60%" style="fill:#5783FC;">
            WITH
          </text>
        </g>
        <path
          id="mainLine"
          fill="none"
          stroke="none"
          stroke-width="3"
          stroke-miterlimit="10"
          d="M148,122.1c133-87.1,377-87.8,504,0"
        />
        <path
          className="mainLineStart"
          stroke-linecap="round"
          fill="none"
          stroke="#5783FC"
          stroke-width="2"
          stroke-miterlimit="10"
          d="M148,122.1
	c20.7-21.9,98.7-100.2,96.7-95.5"
        />
        <g id="anchorGroupL">
          <line
            id="anchorLineLTop"
            fill="none"
            stroke="#5783FC"
            stroke-width="3"
            stroke-miterlimit="10"
            x1="155.8"
            y1="115.1"
            x2="243.7"
            y2="27.2"
          />
          <line
            id="anchorLineLBot"
            fill="none"
            stroke="#5783FC"
            stroke-width="3"
            stroke-miterlimit="10"
            x1="140.8"
            y1="130.1"
            x2="52"
            y2="218.9"
          />
          <circle
            id="anchorDragLTop"
            fill="#5783FC"
            cx="243.7"
            cy="27.2"
            r="5.6"
          />
          <circle
            id="anchorDragLBot"
            fill="#5783FC"
            cx="52"
            cy="218.9"
            r="5.6"
          />
        </g>

        <rect
          id="anchorPointL"
          x="139.7"
          y="113.8"
          fill="#5783FC"
          stroke="#5783FC"
          stroke-width="5"
          stroke-miterlimit="10"
          width="15.8"
          height="15.8"
        />

        <g id="anchorGroupR">
          <line
            id="anchorLineRTop"
            fill="none"
            stroke="#5783FC"
            stroke-width="3"
            stroke-miterlimit="10"
            x1="658.8"
            y1="115.1"
            x2="746.7"
            y2="27.2"
          />
          <line
            id="anchorLineRBot"
            fill="none"
            stroke="#5783FC"
            stroke-width="3"
            stroke-miterlimit="10"
            x1="643.8"
            y1="130.1"
            x2="555"
            y2="218.9"
          />
          <circle
            id="anchorDragRTop"
            fill="#5783FC"
            cx="746.7"
            cy="27.2"
            r="5.6"
          />
          <circle
            id="anchorDragRBot"
            fill="#5783FC"
            cx="555"
            cy="218.9"
            r="5.6"
          />
        </g>
        <rect
          id="anchorPointR"
          x="643.8"
          y="113.8"
          fill="#5783FC"
          stroke="#5783FC"
          stroke-width="5"
          stroke-miterlimit="10"
          width="15.8"
          height="15.8"
        />
        <g id="nib">
          <g id="nibInnerGroup">
            <polygon
              fill="#1d1d1d"
              stroke="#ededed"
              stroke-width="2"
              stroke-miterlimit="10"
              points="1.7,1.8 8.7,20.9 20.7,27.5 27.5,20.8 
		19.9,9 	"
            />

            <rect
              x="19.7"
              y="23.4"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -11.9343 28.0365)"
              fill="#1d1d1d"
              stroke="#ededed"
              stroke-width="2"
              stroke-miterlimit="10"
              width="16.4"
              height="10.1"
            />
            <line
              fill="none"
              stroke="#ededed"
              stroke-width="2"
              stroke-miterlimit="10"
              x1="24.2"
              y1="24.1"
              x2="16.6"
              y2="16.6"
            />
            <circle fill="#ededed" cx="16.6" cy="16.6" r="2.5" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default IDesign;
