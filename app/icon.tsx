import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#231F20",
          borderRadius: 12,
        }}
      >
        <svg
          viewBox="0 0 1700.79 1117.97"
          width="46"
          height="30.2"
          fill="#fdb913"
          fillRule="evenodd"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1381,636.08l-.09-.14a199.82,199.82,0,0,0-161.66-82.16H1080l219-444.6L1110.65,16.45a200.08,200.08,0,0,0-256.64,91L725.11,369.2l-187.82-283-.17-.26A199.82,199.82,0,0,0,372.75,0H0L319.82,481.86l.1.14a199.8,199.8,0,0,0,161.66,82.16H629.11L410.07,1009l181.49,89.39a200.11,200.11,0,0,0,264.61-90v-.06L980.47,756l183,275.74a3,3,0,0,0,.16.26,199.89,199.89,0,0,0,164.37,86h372.76ZM1018.57,182.72a47.23,47.23,0,1,1,47.23-47.23,47.22,47.22,0,0,1-47.23,47.23" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
