'use client'

import { HiMiniPrinter, HiMiniCog } from "react-icons/hi2";
import { GiFilmSpool } from "react-icons/gi";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PrinterSelect from './printer-select';
import NozzleSelect from './nozzle-select';
import MaterialSelect from './material-select';

export default function DialogDemo() {
  return (
    <div className="absolute z-10 right-0 top-[50%] transform -translate-y-1/2">
      <div className="bg-gray-100 text-white rounded-lg px-1 py-1 m-2 shadow-sm">
        <div className="flex flex-col justify-center items-center space-y-0">
          <Dialog>
            <DialogTrigger asChild>
              <button className=" hover:bg-gray-300 text-gray-600 py-2 px-2 rounded-lg">
                <HiMiniCog className="text-2xl" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right flex flex-row items-center space-x-2"><p><span className=" text-2xl">🖨️</span><span>Printer</span></p></Label>
                  <div className="col-span-3">
                    <PrinterSelect />
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">Username</Label>
                  <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <hr className="w-3/4 border-gray-300" />
          <Dialog>
            <DialogTrigger asChild>
              <button className=" hover:bg-gray-300  text-gray-600  py-2 px-2 rounded-lg">
                <HiMiniPrinter className="text-2xl" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Printer Settings</DialogTitle>
                <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right flex flex-row items-center space-x-2">
                    <span className=" text-4xl">🖨️</span>
                    <span>Printer</span>
                  </Label>
                  <div className="col-span-3">
                    <PrinterSelect />
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right flex flex-row items-center space-x-2">
                    <span className=" text-4xl">📐</span>
                    <span>Nozzle</span>
                  </Label>
                  <div className="col-span-3">
                    <NozzleSelect />
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right flex flex-row items-center space-x-2">
                    <span className=" text-4xl">🧵</span>
                    <span>Filament</span>
                  </Label>
                  <div className="col-span-3">
                    <MaterialSelect />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <hr className="w-3/4 border-gray-300" />
          <Dialog>
            <DialogTrigger asChild>
              <button className=" hover:bg-gray-300  text-gray-600  py-2 px-2 rounded-lg">
                <GiFilmSpool className="text-2xl" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle><span className=" text-xl">🧵</span>Filament Settings</DialogTitle>
                <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">Material</Label>
                  <div className="col-span-3">
                    <MaterialSelect />
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">Temperature</Label>
                  <Input id="username" defaultValue={200} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">Color</Label>
                  <Input id="username" defaultValue={200} className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
