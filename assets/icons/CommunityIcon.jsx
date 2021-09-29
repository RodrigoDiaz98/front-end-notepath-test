import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Colors } from "../../src/styles/index";

function SvgComponent(props) {
  const { style } = props;
  return (
    <Svg
      width={style.width}
      height={style.height}
      viewBox="0 0 20 20"
      fill={style.fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5 5a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zm10 0H9a1 1 0 000 2h6a1 1 0 000-2zm0-4H9a1 1 0 000 2h6a1 1 0 100-2zm2-5H3a3 3 0 00-3 3v10a3 3 0 003 3h11.59l3.7 3.71A1 1 0 0019 20a.84.84 0 00.38-.08A1 1 0 0020 19V3a3 3 0 00-3-3zm1 16.59l-2.29-2.3A1 1 0 0015 14H3a1 1 0 01-1-1V3a1 1 0 011-1h14a1 1 0 011 1v13.59z"
        fill={style ? style.fill : Colors.BLACK}
      />
    </Svg>
  )
}

export default SvgComponent
