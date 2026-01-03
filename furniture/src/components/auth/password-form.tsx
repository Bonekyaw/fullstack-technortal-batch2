import { BedDouble } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function PasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <BedDouble className="size-6" />
              </div>
              <span className="sr-only">Furniture Shop</span>
            </a>
            <h1 className="text-xl font-bold">Confirm Password</h1>
            <FieldDescription>
              The passwords must be 8 digits long.
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" type="password" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="password2">Confirm Password</FieldLabel>
            <Input id="password2" type="password" required />
          </Field>

          <Field>
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
