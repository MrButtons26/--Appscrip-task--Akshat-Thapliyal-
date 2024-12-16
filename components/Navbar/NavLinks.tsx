


export default function Navlinks({children,text}:{children?:React.ReactNode,text?:string}): React.ReactElement {
  return (
    <li style={{listStyle:'none'}}>
        {text}
        {children||true}
    </li>
  );
}


