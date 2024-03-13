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
    FormMessage,
} from "@/components/ui/form"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { RiFileExcel2Fill } from "react-icons/ri";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"



const formSchema = z.object({
    file: z.instanceof(File).refine(file => {
        const validTypes = ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
        return validTypes.includes(file.type);
    }, {
        message: 'Invalid file type',
    }),
})

export function importFile(values: z.infer<typeof formSchema>) {

    console.log("this is the form",values)

}

export default function ImportProfileForm() {
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            file: undefined,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        importFile(values)
    }

    return (<Dialog>
        <DialogTrigger asChild>
            <Button variant={"default"} className=' h-[100%] w-[100px]  text-black rounded-sm border-dashed border-[1px] border-black flex justify-center items-center gap-[10px] bg-white active:bg-white'> 
            <div><RiFileExcel2Fill  /></div>
            <div>Import </div>   
            </Button>
        </DialogTrigger>
        <DialogContent className="W-[300px] sm:max-w-[425px] h-[500px]">
            <DialogHeader>
                <DialogTitle>Import Excel file</DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    onSubmit(form.getValues())
                    console.log('submitted')
                }} className="space-y-4 flex flex-col ">
                   
                    <FormField
                        control={form.control}
                        name="file"
                        render={() => (
                            <FormItem >
                                <FormControl
                                 >
                                    <div className="file_back border-dashed border-2 rounded-md border-gray-300 h-[300px] relative  flex justify-center items-center flex-col "
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
                                        <div className="text-6xl text-blue-600"><RiFileExcel2Fill/></div>
                                        <div>{ form.control._fields.file? form.control._fields.file._f.value ? `${form.control._fields.file._f.value.name.slice(0,5)+"..."}`:" Upload or drag your excel file here" : " Upload or drag your excel file here"}</div>
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
                    <Button type="submit" className="w-[20%] ">Submit</Button>

                    </div>
                </form>
            </Form>
        </DialogContent>
    </Dialog>
    )
}

