import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  const { style } = props;
  return (
    <Svg 
      width={style ? style.width : 21}
      height={style ? style.height : 20}
      viewBox="0 0 21 20" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.994 7.234a1 1 0 00-.86-.67l-5.69-.83-2.55-5.17a1 1 0 00-1.8 0l-2.55 5.16-5.69.84a1 1 0 00-.81.68 1 1 0 00.25 1l4.13 4-1 5.68a1 1 0 001.47 1.08l5.1-2.67 5.1 2.67c.14.08.299.12.46.12a1 1 0 00.59-.19 1 1 0 00.4-1l-1-5.68 4.13-4a1 1 0 00.32-1.02zm-6.15 4a1 1 0 00-.29.88l.72 4.2-3.76-2a1.06 1.06 0 00-.94 0l-3.76 2 .72-4.2a1 1 0 00-.29-.88l-3-3 4.21-.61a1 1 0 00.76-.55l1.78-3.81 1.88 3.82a1 1 0 00.76.55l4.21.61-3 2.99z"
      />
    </Svg>
  )
}

export default SvgComponent