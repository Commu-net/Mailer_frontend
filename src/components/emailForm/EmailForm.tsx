"use client"

import { z } from "zod"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaPencil } from "react-icons/fa6";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
    title: z.string().min(2).max(50),
    body: z.string().min(2).max(1000),
    file: z.instanceof(File).refine(file => {
        const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/png', 'image/jpeg', 'image/jpg'];
        return validTypes.includes(file.type);
    }, {
        message: 'Invalid file type',
    }),
})

export default function EmailForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            body: "",
            file: undefined,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (<Dialog>
        <DialogTrigger asChild>
            <Button variant={"default"} className='rounded-3xl h-[50px] w-[50px] bg-blue-500 fixed bottom-[30px] right-[25px] :hover-bg-blue-600'> <FaPencil /></Button>
        </DialogTrigger>
        <DialogContent className="W-[300px] sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Compose your mail</DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter the title for your mail" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email body</FormLabel>
                                <FormControl>
                                    <Input  placeholder="Contents of your mail " {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </DialogContent>
    </Dialog>
    )
}