import React, { useState, useEffect } from 'react';

const GlowingDigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let ampm = '';

    if (!is24Hour) {
      ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 should be 12
    }

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      ampm
    };
  };

  const formatDate = (date) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  const { hours, minutes, seconds, ampm } = formatTime(time);
  const currentDate = formatDate(time);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      
      {/* Floating particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className={`particle particle-${i % 3}`}></div>
        ))}
      </div>

      <div className="clock-container relative z-10">
        {/* Main clock display */}
        <div className="time-display">
          <div className="time-segment">
            <span className="digit glow-cyan">{hours}</span>
          </div>
          <div className="separator">
            <span className="colon glow-white">:</span>
          </div>
          <div className="time-segment">
            <span className="digit glow-cyan">{minutes}</span>
          </div>
          <div className="separator">
            <span className="colon glow-white">:</span>
          </div>
          <div className="time-segment">
            <span className="digit glow-cyan">{seconds}</span>
          </div>
          {!is24Hour && (
            <div className="ampm-container">
              <span className="ampm glow-pink">{ampm}</span>
            </div>
          )}
        </div>

        {/* Date display */}
        <div className="date-display">
          <span className="date-text glow-purple">{currentDate}</span>
        </div>

        {/* Controls */}
        <div className="controls">
          <button 
            onClick={() => setIs24Hour(!is24Hour)}
            className="format-toggle glow-button"
          >
            {is24Hour ? '12H' : '24H'}
          </button>
        </div>
      </div>

      <style jsx>{`
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(0, 255, 255, 0.6);
          border-radius: 50%;
          animation: float 6s infinite ease-in-out;
        }

        .particle-0 {
          background: rgba(0, 255, 255, 0.6);
          animation-delay: 0s;
          left: 20%;
          animation-duration: 8s;
        }

        .particle-1 {
          background: rgba(255, 0, 255, 0.6);
          animation-delay: 2s;
          left: 60%;
          animation-duration: 6s;
        }

        .particle-2 {
          background: rgba(255, 255, 0, 0.6);
          animation-delay: 4s;
          left: 80%;
          animation-duration: 10s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-10vh) rotate(180deg);
          }
        }

        .clock-container {
          text-align: center;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .time-display {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .time-segment {
          position: relative;
        }

        .digit {
          font-family: 'Courier New', monospace;
          font-size: 4rem;
          font-weight: bold;
          letter-spacing: -0.1em;
          transition: all 0.3s ease;
        }

        .colon {
          font-family: 'Courier New', monospace;
          font-size: 4rem;
          font-weight: bold;
          animation: blink 2s infinite;
        }

        .ampm-container {
          margin-left: 1rem;
          display: flex;
          align-items: flex-start;
          padding-top: 0.5rem;
        }

        .ampm {
          font-family: 'Courier New', monospace;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .date-display {
          margin-bottom: 2rem;
        }

        .date-text {
          font-family: 'Arial', sans-serif;
          font-size: 1.25rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .controls {
          display: flex;
          justify-content: center;
        }

        .format-toggle {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(0, 255, 255, 0.5);
          color: #00ffff;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-family: 'Courier New', monospace;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .format-toggle:hover {
          background: rgba(0, 255, 255, 0.2);
          border-color: #00ffff;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }

        /* Glow effects */
        .glow-cyan {
          color: #00ffff;
          text-shadow: 
            0 0 5px #00ffff,
            0 0 10px #00ffff,
            0 0 15px #00ffff,
            0 0 20px #00ffff,
            0 0 30px #00ffff;
        }

        .glow-white {
          color: #ffffff;
          text-shadow: 
            0 0 5px #ffffff,
            0 0 10px #ffffff,
            0 0 15px #ffffff;
        }

        .glow-pink {
          color: #ff00ff;
          text-shadow: 
            0 0 5px #ff00ff,
            0 0 10px #ff00ff,
            0 0 15px #ff00ff,
            0 0 20px #ff00ff;
        }

        .glow-purple {
          color: #8a2be2;
          text-shadow: 
            0 0 5px #8a2be2,
            0 0 10px #8a2be2,
            0 0 15px #8a2be2,
            0 0 20px #8a2be2;
        }

        .glow-button {
          text-shadow: 
            0 0 5px currentColor,
            0 0 10px currentColor,
            0 0 15px currentColor;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .digit, .colon {
            font-size: 2.5rem;
          }
          
          .ampm {
            font-size: 1rem;
          }
          
          .date-text {
            font-size: 1rem;
          }
          
          .clock-container {
            padding: 1.5rem;
            margin: 1rem;
          }
        }

        @media (max-width: 480px) {
          .digit, .colon {
            font-size: 2rem;
          }
          
          .time-display {
            gap: 0.25rem;
          }
          
          .date-text {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GlowingDigitalClock;
