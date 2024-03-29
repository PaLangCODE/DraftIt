import { FC } from "react";

// react-hook-form
import { UseFormWatch } from "react-hook-form";
// ui
import { PrimaryButton, SecondaryButton } from "components/ui";
// types
import { TFormValues, TIntegrationSteps } from "components/integration";

type Props = {
  handleStepChange: (value: TIntegrationSteps) => void;
  watch: UseFormWatch<TFormValues>;
};

export const GithubImportConfirm: FC<Props> = ({ handleStepChange, watch }) => (
  <div className="mt-6">
    <h4 className="font-medium">
      You are about to import issues from {watch("github").full_name}. Click on {'"'}Confirm &
      Import{'" '}
      to complete the process.
    </h4>
    <div className="mt-6 flex items-center justify-between">
      <SecondaryButton onClick={() => handleStepChange("import-users")}>Back</SecondaryButton>
      <PrimaryButton type="submit">Confirm & Import</PrimaryButton>
    </div>
  </div>
);
