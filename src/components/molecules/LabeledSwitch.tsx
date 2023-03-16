import React from "react";

import Label from "@/components/atoms/Label";
import Switch from "@/components/atoms/Switch";

type Props = {
  labelValue: string;
  onClick: (isChecked: boolean) => void;
  defaultChecked?: boolean;
};

export default function LabeledSwitch({
  labelValue,
  onClick,
  defaultChecked = false,
}: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="relative inline-flex items-center">
      <Switch onClick={onClick} defaultChecked={defaultChecked} />
      <Label value={labelValue} />
    </label>
  );
}
