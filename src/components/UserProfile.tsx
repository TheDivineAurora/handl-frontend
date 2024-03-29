"use client"
import React from 'react'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu'
import Link from 'next/link'
import { useSession } from 'next-auth/react'


const UserProfile = () => {
    const {data : session} = useSession();
    const user = session?.user;
    console.log(user);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
                className='overflow-visible'>
                <Button
                    size="sm"
                    variant="ghost"
                    className='relative'>
                    My Account
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className='bg-white w-60'
                align="end">
                <div className='flex items-center justify-start gap-2 p-2'>
                    <div className='flex flex-col space-y-0.5 leading-none'>
                        <p className='font-medium text-sm text-black'>{user?.email}</p>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href='/Dashboard'>Your Dashboard</Link>
                </DropdownMenuItem>

                <DropdownMenuItem 
                 className='cursor-pointer'>
                    Log Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserProfile