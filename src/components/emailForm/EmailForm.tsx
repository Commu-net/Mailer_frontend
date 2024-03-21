"use client"

import { z } from "zod"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { RootState } from "@/redux/store"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


import { useToast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { FaPencil } from "react-icons/fa6";
import { IoFolderOpenSharp } from "react-icons/io5";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { useSelector } from "react-redux"
import { DialogClose } from "@radix-ui/react-dialog"

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


async function sendMail(values: z.infer<typeof formSchema>, emailString: string, userEmail: string,toast:Function) {

    
  

    const formData = new FormData();
    formData.append('subject', values.title);
    formData.append('text', values.body);
    formData.append('file', values.file);
    formData.append('emails', emailString);
    formData.append('sender', userEmail);

    // chck for error regarding type of date 

    try {
        const response = await fetch('https://api.api-communet.tech/api/v1/send/', {
        method: 'POST',
        body: formData,
    })
    if (response.ok) {
        toast({
            title: "Mail sent successfully",
            className:" text-green600 bg-green-100"})
    } 
    } catch (error) {
        toast({
            title: "An error occured while sending the mails",
            className:" text-red-600 bg-red-100"})
    }

}

export function onSend(values: z.infer<typeof formSchema>, profileList: any[], userEmail: string,toast:Function) {

    let str = ""
    for (let i = 0; i < profileList.length; i++) {
        str += profileList[i].email + ","
    }
    str = str.slice(0, -1)
    sendMail(values, str, userEmail,toast)


}

export default function EmailForm() {

    const userEmail = useSelector((state: RootState) => state.userData.userEmail);
    const emailList = useSelector((state: any) => state.emailList.emailList)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            body: "",
            file: undefined,
        },
    })

    // 2. Define a submit handler.
    function submitHandler(values: z.infer<typeof formSchema>,toast:Function) {
        onSend(values, emailList, userEmail,toast)
    }
    let {toast} = useToast()

    return (<Dialog>
        <DialogTrigger asChild>
            <Button variant={"default"} className='rounded-3xl h-[50px] w-[50px] bg-blue-500 fixed bottom-[30px] right-[25px] :hover-bg-blue-600'> <FaPencil /></Button>
        </DialogTrigger>
        <DialogContent className="W-[300px] sm:max-w-[425px] h-[500px]">
            <DialogHeader>
                <DialogTitle>Compose your mail</DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    submitHandler(form.getValues(),toast)
                }} className="space-y-4 flex flex-col ">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter the title for your mail" {...field} className="w-[100%]" />
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
                                        className=" resize-none flex-grow flex justify-center items-center h-[80px] w-[100%] border border-solid border-gray-200 px-3 py-2 text-sm ring-offset-background file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 background-red-200 "

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
                            <FormItem >
                                <FormLabel>Attachment</FormLabel>
                                <FormControl
                                >
                                    <div className="file_back border-dashed border-2 rounded-md border-gray-300 h-[130px] relative  flex justify-center items-center flex-col "
                                        onDragEnter={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            const node = e.target as HTMLDivElement;
                                            node.classList.add("bg-blue-100"); // Add blue background
                                        }}
                                        onDragOver={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            const node = e.target as HTMLDivElement;
                                            node.classList.add("bg-blue-100"); // Add blue background
                                        }}
                                        onDragLeave={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            const node = e.target as HTMLDivElement;
                                            node.classList.add("bg-blue-100"); // Add blue background
                                        }}>
                                        <div className="text-6xl text-blue-600"><IoFolderOpenSharp /></div>
                                        <div>{form.control._fields.file ? form.control._fields.file._f.value ? `${form.control._fields.file._f.value.name.slice(0, 5) + "..."}` : "Click to upload or drag your file here" : "Click to upload or drag your file here"}</div>
                                        <Input
                                            type="file"
                                            className="file:bg-transparent z-[11] absolute h-[100px] w-[90%] opacity-[0]
                                          file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50  flex justify-center items-center bg-blue-100"
                                            onChange={(e) => {
                                                const file = e.target.files && e.target.files[0];
                                                if (file) {
                                                    form.setValue("file", file); // Set the file value
                                                }
                                            }}
                                            aria-hidden="true"

                                        />
                                    </div>

                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-[100%] flex justify-center items-center">
                        <DialogClose asChild>
                            <Button type="submit" className="w-[20%] " >Submit</Button>
                        </DialogClose>

                    </div>
                </form>
            </Form>
        </DialogContent>
    </Dialog>
    )
}

