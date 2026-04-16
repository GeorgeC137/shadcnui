"use client"

import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'
import { FieldLabel } from "@/components/ui/field"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar'

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = React.useState(false)

    return (
        <div className=''>
            <h1 className='font-medium mb-6 text-lg'>To do List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className='w-full'>
                        <CalendarIcon />
                        {date ? format(date, "PPP") : "Select date"}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date)
                            setOpen(false)
                        }}
                    />
                </PopoverContent>
            </Popover>
            {/* LIST */}
            <ScrollArea className="max-h-100 mt-4 overflow-y-auto">
                <div className='flex flex-col gap-4'>
                    {/* LIST ITEM */}
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox checked id="terms-checkbox-basic" name="terms-checkbox-basic" className='text-sm text-muted-foreground' />
                            <FieldLabel htmlFor="terms-checkbox-basic">
                                Accept terms and conditions
                            </FieldLabel>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" className='text-sm text-muted-foreground' />
                            <FieldLabel htmlFor="terms-checkbox-basic">
                                Accept terms and conditions
                            </FieldLabel>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox checked id="terms-checkbox-basic" name="terms-checkbox-basic" className='text-sm text-muted-foreground' />
                            <FieldLabel htmlFor="terms-checkbox-basic">
                                Accept terms and conditions
                            </FieldLabel>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" className='text-sm text-muted-foreground' />
                            <FieldLabel htmlFor="terms-checkbox-basic">
                                Accept terms and conditions
                            </FieldLabel>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" className='text-sm text-muted-foreground' />
                            <FieldLabel htmlFor="terms-checkbox-basic">
                                Accept terms and conditions
                            </FieldLabel>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox checked id="terms-checkbox-basic" name="terms-checkbox-basic" className='text-sm text-muted-foreground' />
                            <FieldLabel htmlFor="terms-checkbox-basic">
                                Accept terms and conditions
                            </FieldLabel>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox checked id="terms-checkbox-basic" name="terms-checkbox-basic" className='text-sm text-muted-foreground' />
                            <FieldLabel htmlFor="terms-checkbox-basic">
                                Accept terms and conditions
                            </FieldLabel>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" className='text-sm text-muted-foreground' />
                            <FieldLabel htmlFor="terms-checkbox-basic">
                                Accept terms and conditions
                            </FieldLabel>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox checked id="terms-checkbox-basic" name="terms-checkbox-basic" className='text-sm text-muted-foreground' />
                            <FieldLabel htmlFor="terms-checkbox-basic">
                                Accept terms and conditions
                            </FieldLabel>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" className='text-sm text-muted-foreground' />
                            <FieldLabel htmlFor="terms-checkbox-basic">
                                Accept terms and conditions
                            </FieldLabel>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    )
}

export default TodoList