import React from 'react'

function FilterIcon(props) {
  return (
    <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M3 18h6v-2H3v2ZM3 6v2h18V6H3Zm0 7h12v-2H3v2Z"
        fill="#fff"
        fillOpacity={0.8}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
  )
}



export default FilterIcon