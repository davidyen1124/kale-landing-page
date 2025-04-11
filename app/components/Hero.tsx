export default function Hero() {
  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2">
        <svg
          fill="none"
          height="240"
          viewBox="0 0 1280 240"
          width="1280"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_6445_3157)">
            <g filter="url(#filter0_f_6445_3157)" opacity="0.175">
              <path
                d="M797.548 -174.853C648.215 -153.417 559.595 -71.1869 599.608 8.81302C639.621 88.813 793.117 136.289 942.45 114.853C1091.78 93.4166 1180.4 11.1866 1140.4 -68.8134C1100.38 -148.813 946.881 -196.288 797.548 -174.853Z"
                fill="url(#paint0_linear_6445_3157)"
              ></path>
              <path
                d="M410 114C564.639 114 690 46.8425 690 -36.0003C690 -118.843 564.639 -186 410 -186C255.361 -186 130 -118.843 130 -36.0003C130 46.8425 255.361 114 410 114Z"
                fill="url(#paint1_linear_6445_3157)"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="546"
              id="filter0_f_6445_3157"
              width="1260"
              x="10"
              y="-306"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_6445_3157"
                stdDeviation="60"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_6445_3157"
              x1="632.951"
              x2="1121.24"
              y1="-143.925"
              y2="3.12977"
            >
              <stop stopColor="#30A46C"></stop>
              <stop offset="0.5" stopColor="#0091FF"></stop>
              <stop offset="1" stopColor="#6E56CF"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_6445_3157"
              x1="167.985"
              x2="542.994"
              y1="-9.18472"
              y2="-184.236"
            >
              <stop stopColor="#E5484D"></stop>
              <stop offset="0.504191" stopColor="#F76808"></stop>
              <stop offset="1" stopColor="#F5D90A"></stop>
            </linearGradient>
            <clipPath id="clip0_6445_3157">
              <rect fill="white" height="240" width="1280"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col items-center px-4 pt-40">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-xl text-center leading-tight">
          Know what's in your food
        </h1>
        <div className="h-4"></div>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center">
          Kale helps you uncover harmful additives and ultra-processed
          ingredients hiding in everyday food products — so you can make smarter
          choices with confidence.
        </p>
        <div className="h-9"></div>
      </div>
    </>
  );
}
