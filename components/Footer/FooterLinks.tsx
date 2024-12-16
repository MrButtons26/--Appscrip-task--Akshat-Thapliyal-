"use client";



export default function FooterLinks({children,text}:{children?:React.ReactNode,text?:string}): React.ReactElement {
  return (
    <li style={{cursor:'pointer'}}>
        {text}
        {children||true}
    </li>
  );
}


