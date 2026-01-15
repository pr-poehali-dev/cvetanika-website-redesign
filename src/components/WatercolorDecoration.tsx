const WatercolorDecoration = () => {
  return (
    <>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 40C90 35 80 40 75 50C70 60 75 70 85 75C80 80 78 90 82 98C86 106 95 110 103 108C105 115 112 120 120 118C128 116 133 108 131 100C140 98 145 88 142 80C139 72 130 68 122 70C125 62 122 52 115 47C108 42 98 43 95 50C92 45 88 42 82 41C76 40 70 43 68 48" 
                fill="currentColor" className="text-primary/20" />
          <ellipse cx="85" cy="60" rx="15" ry="20" fill="currentColor" className="text-primary/15" transform="rotate(-25 85 60)" />
          <ellipse cx="120" cy="90" rx="18" ry="25" fill="currentColor" className="text-primary/15" transform="rotate(15 120 90)" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-56 h-56 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 150C55 135 48 120 35 115C22 110 10 118 8 130C5 142 15 152 27 155C20 165 22 180 35 188C48 196 65 192 72 180C80 188 95 190 105 182C115 174 115 158 105 150C115 145 120 132 115 120C110 108 95 102 85 108C82 98 72 90 60 92C48 94 40 105 43 117C35 115 25 120 20 130C15 140 18 152 28 157" 
                fill="currentColor" className="text-primary/20" />
          <circle cx="45" cy="140" r="12" fill="currentColor" className="text-primary/15" />
          <circle cx="75" cy="165" r="15" fill="currentColor" className="text-primary/15" />
        </svg>
      </div>

      <div className="absolute top-1/3 left-10 w-40 h-40 opacity-10 pointer-events-none">
        <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M75 30L78 50L88 38L85 58L98 50L90 68L108 65L95 80L110 85L92 90L100 105L82 95L80 112L75 93L68 110L70 92L52 100L62 85L45 82L60 75L48 65L65 70L58 52L73 62L70 42" 
                fill="currentColor" className="text-primary/20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-20 w-48 h-48 opacity-10 pointer-events-none">
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M90 50C95 48 100 50 102 55L115 52C118 50 122 52 124 56C126 60 124 65 120 67L125 78C127 82 125 87 121 89C117 91 112 89 110 85L100 92C96 95 90 94 87 90C84 86 85 80 89 77L80 70C76 68 74 63 76 59C78 55 83 53 87 55L85 45C85 40 88 37 93 37" 
                fill="currentColor" className="text-primary/20" />
          <ellipse cx="90" cy="75" rx="8" ry="12" fill="currentColor" className="text-primary/15" transform="rotate(30 90 75)" />
          <ellipse cx="105" cy="68" rx="10" ry="15" fill="currentColor" className="text-primary/15" transform="rotate(-20 105 68)" />
        </svg>
      </div>
    </>
  );
};

export default WatercolorDecoration;
