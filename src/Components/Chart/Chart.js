import React from "react";
import { ResponsiveRadar } from "@nivo/radar";

export default function Chart({
  combat,
  durability,
  intelligence,
  power,
  speed,
  strength,
}) {
  console.log("CHART", combat);
  console.log("CHART PARSEADO", parseInt(combat));
  const data = [
    {
      powerstat: "combate",
      "Total stat": parseInt(combat),
    },
    {
      powerstat: "resistencia",
      "Total stat": parseInt(durability),
    },
    {
      powerstat: "inteligencia",
      "Total stat": parseInt(intelligence),
    },
    {
      powerstat: "poder",
      "Total stat": parseInt(power),
    },
    {
      powerstat: "velocidad",
      "Total stat": parseInt(speed),
    },
    {
      powerstat: "fuerza",
      "Total stat": parseInt(strength),
    },
  ];
  return (
    <ResponsiveRadar
      data={data}
      keys={["Total stat"]}
      indexBy="powerstat"
      // valueFormat=">-.0f"
      margin={{ top: 70, right: 80, bottom: 45, left: 80 }}
      borderColor={{ from: "color" }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      colors={{ scheme: "red_blue" }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
}
