import styled from "styled-components";

export const MapStyled = styled.div`
  width: 144rem;
  height: 40rem;
  position: relative;
`;

const mapStyle = {
  mapStyle: [
    {
      featureType: "all",
      stylers: [
        {
          saturation: 0,
        },
        {
          hue: "#e7ecf0",
        },
      ],
    },
    {
      featureType: "road",
      stylers: [
        {
          saturation: -70,
        },
      ],
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      stylers: [
        {
          visibility: "simplified",
        },
        {
          saturation: -60,
        },
      ],
    },
  ],
};
export default mapStyle;
