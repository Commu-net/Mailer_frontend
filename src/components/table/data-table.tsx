"use client"
import '../css/dummy.css'
import {
  ColumnDef,
  getSortedRowModel,
  flexRender,
  getCoreRowModel,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react"

import { Skeleton } from '../ui/skeleton'

import { Button } from "../ui/button"
import { Input } from "@/components/ui/input"


import AddProfileForm from '../addProfileForm/AddProfileForm'
import ImportProfileForm from '../importProfileForm/ImportProfileForm'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>(

  {
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
  })
  let emptySkeliton = new Array(7).fill(0)
  return (
    <div className="rounded-md h-[100%] w-[100%] flex flex-col justify-start items-center gap-[15px]">
      <div className='up_contr'>
        <div className="flex items-center py-1 search">
          <Input
            placeholder="Search emails..."
            name="email"
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="max-w-sm rounded-sm border-black border-[1px]"
          />
          <div className='invisible h-0 w-0 md:h-12 md:w-3/5 md:visible md:h-8 md:mx-[15px] flex justify-start items-center gap-[15px]'>
            <AddProfileForm />
            <ImportProfileForm />
          </div>
        </div>
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto h-8 rounded-sm ">
              Visibility
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Table className="bg-opacity-60 grass w-[100%]">
        <TableHeader className="bg-black z-9 sticky top-[-2px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className="border-b-20 bg-black text-white text-[12px] font-bold px-0 py-2"
              key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    className="border-b-20 w-[30px] text-white text-[12px] font-bold py-1"
                    key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="  h-fit]">
          {table.getRowModel().rows?.length ?
            (
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="h-[60px]"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                )

              })
            ) : (
              emptySkeliton.map((_, index) => (
                <TableRow key={index} className='border-none' >
                  {
                    columns.map((column) => (
                      <TableCell key={column.id}>
                        <Skeleton />
                      </TableCell>
                    ))
                  }


                </TableRow>
              ))

            )}
        </TableBody>
      </Table>
    </div>
  )
}
