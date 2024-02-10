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
        console.log("hello")
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
                <form onSubmit={(event) => {
                    event.preventDefault()
                    onSubmit(form.getValues())
                    console.log('submitted')
                }} className="space-y-4">
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
                                    <textarea
                                        placeholder="Body of your mail"
                                        {...field}
                                        autoComplete="off"
                                        className=" resize-none flex-grow flex h-[80px] w-[90%] border border-solid border-gray-200 px-3 py-2 text-sm ring-offset-background file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 background-red-200 "

                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="file"
                        render={() => (
                            <FormItem>
                                <FormLabel>Attachment</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        className="file:bg-transparent h-[100px]  file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 background-red-200 border-dashed border-2 border-gray-300 flex justify-center items-center"
                                        onChange={(e) => {
                                            const file = e.target.files && e.target.files[0];
                                            if (file) {
                                                form.setValue("file", file); // Set the file value
                                            }
                                        }}
                                        onDragEnter={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            const inputElement = e.target as HTMLInputElement;
                                            inputElement.classList.add("bg-blue-100"); // Add blue background
                                        }}
                                        onDragOver={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            const inputElement = e.target as HTMLInputElement;
                                            inputElement.classList.add("bg-blue-100"); // Add blue background
                                        }}
                                        onDragLeave={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            const inputElement = e.target as HTMLInputElement;
                                            inputElement.classList.remove("bg-blue-100"); // Remove blue background
                                        }}
                                    />

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

