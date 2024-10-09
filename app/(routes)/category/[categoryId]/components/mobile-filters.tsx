"use client";

import React, { useState } from "react";
import Button from "../../../../../components/ui/button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Color, Size } from "@/types";
import IconButton from "../../../../../components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size;
  colors: Color;
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* bg */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* close btn */}
            <div className="flex justify-end items-center px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>

            {/* render filters */}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
