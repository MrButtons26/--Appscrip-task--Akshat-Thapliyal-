import { productDetails } from "@/utils/SeederData"
import Image from "next/image"
import style from './productShowCase.module.css'
import heart from '@/public/icons/heart.svg'
export default function ProductCard():React.ReactElement{
    return <div className={style['product-card-container']}>
        {productDetails.map((el,index)=><div key={index}>
            <Image src={el} alt="Description of Product Image"></Image>
            <h2>PRODUCT NAME</h2>
            <h3>
                <span style={{textDecorationLine:'underline',color:'black',cursor:'pointer'}}>Sign in</span>
                 in or Create an account to see pricing</h3>
            </div>)}
            </div>
}