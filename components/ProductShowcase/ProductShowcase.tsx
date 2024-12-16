'use client'

import style from './productShowCase.module.css'
import FilterBar from './FilterBar'
import SideBar from './SideBar'
import ProductCard from './ProductCard'
import { useState } from 'react'
export default function ProductShowcase():React.ReactElement{
    const [filterToggle, setFilterToggle] = useState<boolean>(false);
    return<main className={style['product-show-case']}>
   <FilterBar filterToggle={filterToggle} setFilterToggle={setFilterToggle}></FilterBar>
   <div className={style['sidebar-container']}>
   <SideBar filterToggle={filterToggle}></SideBar>
   <ProductCard></ProductCard>
    </div>
    </main>
}