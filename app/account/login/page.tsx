"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Header } from '../../components/Header'
import { useRouter } from "next/navigation"
import Link from "next/link"

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password lenght must be more than 8!"
    })
})

export function LoginPage() {
    const router = useRouter()

    let u_username: string = ""
    let u_password: string = ""

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        u_username = data.username
        u_password = data.password
        console.log(u_username + ": " + u_password)
        router.refresh()
    }

    return (
        <>
            <Header />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-96 m-4 lg:shadow-md md:shadow-md p-6 flex flex-col justify-between items-stretch lg:m-0 sm:m-3 sm:shadow-none">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="What do you want to be referred as to." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input onChange={(e) => console.log(e.target.value)} placeholder="Password should be strong and more than 8 letters long." {...field} />
                                </FormControl>
                                <FormDescription>
                                    Keep it private and do not tell your friends!
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                    <p>New here? <Link href="/sign_up" className="underline italic">Let{"'"}s create an account.</Link></p>
                </form>
            </Form>
        </>
    )
}

export default LoginPage