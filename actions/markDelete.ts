'use server'

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function MarkAsDeleted(id: number) {
    await prisma.projectForm.delete({
        where: {
            id: id
        },
    })

    revalidatePath('dashboard','layout')
    revalidatePath('dashboard','page')
}