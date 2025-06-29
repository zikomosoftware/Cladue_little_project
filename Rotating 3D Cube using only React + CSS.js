import React from 'react';

const RotatingCube = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      <div className="cube-container">
        <div className="cube">
          <div className="face front">
            <div className="face-content">
              <div className="text-2xl font-bold text-white">FRONT</div>
              <div className="geometric-pattern"></div>
            </div>
          </div>
          <div className="face back">
            <div className="face-content">
              <div className="text-2xl font-bold text-white">BACK</div>
              <div className="geometric-pattern"></div>
            </div>
          </div>
          <div className="face right">
            <div className="face-content">
              <div className="text-2xl font-bold text-white">RIGHT</div>
              <div className="geometric-pattern"></div>
            </div>
          </div>
          <div className="face left">
            <div className="face-content">
              <div className="text-2xl font-bold text-white">LEFT</div>
              <div className="geometric-pattern"></div>
            </div>
          </div>
          <div className="face top">
            <div className="face-content">
              <div className="text-2xl font-bold text-white">TOP</div>
              <div className="geometric-pattern"></div>
            </div>
          </div>
          <div className="face bottom">
            <div className="face-content">
              <div className="text-2xl font-bold text-white">BOTTOM</div>
              <div className="geometric-pattern"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cube-container {
          perspective: 800px;
          perspective-origin: center center;
        }

        .cube {
          position: relative;
          width: 200px;
          height: 200px;
          transform-style: preserve-3d;
          animation: rotateCube 8s infinite linear;
        }

        @keyframes rotateCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          25% {
            transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
          }
          50% {
            transform: rotateX(180deg) rotateY(180deg) rotateZ(90deg);
          }
          75% {
            transform: rotateX(270deg) rotateY(270deg) rotateZ(180deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(270deg);
          }
        }

        .face {
          position: absolute;
          width: 200px;
          height: 200px;
          opacity: 0.9;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .face-content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .geometric-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
          background-image: 
            linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%);
          background-size: 20px 20px;
        }

        .front {
          background: linear-gradient(135deg, rgba(255, 64, 129, 0.8), rgba(156, 39, 176, 0.8));
          transform: rotateY(0deg) translateZ(100px);
        }

        .back {
          background: linear-gradient(135deg, rgba(33, 150, 243, 0.8), rgba(3, 169, 244, 0.8));
          transform: rotateY(180deg) translateZ(100px);
        }

        .right {
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.8), rgba(139, 195, 74, 0.8));
          transform: rotateY(90deg) translateZ(100px);
        }

        .left {
          background: linear-gradient(135deg, rgba(255, 152, 0, 0.8), rgba(255, 193, 7, 0.8));
          transform: rotateY(-90deg) translateZ(100px);
        }

        .top {
          background: linear-gradient(135deg, rgba(121, 85, 72, 0.8), rgba(158, 158, 158, 0.8));
          transform: rotateX(90deg) translateZ(100px);
        }

        .bottom {
          background: linear-gradient(135deg, rgba(96, 125, 139, 0.8), rgba(69, 90, 100, 0.8));
          transform: rotateX(-90deg) translateZ(100px);
        }

        /* Hover effect */
        .cube-container:hover .cube {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .cube {
            width: 150px;
            height: 150px;
          }
          
          .face {
            width: 150px;
            height: 150px;
          }
          
          .front { transform: rotateY(0deg) translateZ(75px); }
          .back { transform: rotateY(180deg) translateZ(75px); }
          .right { transform: rotateY(90deg) translateZ(75px); }
          .left { transform: rotateY(-90deg) translateZ(75px); }
          .top { transform: rotateX(90deg) translateZ(75px); }
          .bottom { transform: rotateX(-90deg) translateZ(75px); }
          
          .face-content .text-2xl {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RotatingCube;
