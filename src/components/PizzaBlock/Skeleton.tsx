import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton:React.FC = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
 <rect x="0" y="317" rx="10" ry="10" width="280" height="88" /> 
    <rect x="60" y="327" rx="3" ry="3" width="52" height="6" /> 
    <rect x="0" y="285" rx="10" ry="10" width="280" height="21" /> 
    <circle cx="136" cy="142" r="125" /> 
    <rect x="125" y="428" rx="25" ry="25" width="152" height="45" /> 
    <rect x="-1" y="432" rx="10" ry="10" width="95" height="30" />
  </ContentLoader>
)

