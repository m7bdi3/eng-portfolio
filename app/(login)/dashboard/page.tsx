"use client";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { UserNav } from "@/components/layout/user-nav";
import { Overview } from "@/components/overview";
import { RequestsTable } from "@/components/tables/employee-tables/employee-table";
import { Card, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columns } from "@/components/tables/employee-tables/columns";

import { useProjects } from "@/lib/mails";

export default function DashboardPage() {
  const projects = useProjects((state) => state.projects);
  return (
    <div className="flex flex-col w-full space-y-4 p-4 pt-6 md:p-8 h-full">
      <div className="h-[10%] flex w-full justify-between">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-primary">
            Brand
          </h1>
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </div>
      <div className="flex h-[90%] w-full flex-col items-center justify-center gap-2">
        <Tabs defaultValue="Latest" className="w-full h-full">
          <TabsList>
            <TabsTrigger value="Latest">Latest</TabsTrigger>
            <TabsTrigger value="Projects">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="Latest" className="w-full ">
            <div className="flex flex-col gap-2 mt-4">
              <CardTitle>Latest requests</CardTitle>
              <Card className="bg-accent h-full p-4 w-full">
                <ScrollArea className="h-screen">
                  <Overview />
                </ScrollArea>
              </Card>
            </div>
          </TabsContent>
          <TabsContent
            value="Projects"
            className="w-full h-screen flex items-center justify-center"
          >
            <RequestsTable
              columns={columns as any}
              data={projects!.slice().reverse()}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
