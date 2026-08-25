import { ImageResponse } from "next/og";
import { profile } from "@/lib/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#231F20",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <svg
          viewBox="0 0 1700.79 1117.97"
          width="90"
          height="59"
          fill="#fdb913"
          fillRule="evenodd"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginBottom: 36 }}
        >
          <path d="M1381,636.08l-.09-.14a199.82,199.82,0,0,0-161.66-82.16H1080l219-444.6L1110.65,16.45a200.08,200.08,0,0,0-256.64,91L725.11,369.2l-187.82-283-.17-.26A199.82,199.82,0,0,0,372.75,0H0L319.82,481.86l.1.14a199.8,199.8,0,0,0,161.66,82.16H629.11L410.07,1009l181.49,89.39a200.11,200.11,0,0,0,264.61-90v-.06L980.47,756l183,275.74a3,3,0,0,0,.16.26,199.89,199.89,0,0,0,164.37,86h372.76ZM1018.57,182.72a47.23,47.23,0,1,1,47.23-47.23,47.22,47.22,0,0,1-47.23,47.23" />
        </svg>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
          Yamama
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 30,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 920,
          }}
        >
          Technical Product Manager & Audio Tech Creator
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 22,
            color: "#fdb913",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          {profile.location} · TPM case studies · The Angry Bird
        </div>
      </div>
    ),
    { ...size }
  );
}
