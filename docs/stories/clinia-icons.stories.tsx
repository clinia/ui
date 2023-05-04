import { AccessibilityIcon } from "@clinia-ui/icons/AccessibilityIcon";
import { AddIcon } from "@clinia-ui/icons/AddIcon";
import { AddImageIcon } from "@clinia-ui/icons/AddImageIcon";
import { AddSuggestionIcon } from "@clinia-ui/icons/AddSuggestionIcon";
import { AdminIcon } from "@clinia-ui/icons/AdminIcon";
import { AgeFocusIcon } from "@clinia-ui/icons/AgeFocusIcon";
import { AnalyticsIcon } from "@clinia-ui/icons/AnalyticsIcon";
import { AnalyzeModuleIcon } from "@clinia-ui/icons/AnalyzeModuleIcon";
import { AreaDownIcon } from "@clinia-ui/icons/AreaDownIcon";
import { AreaIcon } from "@clinia-ui/icons/AreaIcon";
import { AreaLeftIcon } from "@clinia-ui/icons/AreaLeftIcon";
import { AreaRightIcon } from "@clinia-ui/icons/AreaRightIcon";
import { ArrowDownIcon } from "@clinia-ui/icons/ArrowDownIcon";
import { ArrowLeftCircleIcon } from "@clinia-ui/icons/ArrowLeftCircleIcon";
import { ArrowRightCircleIcon } from "@clinia-ui/icons/ArrowRightCircleIcon";
import { ArrowUpIcon } from "@clinia-ui/icons/ArrowUpIcon";
import { BookingIcon } from "@clinia-ui/icons/BookingIcon";
import { BookmarkIcon } from "@clinia-ui/icons/BookmarkIcon";
import { BrokenImageIcon } from "@clinia-ui/icons/BrokenImageIcon";
import { BulletPointsIcon } from "@clinia-ui/icons/BulletPointsIcon";
import { ByNameIcon } from "@clinia-ui/icons/ByNameIcon";
import { ByTypeIcon } from "@clinia-ui/icons/ByTypeIcon";
import { CalendarIcon } from "@clinia-ui/icons/CalendarIcon";
import { CaseToReferIcon } from "@clinia-ui/icons/CaseToReferIcon";
import { CheckboxIcon } from "@clinia-ui/icons/CheckboxIcon";
import { CheckmarkIcon } from "@clinia-ui/icons/CheckmarkIcon";
import { ClearIcon } from "@clinia-ui/icons/ClearIcon";
import { CliniaIcon } from "@clinia-ui/icons/CliniaIcon";
import { ClinicIcon } from "@clinia-ui/icons/ClinicIcon";
import { ClockIcon } from "@clinia-ui/icons/ClockIcon";
import { CloseIcon } from "@clinia-ui/icons/CloseIcon";
import { CopyIcon } from "@clinia-ui/icons/CopyIcon";
import { CorrespondanceIcon } from "@clinia-ui/icons/CorrespondanceIcon";
import { CustomFieldIcon } from "@clinia-ui/icons/CustomFieldIcon";
import { CustomFieldsDisabledIcon } from "@clinia-ui/icons/CustomFieldsDisabledIcon";
import { CustomFieldsEnabledIcon } from "@clinia-ui/icons/CustomFieldsEnabledIcon";
import { DataIcon } from "@clinia-ui/icons/DataIcon";
import { DateTimeIcon } from "@clinia-ui/icons/DateTimeIcon";
import { DeactivateIcon } from "@clinia-ui/icons/DeactivateIcon";
import { DegreeIcon } from "@clinia-ui/icons/DegreeIcon";
import { DeleteIcon } from "@clinia-ui/icons/DeleteIcon";
import { DepartmentIcon } from "@clinia-ui/icons/DepartmentIcon";
import { DeselectIcon } from "@clinia-ui/icons/DeselectIcon";
import { DetailsIcon } from "@clinia-ui/icons/DetailsIcon";
import { DevConsoleIcon } from "@clinia-ui/icons/DevConsoleIcon";
import { DirectionsIcon } from "@clinia-ui/icons/DirectionsIcon";
import { DirectoryIcon } from "@clinia-ui/icons/DirectoryIcon";
import { DoctorIcon } from "@clinia-ui/icons/DoctorIcon";
import { DoubleLeftArrowIcon } from "@clinia-ui/icons/DoubleLeftArrowIcon";
import { DoubleRightArrowIcon } from "@clinia-ui/icons/DoubleRightArrowIcon";
import { DownloadIcon } from "@clinia-ui/icons/DownloadIcon";
import { DragIcon } from "@clinia-ui/icons/DragIcon";
import { DriveThroughIcon } from "@clinia-ui/icons/DriveThroughIcon";
import { DropdownIcon } from "@clinia-ui/icons/DropdownIcon";
import { EditIcon } from "@clinia-ui/icons/EditIcon";
import { ElderlyIcon } from "@clinia-ui/icons/ElderlyIcon";
import { EllipseIcon } from "@clinia-ui/icons/EllipseIcon";
import { ExportIcon } from "@clinia-ui/icons/ExportIcon";
import { ExternalLinkIcon } from "@clinia-ui/icons/ExternalLinkIcon";
import {
  Button,
  Card,
  CardBody,
  Center,
  Stack,
  Text,
  Tooltip,
} from "@clinia-ui/react";
import { Meta } from "@storybook/react";
import { useState } from "react";

const a: Meta = {
  decorators: [(story) => <>{story.toString()}</>],
};

type IconStory = () => [string, JSX.Element];

const IconDecorator = ({ story }: { story: IconStory }) => {
  const [name, component] = story();
  const [open, setOpen] = useState(false);

  return (
    <Tooltip isOpen={open} label={`'${name}' copied to clipboard`}>
      <Button
        height="fit-content"
        variant="unstyled"
        onClick={() => {
          navigator.clipboard.writeText(name);
          setOpen(true);
          setTimeout(() => setOpen(false), 2000);
        }}
      >
        <Card align="center" width={170}>
          <CardBody>
            <Stack>
              <Center>{component}</Center>
              <Text fontSize="xs">{name}</Text>
            </Stack>
          </CardBody>
        </Card>
      </Button>
    </Tooltip>
  );
};

export default {
  title: "Icons",
  decorators: [(story: IconStory) => <IconDecorator story={story} />],
};

const props = {
  color: "primary.main",
  boxSize: "2em",
};

export const AccessibilityIcon_ = () => [
  "AccessibilityIcon",
  <AccessibilityIcon {...props} />,
];

export const AddIcon_ = () => ["AddIcon", <AddIcon {...props} />];

export const AddImageIcon_ = () => [
  "AddImageIcon",
  <AddImageIcon {...props} />,
];

export const AddSuggestionIcon_ = () => [
  "AddSuggestionIcon",
  <AddSuggestionIcon {...props} />,
];

export const AdminIcon_ = () => ["AdminIcon", <AdminIcon {...props} />];
export const AgeFocusIcon_ = () => [
  "AgeFocusIcon",
  <AgeFocusIcon {...props} />,
];

export const AnalyticsIcon_ = () => [
  "AnalyticsIcon",
  <AnalyticsIcon {...props} />,
];

export const AnalyzeModuleIcon_ = () => [
  "AnalyzeModuleIcon",
  <AnalyzeModuleIcon {...props} />,
];

export const AreaDownIcon_ = () => [
  "AreaDownIcon",
  <AreaDownIcon {...props} />,
];

export const AreaIcon_ = () => ["AreaIcon", <AreaIcon {...props} />];

export const AreaLeftIcon_ = () => [
  "AreaLeftIcon",
  <AreaLeftIcon {...props} />,
];

export const AreaRightIcon_ = () => [
  "AreaRightIcon",
  <AreaRightIcon {...props} />,
];

export const ArrowDownIcon_ = () => [
  "ArrowDownIcon",
  <ArrowDownIcon {...props} />,
];

export const ArrowLeftCircleIcon_ = () => [
  "ArrowLeftCircleIcon",
  <ArrowLeftCircleIcon {...props} />,
];

export const ArrowRightCircleIcon_ = () => [
  "ArrowRightCircleIcon",
  <ArrowRightCircleIcon {...props} />,
];

export const ArrowUpIcon_ = () => ["ArrowUpIcon", <ArrowUpIcon {...props} />];

export const BookingIcon_ = () => ["BookingIcon", <BookingIcon {...props} />];

export const BookmarkIcon_ = () => [
  "BookmarkIcon",
  <BookmarkIcon {...props} />,
];

export const BrokenImageIcon_ = () => [
  "BrokenImageIcon",
  <BrokenImageIcon {...props} />,
];

export const BulletPointsIcon_ = () => [
  "BulletPointsIcon",
  <BulletPointsIcon {...props} />,
];

export const ByNameIcon_ = () => ["ByNameIcon", <ByNameIcon {...props} />];

export const ByTypeIcon_ = () => ["ByTypeIcon", <ByTypeIcon {...props} />];

export const CalendarIcon_ = () => [
  "CalendarIcon",
  <CalendarIcon {...props} />,
];

export const CaseToReferIcon_ = () => [
  "CaseToReferIcon",
  <CaseToReferIcon {...props} />,
];

export const CheckboxIcon_ = () => [
  "CheckboxIcon",
  <CheckboxIcon {...props} />,
];

export const CheckmarkIcon_ = () => [
  "CheckmarkIcon",
  <CheckmarkIcon {...props} />,
];

export const ClearIcon_ = () => ["ClearIcon", <ClearIcon {...props} />];

export const CliniaIcon_ = () => ["CliniaIcon", <CliniaIcon {...props} />];

export const ClinicIcon_ = () => ["ClinicIcon", <ClinicIcon {...props} />];

export const ClockIcon_ = () => ["ClockIcon", <ClockIcon {...props} />];

export const CloseIcon_ = () => ["CloseIcon", <CloseIcon {...props} />];

export const CopyIcon_ = () => ["CopyIcon", <CopyIcon {...props} />];

export const CorrespondanceIcon_ = () => [
  "CorrespondanceIcon",
  <CorrespondanceIcon {...props} />,
];

export const CustomFieldIcon_ = () => [
  "CustomFieldIcon",
  <CustomFieldIcon {...props} />,
];

export const CustomFieldsDisabledIcon_ = () => [
  "CustomFieldsDisabledIcon",
  <CustomFieldsDisabledIcon {...props} />,
];

export const CustomFieldsEnabledIcon_ = () => [
  "CustomFieldsEnabledIcon",
  <CustomFieldsEnabledIcon {...props} />,
];

export const DataIcon_ = () => ["DataIcon", <DataIcon {...props} />];

export const DateTimeIcon_ = () => [
  "DateTimeIcon",
  <DateTimeIcon {...props} />,
];

export const DeactivateIcon_ = () => [
  "DeactivateIcon",
  <DeactivateIcon {...props} />,
];

export const DegreeIcon_ = () => ["DegreeIcon", <DegreeIcon {...props} />];

export const DeleteIcon_ = () => ["DeleteIcon", <DeleteIcon {...props} />];

export const DepartmentIcon_ = () => [
  "DepartmentIcon",
  <DepartmentIcon {...props} />,
];

export const DeselectIcon_ = () => [
  "DeselectIcon",
  <DeselectIcon {...props} />,
];

export const DetailsIcon_ = () => ["DetailsIcon", <DetailsIcon {...props} />];

export const DevConsoleIcon_ = () => [
  "DevConsoleIcon",
  <DevConsoleIcon {...props} />,
];

export const DirectionsIcon_ = () => [
  "DirectionsIcon",
  <DirectionsIcon {...props} />,
];

export const DirectoryIcon_ = () => [
  "DirectoryIcon",
  <DirectoryIcon {...props} />,
];

export const DoctorIcon_ = () => ["DoctorIcon", <DoctorIcon {...props} />];

export const DoubleLeftArrowIcon_ = () => [
  "DoubleLeftArrowIcon",
  <DoubleLeftArrowIcon {...props} />,
];

export const DoubleRightArrowIcon_ = () => [
  "DoubleRightArrowIcon",
  <DoubleRightArrowIcon {...props} />,
];

export const DownloadIcon_ = () => [
  "DownloadIcon",
  <DownloadIcon {...props} />,
];

export const DragIcon_ = () => ["DragIcon", <DragIcon {...props} />];

export const DriveThroughIcon_ = () => [
  "DriveThroughIcon",
  <DriveThroughIcon {...props} />,
];

export const DropdownIcon_ = () => [
  "DropdownIcon",
  <DropdownIcon {...props} />,
];

export const EditIcon_ = () => ["EditIcon", <EditIcon {...props} />];

export const ElderlyIcon_ = () => ["ElderlyIcon", <ElderlyIcon {...props} />];

export const EllipseIcon_ = () => ["EllipseIcon", <EllipseIcon {...props} />];

export const ExportIcon_ = () => ["ExportIcon", <ExportIcon {...props} />];

export const ExternalLinkIcon_ = () => [
  "ExternalLinkIcon",
  <ExternalLinkIcon {...props} />,
];
