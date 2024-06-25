"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { ProjectForm } from "@prisma/client";
import { format, toDate } from "date-fns";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const columns: ColumnDef<ProjectForm>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "projectType",
    header: "Type",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },

  {
    accessorKey: "additionalInfo",
    header: "Notes",
    cell: ({ row }) => (
      <p className="w-full text-ellipsis h-12">
        <ScrollArea className="h-12">
          {row.original.additionalInfo}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </p>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <p className="w-full text-ellipsis h-12">
        <ScrollArea className="h-12">
          {row.original.description}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </p>
    ),
  },
  {
    accessorKey: "date",
    header: "Date Created",
    cell: ({ row }) => <p>{format(toDate(row.original.date), "Pp")}</p>,
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
