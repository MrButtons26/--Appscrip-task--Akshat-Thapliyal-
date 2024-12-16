
import { StaticImageData } from 'next/image';
import itemOne from '@/public/productImages/bagThree.png'
import itemTwo from '@/public/productImages/handbag.png'
import itemThree  from '@/public/productImages/bagTwo.png'
import itemFour  from '@/public/productImages/cap.png'
import itemFive from '@/public/productImages/carrybag.png'
import itemSix from '@/public/productImages/dinosour.png'
import itemSeven from '@/public/productImages/dinoTwo.png'
import itemEight from '@/public/productImages/duffleBag.png'
import itemNine from  '@/public/productImages/handbag.png'
import itemTen  from '@/public/productImages/tagTwo.png'
import itemEleven from '@/public/productImages/bagTwo.png'
import itemTwelve from '@/public/productImages/handbagThree.png'
import itemThirteen from '@/public/productImages/handbagTwo.png'
import itemOneFourteen from '@/public/productImages/tag.png'
import itemOneFifteen from '@/public/productImages/bagTwo.png'
export const listItems: { id: number; name: string }[] = [
    { id: 1, name: "RECOMMENDED" },
    { id: 2, name: "NEWEST FIRST" },
    { id: 3, name: "POPULAR" },
    { id: 3, name: "PRICE : HIGH TO LOW" },
    { id: 3, name: "PRICE : LOW TO HIGH" },
  ];
  export const sideBarData: { category: string; subCategory: string }[] = [
    { category: 'IDEAL FOR', subCategory: "All" },
    { category: 'OCCASION', subCategory: "All" },
    { category: 'WORK', subCategory: "All" },
    { category: 'FABRIC', subCategory: "All" },
    { category: 'SEGMENT', subCategory: "All" },
    {category: 'RAW MATERIALS', subCategory: "All"},
    {category: 'PATTERN', subCategory: "All"},
  ];
  export const productDetails:StaticImageData[] = [itemOne,
    itemTwo,
    itemThree,
    itemFour,
     itemFive,
    itemSix,
    itemSeven,
    itemEight,
    itemNine,
    itemTen,
    itemEleven,
    itemTwelve,
    itemThirteen,
    itemOneFourteen,
    itemOneFifteen
];