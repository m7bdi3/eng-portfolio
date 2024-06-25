'use server'

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function MarkAsRead(id: number) {
    await prisma.projectForm.update({
        where: {
            id: id
        },
        data: {
            opened: true
        }
    })
    revalidatePath('dashboard','layout')
    revalidatePath('dashboard','page')
}