import * as React from "react"
import Svg, { Path } from "react-native-svg"

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
        d="M18.889 6.017L12.222.763A3.555 3.555 0 0010 0c-.82 0-1.611.272-2.222.763L1.11 6.017a3.034 3.034 0 00-.826 1.02A2.74 2.74 0 000 8.275v8.73c0 .794.351 1.556.976 2.118.626.562 1.473.878 2.357.878h13.334c.884 0 1.731-.316 2.357-.878.625-.562.976-1.324.976-2.118v-8.74a2.742 2.742 0 00-.287-1.23 3.034 3.034 0 00-.824-1.017zm-6.667 11.985H7.778v-4.994a.95.95 0 01.325-.706c.209-.187.491-.292.786-.292h2.222c.295 0 .577.105.786.292a.95.95 0 01.325.706v4.994zm5.556-.998a.95.95 0 01-.326.706 1.177 1.177 0 01-.785.292h-2.223v-4.994c0-.794-.35-1.556-.976-2.118-.625-.562-1.473-.878-2.357-.878H8.89c-.884 0-1.732.316-2.357.878-.625.561-.976 1.324-.976 2.118v4.994H3.333c-.294 0-.577-.105-.785-.292a.95.95 0 01-.326-.706v-8.74c0-.142.034-.282.1-.411.065-.13.16-.244.278-.338L9.267 2.27c.202-.16.463-.248.733-.248.27 0 .53.088.733.248L17.4 7.515c.119.094.213.209.279.338.065.13.099.27.099.411v8.74z"
        fill={style.fill}
      />
    </Svg>
  )
}

export default SvgComponent
