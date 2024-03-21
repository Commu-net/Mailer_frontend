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

import { RootState } from "@/redux/store"

import { useToast } from "@/components/ui/use-toast"
import { DialogClose } from "@radix-ui/react-dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { GoPlusCircle } from "react-icons/go"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { useSelector } from "react-redux"

import { useDispatch } from "react-redux"
import { setChange } from "@/redux/slices/userData"

const profileSchema = z.object({
    name: z.string({ required_error: "name is required" }).min(2, 'name should not be empty or less than 2 letter').max(50),
    email: z.string().email(),
    company: z.string().min(2).max(50),
    designation: z.string().min(2).max(50),
})

export async function addProfile(values: z.infer<typeof profileSchema>, userId: string, toast: Function, dispatch: Function) {

    values.company = values.company ? values.company : " - "
    values.designation = values.designation ? values.designation : " - "

    try {
        let data = await fetch("https://api.api-communet.tech/api/v1/mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: userId,
                data: [{
                    email: values.email,
                    currentDesignation: values.designation,
                    name: values.name,
                    company: values.company,
                }],
            }),
        })
        let response = await data.json()
        if (response.statusCode === 200) {
            dispatch(setChange(true))
            toast({
                title: "Successfully added profile",
                className: " text-green-600 bg-green-100"
            })
        }
    } catch (error) {
        toast({
            title: "An error occured while saving this profile",
            className: " text-red-600 bg-red-100"
        })
    }

}

export default function AddProfileForm() {
    const { toast } = useToast()
    const dispatch = useDispatch()

    const userId = useSelector((state: RootState) => state.userData.userId)
    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            designation: ""

        },
    })

    // 2. Define a submit handler.
    function submitHandler(values: z.infer<typeof profileSchema>, userId: string, toast: Function, dispatch: Function) {
        addProfile(values, userId, toast, dispatch)
    }

    return (<Dialog>
        <DialogTrigger asChild>
            <Button variant={"default"} className='h-[100%] w-[100px]  text-black rounded-sm border-dashed border-[1px] border-black flex justify-center items-center gap-[10px] bg-white active:bg-white'>
                <div><GoPlusCircle /></div>
                <div>Add</div>
            </Button>
        </DialogTrigger>
        <DialogContent className="W-[300px] sm:max-w-[425px] h-[500px]">
            <DialogHeader>
                <DialogTitle>Add profile</DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    submitHandler(form.getValues(), userId, toast, dispatch)
                }} className="space-y-4 flex flex-col ">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter the Name for the profile" {...field} className="w-[100%]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>


                                <FormControl>
                                    <Input
                                        placeholder="email account of profile"
                                        {...field}
                                        className=" w-[100%] "
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company</FormLabel>
                                <FormControl>
                                    <Input placeholder="Company of profile" {...field} className="w-[100%]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="designation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Designation</FormLabel>
                                <FormControl>
                                    <Input placeholder="Designation fo profile" {...field} className="w-[100%]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-[100%] flex justify-center items-center">
                        <DialogClose asChild>
                            <Button type="submit" className="w-[20%] ">Create</Button>
                        </DialogClose>

                    </div>
                </form>
            </Form>
        </DialogContent>
    </Dialog>
    )
}

