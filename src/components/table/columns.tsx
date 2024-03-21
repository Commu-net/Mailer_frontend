"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { updateMailList } from "@/redux/slices/emailList"

import { useDispatch, useSelector } from "react-redux"
import { useToast } from "@/components/ui/use-toast"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

import { RootState } from "@/redux/store"
import { setChange } from "@/redux/slices/userData"

import EditProfileForm from "@/components/editProfileForm/EditProfileForm"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"





export type Payment = {
  id: string
  company: string
  name: string
  email: string
  currentDesignation: string
  addedOn: string
}
async function deleteProfile(userId: string, rowId: any, toast: Function,dispatch:Function) {
  // write a function to do a delete request to this api end point http://localhost:4000/api/v1/mail
  // here it goes write the function to delete the profile
  fetch("https://api.api-communet.tech/api/v1/mail", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      _id: rowId,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.statusCode === 200) {
        dispatch(setChange(true))
        toast({
          title: "Successfully deleted profile",
          className: " text-green-600 bg-green-100"
        })
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      toast({
        title: "An error occoured while deleting this profile",
        className: " text-red-600 bg-red-100"
      })
    });

}

function submitHandler(userId: string, rowId: string, toast: Function,dispatch: Function) {
  deleteProfile(userId, rowId, toast,dispatch)
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: boolean) => {
          table.toggleAllPageRowsSelected(!!value)
        }}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => {
      //  the function hre to update the email list
      const dispatch = useDispatch()


      return (<Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => {
          dispatch(updateMailList(row.original))
          row.toggleSelected(!!value)
        }}
        aria-label="Select row"
      />)
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "company",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Company
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "currentDesignation",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          profession
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "addedOn",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }: any) => {
      let { toast } = useToast();
      let dispatch = useDispatch()
      let userId = useSelector((state: RootState) => state.userData.userId)
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={(event) => {
                event.preventDefault()
              }}
            >
              <EditProfileForm row={row.original} />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={(event) => {
                event.preventDefault()
              }}
            >
              <AlertDialog>
                <AlertDialogTrigger className="w-[100%]" style={{ outline: "2px solid transparent" }}>Delete</AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete this profile
                      and remove the data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                      <Button onClick={() => {
                        submitHandler(userId, row.original._id, toast,dispatch)
                      }}>Continue</Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
