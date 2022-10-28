import React, { useState } from 'react'
import Styles from './Tab.module.css'


const Tab = () => 
{
    const [tabClick , setTabClick] =useState(1)

    const tapC =(index) =>
    {
        setTabClick(index)
    }
    

    return (
        <div className={Styles.container}>
            <tr className={Styles.block_tab}>
                <th className={tabClick ===1 ? Styles.tab_active:Styles.tab} onClick={() => {tapC(1)}}>المجوهرات</th>
                <th className={tabClick ===2 ? Styles.tab_active:Styles.tab} onClick={() => {tapC(2)}}>المكياج</th>
                <th className={tabClick ===3 ? Styles.tab_active:Styles.tab} onClick={() => {tapC(3)}}>لوحات جدارية</th>
            </tr>

            <div>
                <div className={tabClick ===1 ? Styles.tabContain_active:Styles.tabContain}>محتوى المجوهرات</div>
                <div className={tabClick ===2 ? Styles.tabContain_active:Styles.tabContain}>محتوى المكياج</div>
                <div className={tabClick ===3 ? Styles.tabContain_active:Styles.tabContain}>محتوى اللوحات الجدارية</div>
            </div>
        </div>
    )
}

export default Tab
