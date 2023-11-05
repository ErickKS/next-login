import * as ToastPrimitive from "@radix-ui/react-toast";
import { AlertOctagon } from "lucide-react";

interface ToastProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  alert: string;
}

export function Toast({ open, onOpenChange, alert }: ToastProps) {
  return (
    <div className="right-1/5 -translate-x-1/5 fixed top-0 pt-4 md:right-0">
      <ToastPrimitive.Provider swipeDirection="up" duration={4000}>
        <ToastPrimitive.Root
          open={open}
          onOpenChange={onOpenChange}
          className="px-4 outline-none data-[state=closed]:animate-hide data-[state=open]:animate-slideIn sm:-ml-6 sm:px-6 md:px-4"
        >
          <div className="grid grid-cols-[24px_1fr] items-center gap-2 w-full max-w-[450px] px-4 py-3 rounded-xl border-2 border-red-600 bg-[#EABCC4] shadow shadow-red-600/50">
            <AlertOctagon className="stroke-red-600" />

            <ToastPrimitive.Description asChild>
              <p className="text-sm font-semibold text-red-600">{alert}</p>
            </ToastPrimitive.Description>
          </div>
        </ToastPrimitive.Root>

        <ToastPrimitive.Viewport />
      </ToastPrimitive.Provider>
    </div>
  );
}
