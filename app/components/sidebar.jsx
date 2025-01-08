'use client'

import { HiMiniPrinter, HiMiniCog } from "react-icons/hi2";
import { GiFilmSpool } from "react-icons/gi";
import { Textarea } from "@/components/ui/textarea"
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
                {/* <hr className="w-full border-gray-300" />
                <div className="grid grid-cols-2 items-center gap-4">
                  <div>
                    <Label className="text-right">Start Gcode</Label>
                    <Textarea
                      placeholder={`; Ender 3 Custom Start G-code
G92 E0 ; Reset Extruder
G28 ; Home all axes
G1 Z2.0 F3000 ; Move Z Axis up little to prevent scratching of Heat Bed
G1 X0.1 Y20 Z0.3 F5000.0 ; Move to start position
G1 X0.1 Y200.0 Z0.3 F1500.0 E15 ; Draw the first line
G1 X0.4 Y200.0 Z0.3 F5000.0 ; Move to side a little
G1 X0.4 Y20 Z0.3 F1500.0 E30 ; Draw the second line
G92 E0 ; Reset Extruder
G1 Z2.0 F3000 ; Move Z Axis up little to prevent scratching of Heat Bed
G1 X5 Y20 Z0.3 F5000.0 ; Move over to prevent blob squish`} />
                  </div>
                  <div>
                    <Label className="text-right">End Gcode</Label>
                    <Textarea placeholder={`G91 ;Relative positioning
G1 E-2 F2700 ;Retract a bit
G1 E-2 Z0.2 F2400 ;Retract and raise Z
G1 X5 Y5 F3000 ;Wipe out
G1 Z10 ;Raise Z more
G90 ;Absolute positioning

G1 X0 Y{machine_depth} ;Present print
M106 S0 ;Turn-off fan
M104 S0 ;Turn-off hotend
M140 S0 ;Turn-off bed

M84 X Y E ;Disable all steppers but Z`} />
                  </div>
                </div> */}
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
