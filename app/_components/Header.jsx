"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import GlobalApi from "../_utils/GlobalApi";
  
const Header = () => {

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList()
  }, []);

  const getCategoryList=()=>{
    
    
    GlobalApi.getCategory().then((res)=>{
        if (res?.data?.data) {
        setCategoryList(res?.data?.data);
        } else {
            console.error('No category data received');
            setCategoryList([]); 
        }
    }).catch(error => {
        console.error('Error fetching categories:', error);
        setCategoryList([]); 
    });
  }


  return (

<div className="p-5 shadow-sm flex justify-between">
    <div className="flex items-center gap-8 ">
    <Image src="/logo.png" alt="logo" width={150} height={100} />
        <DropdownMenu>
  <DropdownMenuTrigger asChild><h2 className="hidden md:flex  gap-2 items-center border rounded-full p-2 px-10 bg-slate-200">
            <LayoutGrid className="h-5 w-5 "/>
            Category
        </h2></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {categoryList && categoryList.length > 0 ? 
      categoryList.map((category) => (
        <DropdownMenuItem key={category.id} className="flex gap-4 items-center cursor-pointer">
          <Image src={process.env.NEXT_PUBLIC_API_URL+category?.icon[0]?.url} alt={category.name} width={30} height={30} unoptimized={true}/>
          <h2 className="text-lg">{category.name}</h2>
        </DropdownMenuItem>
      )) 
    : null}
  </DropdownMenuContent>
</DropdownMenu>





        <div className="md:flex hidden gap-3 items-center border rounded-full p-2 px-5">
            <Search/>
            <input type="text" placeholder="Search" className="outline-none" />
        </div>


    </div>
    <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg"><ShoppingBag/> 0</h2>
        <Button>Login</Button>
    </div>
</div> 


    

  );
};

export default Header;
