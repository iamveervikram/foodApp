import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Hamburger = (props) => (
  <Svg
    width={35}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M32.336 20.9c.04-4.555-6.587-4.845-14.764-4.927-8.177-.083-14.809.073-14.849 4.63-.042 4.553 6.554 8.313 14.732 8.396 8.177.082 14.84-3.544 14.88-8.1Z"
      fill="#EE8E26"
    />
    <Path
      d="M17.264 27.137c-4.182 0-8.607-1.004-12.31-3.65-.723-.515-1.913-1.662-2.038-3.337C4.2 23.616 10.24 26.238 17.5 26.238c7.316 0 13.396-2.664 14.614-6.17-.025.991-.406 2.14-1.634 3.19-2.42 2.07-7.6 3.88-13.216 3.88Z"
      fill="#F3A130"
    />
    <Path
      d="M32.337 18.774c0 4.123-6.644 7.464-14.837 7.464S2.664 22.897 2.664 18.774c0-4.124 6.643-7.467 14.836-7.467 8.193 0 14.837 3.343 14.837 7.467Z"
      fill="#601F07"
    />
    <Path
      d="M17.5 24.519c-6.234 0-11.442-2.074-12.694-4.84 2.464 1.9 6.586 3.146 11.284 3.187a453.31 453.31 0 0 1 2.815 1.617 27.5 27.5 0 0 1-1.405.036Zm2.107-.08c.464-.402 1.418-1.22 2.665-2.248 2.055-.491 3.856-1.229 5.263-2.138.285.188.59.325.945.325.04 0 .082-.002.124-.005.53-.047.738-.248.833-.531h.054c.216 0 .435-.021.66-.072-1.17 2.404-5.336 4.268-10.544 4.669Z"
      fill="#6A260B"
    />
    <Path
      d="M30.768 15.249c.045 4.112-6.271 7.522-14.106 7.616-7.836.094-14.222-3.164-14.266-7.277-.044-4.113 6.272-7.524 14.107-7.616 7.834-.094 14.222 3.163 14.265 7.277Z"
      fill="#DB2C1A"
    />
    <Path
      d="M30.729 14.832c.043 3.88-6.265 7.103-14.09 7.197-7.825.093-14.202-2.978-14.244-6.859-.042-3.88 6.27-7.103 14.093-7.195 7.825-.094 14.201 2.977 14.241 6.857Z"
      fill="#FA5E43"
    />
    <Path
      d="M4.647 16.725c4.462 2.04 14.648 7.985 14.648 7.985s7.596-6.678 13.38-10.17c6.04-3.644-34.435-.743-28.028 2.185Z"
      fill="#FFD177"
    />
    <Path
      d="M19.295 23.916s-3.706-2.164-7.627-4.328c.097-.01.19-.017.279-.017.37 0 .696.109 1.168.444.688.491 1.016.985 1.94 1.01.022.002.044.002.066.002.992 0 1.335-.648 2.129-1.175.196-.131.424-.265.669-.384.36.387.737.661 1.106.661.317 0 .629-.204.916-.717l.14-.246c.557.252.71.825 1.41 1.071.195.069.388.099.58.099.624 0 1.229-.318 1.845-.636.348-.18.7-.359 1.06-.48-3.203 2.518-5.681 4.696-5.681 4.696Z"
      fill="#FEC750"
    />
    <Path
      d="M1.738 17.394c.514.565 1.23.294 1.924.022.872-.342 1.708-.684 2.06.637.177.658-.171 1.5.852 1.662.395.063.711-.082 1.032-.226.367-.164.74-.33 1.242-.187.962.273 1.074.583 2.064.41.986-.172 1.364-.294 2.203.303.688.491 1.016.985 1.94 1.01 1.043.03 1.384-.635 2.195-1.173.657-.437 1.664-.904 2.459-.792.89.126.949.884 1.781 1.177.835.294 1.621-.122 2.426-.537.644-.332 1.3-.665 2.004-.634 1.458.063 2.824 1.139 4.442.65 1.807-.548 1.06-2.35 2.454-3.633.882-.81 1.147-.578 1.372-1.829.171-.95.59-1.74.11-2.597-1.373-2.449-6.005-2.776-8.384-3.273-3.416-.713-7.274-.492-10.653.327-1.245.303-16.495 5.413-13.523 8.683Z"
      fill="#769927"
    />
    <Path
      d="M.569 16.117c.432.194.958.065 1.486-.064.537-.132 1.075-.264 1.518-.053.916.434.33 1.454 1.012 2.216.94 1.051 1.167.284 2.068-.06 1.158-.44.996.257 1.497 1.238.338.658 1.325 1.792 2.152 1.334.626-.347.856-2.037 1.342-2.654 1.24-1.575 3.518-2.45 4.781-.677.822 1.155 2.361 4.077 3.516 2.015.606-1.082.728-1.206 1.71-.242.901.885.815 1.062 1.882.439.817-.478 1.624-.936 2.583-.552.84.337 1.458 1.407 2.488 1.316 1.216-.108.731-1.023 1.109-1.883.45-1.028 1.514-1.289 2.487-1.292.176-.001.398.03.64.06.737.092 1.645.185 1.873-.601.36-1.24-1.513-1.09-1.455-2.293.037-.781.444-.77.862-.76.291.007.589.014.772-.246.504-.713-.893-1.852-1.325-2.162-1.324-.95-3.248-.897-5.064-.843-.85.025-1.677.05-2.407-.027-3.177-.34-6.267-.703-9.473-.44-2 .164-4.472.135-6.32 1.004-1.14.536-2.188 1.474-3.442 1.69-.558.096-1.098-.002-1.637-.1-.44-.08-.88-.161-1.328-.135-.956.056-5.465 2.808-3.327 3.772Z"
      fill="#A4C256"
    />
    <Path
      d="M33.362 11.446c0 6.32-7.086 6.63-15.825 6.63-8.74 0-15.825-.31-15.825-6.63C1.712 5.124 8.797 0 17.537 0c8.74 0 15.825 5.124 15.825 11.446Z"
      fill="#EE8E26"
    />
    <Path
      d="M22.056 6.044c1.415.063 3.517.475 4.69-.446 1.599-1.257-.08-3.156-1.464-3.942-.602-.34-1.24-.617-1.901-.846a21.103 21.103 0 0 0-5.515-.803 23.303 23.303 0 0 0-5.044.644c-1.192.285-2.544.666-3.828 1.163-1.849.859-3.434 1.987-4.649 3.31-1.333 2.482.913 5.021 4.682 4.34 2.475-.448 4.22-2.07 6.585-2.753 2.06-.594 4.251-.761 6.444-.667Z"
      fill="#F69F37"
    />
    <Path
      d="M17.537 18.075h-.1.1c8.74 0 15.825-.308 15.825-6.63 0 6.322-7.086 6.63-15.826 6.63Z"
      fill="#ADA748"
    />
    <Path
      d="M17.537 18.075h-.1c-8.211-.002-14.936-.3-15.657-5.639.954.767 1.834 1.98 2.584 2.44 1.146.706 2.736 1.172 4.069 1.48 1.94.448 4.04.578 6.138.578 1.148 0 2.295-.04 3.415-.085 3.064-.129 6.256-.444 8.966-1.694 1.476-.68 2.708-1.307 3.875-2.332.336-.296 1.548-1.628 2.466-2.418.043.343.069.69.069 1.04 0 6.322-7.086 6.63-15.825 6.63Z"
      fill="#E18226"
    />
    <Path
      d="M11.671 4.322c-.14.187-.35.259-.47.16-.119-.1-.102-.333.04-.52.14-.188.469-.16.469-.16s.102.332-.039.52ZM18.428 4.324c-.207.096-.425.053-.486-.094-.06-.148.06-.344.268-.439.208-.094.486.095.486.095s-.06.343-.268.438ZM20.754.902c-.17.16-.389.192-.49.072-.101-.12-.046-.346.124-.505.169-.159.49-.071.49-.071s.045.345-.124.504ZM23.255 4.116c-.112.208-.31.313-.442.233-.132-.08-.147-.312-.035-.52.112-.208.442-.233.442-.233s.148.312.035.52ZM18.157 6.033c.116.205.104.439-.027.521-.13.082-.33-.019-.445-.225-.116-.206.026-.52.026-.52s.33.018.446.224ZM24.38 5.146c.107.21.085.443-.049.52-.134.075-.33-.035-.436-.246-.107-.211.049-.52.049-.52s.33.035.436.246ZM26.652 5.515c-.188.134-.409.135-.494.001-.085-.132 0-.349.187-.482.188-.134.494-.002.494-.002s.002.35-.187.483ZM15.817 8.102c.135.192.145.425.023.52-.122.096-.33.017-.465-.175-.135-.193-.022-.521-.022-.521s.33-.017.464.176ZM14.507 1.999c-.171.156-.39.184-.49.063-.099-.121-.04-.347.132-.503.172-.156.49-.063.49-.063s.04.347-.132.503ZM8.724 6.737c-.188.133-.409.133-.494 0-.084-.134 0-.35.188-.483.189-.132.494 0 .494 0s0 .35-.188.483ZM14.78 5.37c.188.133.272.35.188.483-.085.133-.306.133-.494 0-.188-.134-.188-.483-.188-.483s.306-.133.494 0ZM10.68 8.03c.191.128.28.342.2.477-.082.136-.303.141-.495.013-.191-.128-.199-.477-.199-.477s.302-.142.494-.013ZM6.306 5.055c.168.16.223.386.122.505-.101.12-.32.086-.489-.073-.169-.16-.122-.505-.122-.505s.32-.087.489.073ZM9.332 2.787c.163.166.21.394.105.51-.105.116-.323.075-.487-.09-.163-.166-.106-.51-.106-.51s.324-.075.488.09ZM11.688 1.965c.07.229.009.453-.136.501-.144.05-.318-.096-.387-.323-.069-.228.136-.502.136-.502s.318.096.387.324ZM13.086 9.286c.226.025.395.175.38.334-.016.16-.212.268-.437.244-.225-.026-.38-.334-.38-.334s.211-.269.437-.244ZM20.898 8.47c-.226.013-.416-.107-.425-.267-.008-.16.168-.3.396-.313.225-.013.424.265.424.265s-.169.301-.395.314ZM19.917 9.457c.087.22.044.45-.097.511-.14.062-.324-.068-.411-.29-.086-.22.097-.51.097-.51s.324.068.41.289ZM6.871 8.314c-.016.239-.15.423-.302.413-.152-.011-.262-.214-.247-.452.015-.24.302-.413.302-.413s.262.213.247.452ZM18.152.936c-.152.176-.367.232-.48.124-.11-.108-.078-.34.075-.516.153-.177.48-.125.48-.125s.078.34-.075.517ZM26.384 6.433c.061.23-.007.453-.154.496-.145.044-.313-.108-.375-.338-.062-.23.152-.496.152-.496s.315.108.377.338ZM21.29 5.57c-.219.06-.428-.015-.467-.17-.038-.156.108-.33.328-.391.22-.061.466.17.466.17s-.108.33-.327.39ZM24.114 8.052c-.109.21-.305.318-.439.241-.132-.077-.151-.31-.043-.52.109-.21.439-.24.439-.24s.152.31.043.52ZM24.722 2.472c-.022.238-.162.419-.313.404-.151-.016-.255-.222-.234-.46.022-.238.313-.404.313-.404s.256.222.234.46ZM19.385 2.64c-.227-.002-.41-.133-.41-.294 0-.16.186-.288.412-.288.226.002.409.293.409.293s-.185.29-.411.288ZM22.498 2.205c-.168.16-.388.192-.49.071-.1-.12-.044-.345.125-.505.17-.158.49-.07.49-.07s.044.345-.125.504Z"
      fill="#FEE9C6"
    />
  </Svg>
)

export default Hamburger