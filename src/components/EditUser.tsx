"use client"

import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"
import { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "./ui/sheet"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import * as z from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

const formSchema = z.object({
    username: z
        .string()
        .min(5, "Username must be at least 5 characters.")
        .max(32, "Username must be at most 32 characters."),
    email: z
        .string()
        .email({ message: "Invalid email address!" }),
    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 characters." })
        .max(16, { message: "Phone number must be at most 16 characters." })
        .regex(/^\+\d{1,3} \d{3} \d{3} \d{3}$/, { message: "Phone number must be in the format +254 7XX XXX XXX" }),
    location: z
        .string()
        .min(2, "Location must be at least 2 characters.")
        .max(32, "Location must be at most 32 characters."),
    role: z
        .enum(["admin", "user"], { message: "Role must be either Admin or User." }),
})

const EditUser = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "john.doe",
            email: "john.doe@gmail.com",
            phone: "+1 234 5678",
            location: "New York, NY",
            role: "admin",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast("You submitted the following values:", {
            description: (
                <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        })
    }
    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="mb-4">Edit User</SheetTitle>
                <SheetDescription>
                    Edit the details of the user and click "Save changes" to update the information. You can also click "Close" to discard any changes and exit the edit mode.
                </SheetDescription>
            </SheetHeader>
            <form id="form-rhf-demo">
                <FieldGroup>
                    <Controller
                        name="username"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-rhf-demo-title">
                                    Username
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-title"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="username"
                                    autoComplete="off"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-rhf-demo-description">
                                    Email
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-title"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="email"
                                    autoComplete="off"
                                />
                                <FieldDescription>
                                    Input the user's email address.
                                </FieldDescription>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Controller
                        name="phone"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-rhf-demo-description">
                                    Phone
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-title"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="phone"
                                    autoComplete="off"
                                />
                                <FieldDescription>
                                    Input the phone number.
                                </FieldDescription>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Controller
                        name="role"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-rhf-demo-description">
                                    Role
                                </FieldLabel>
                                <Select>
                                    <SelectTrigger className="w-full max-w-48">
                                        <SelectValue placeholder="Select a role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Roles</SelectLabel>
                                            <SelectItem value="admin">Admin</SelectItem>
                                            <SelectItem value="user">User</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FieldDescription>
                                    Input the user's role.
                                </FieldDescription>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Controller
                        name="location"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-rhf-demo-description">
                                    Location
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-title"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="location"
                                    autoComplete="off"
                                />
                                <FieldDescription>
                                    Input the user's location.
                                </FieldDescription>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </FieldGroup>
            </form>
            <SheetFooter>
                <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                    Save changes
                </Button>
                <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    )
}

export default EditUser