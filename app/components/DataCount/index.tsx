import React from "react";

const index = () => {
  const data = [
    {
      icon: "location", // Assuming you have an icon class for location
      value: "100000",
      label: "Tons of Deliveries Handled Annually",
    },
    {
      icon: "location",
      value: "28000+",
      label: "Pin Code Coverage Pan-India",
    },
    {
      icon: "location",
      value: "1000+",
      label: "Committed Employees",
    },
    {
      icon: "location",
      value: "1 Lakh+",
      label: "Sq. Ft. Warehouse Space Strategically Located in Delhi/NCR",
    },
    {
      icon: "location",
      value: "100",
      label: "Own Fleet for First Mile Pickup",
    },
  ];

  return (
    <div className="container mx-auto space-y-7">
      <div className="space-y-3">
        <h2 className="text-4xl font-semibold  leading-snug">
          B2B Transportation Optimized
        </h2>
        <p>
          Navigating Success, Delivering Excellence On-time, Every Time with AAJ
          Swift,
          <br /> Delhi's Most Reliable Transport Company.
        </p>
      </div>
      <div className="flex w-full gap-8 justify-between">
        {data.map((data: any) => {
          return <DataCard label={data.label} value={data.value} />;
        })}
      </div>
    </div>
  );
};

export default index;

function DataCard({ icon = null, label, value }: any) {
  return (
    <div className="flex flex-col gap-3 p-6 max-w-[214px] bg-lightRed  rounded-xl">
      {icon ? (
        icon
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <g clip-path="url(#clip0_731_300)">
            <path
              d="M22.0037 37.4226C20.5825 35.4482 19.2233 33.6198 17.9276 31.7467C15.0149 27.5352 12.2929 23.2155 10.1793 18.5267C7.9986 13.6955 8.44882 9.19382 11.6777 5.00122C14.9066 0.808619 20.4537 -0.956326 25.5969 0.490997C30.7057 1.9263 34.4639 6.39876 35.1169 11.6198C35.4107 13.9702 34.811 16.1008 33.9381 18.1937C31.833 23.2344 28.8412 27.767 25.7429 32.2308C24.5624 33.9443 23.3165 35.6096 22.0037 37.4226ZM21.9745 17.5447C22.5542 17.5494 23.1292 17.4397 23.6664 17.2219C24.2036 17.004 24.6924 16.6823 25.1048 16.2752C25.5172 15.8681 25.8451 15.3836 26.0696 14.8496C26.2942 14.3156 26.4109 13.7425 26.4131 13.1632C26.396 12.0071 25.9306 10.9028 25.1149 10.0827C24.2992 9.26256 23.1967 8.79065 22.0398 8.76632C19.6477 8.75087 17.5977 10.7836 17.5977 13.1856C17.6071 14.3414 18.0716 15.4471 18.8907 16.2635C19.7097 17.0799 20.8175 17.5414 21.9745 17.5481V17.5447Z"
              fill="#88161F"
            />
            <path
              d="M33.7336 28.3508L35.8559 24.5033C39.8082 25.6845 43.4169 28.8366 43.9032 31.8377C44.283 34.2139 43.5337 36.1883 41.9253 37.864C39.6914 40.1869 36.8457 41.4471 33.811 42.2763C25.4492 44.5615 17.0942 44.7126 8.81148 41.8952C6.10154 40.9732 3.62702 39.6169 1.73505 37.3867C-0.620897 34.6105 -0.572785 31.1681 1.85018 28.4349C3.55828 26.5086 5.71833 25.2518 8.10005 24.1942C8.82179 25.4973 9.53665 26.7833 10.2721 28.1138C9.54868 28.4675 8.7668 28.7628 8.08287 29.2058C7.05182 29.8719 6.02077 30.5569 5.14095 31.3931C4.13224 32.3528 4.10989 33.5443 5.12204 34.4972C6.05386 35.3761 7.09728 36.1288 8.22549 36.736C11.0093 38.2193 14.0595 38.9164 17.1612 39.2615C22.2959 39.8315 27.4133 39.6873 32.3658 38.0734C34.2165 37.4691 35.9384 36.4578 37.6929 35.5908C38.064 35.4071 38.3699 35.0654 38.6672 34.7598C39.8959 33.4962 39.9732 32.2498 38.6053 31.1544C37.4025 30.1827 35.959 29.5028 34.6118 28.7113C34.3284 28.5694 34.0349 28.4489 33.7336 28.3508Z"
              fill="#C2202B"
            />
          </g>
          <defs>
            <clipPath id="clip0_731_300">
              <rect width="44" height="44" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      <h5 className="font-bold text-2xl">{value}</h5>
      <p>{label}</p>
    </div>
  );
}
