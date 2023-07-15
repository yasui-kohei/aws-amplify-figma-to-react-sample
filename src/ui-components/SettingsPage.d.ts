/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NavBarHeaderProps } from "./NavBarHeader";
import { SideBarProps } from "./SideBar";
import { ButtonProps, DividerProps, FlexProps, SwitchFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SettingsPageOverridesProps = {
    SettingsPage?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeader?: NavBarHeaderProps;
    main?: PrimitiveOverrideProps<FlexProps>;
    SideBar?: SideBarProps;
    "Frame 4373"?: PrimitiveOverrideProps<FlexProps>;
    header39163164?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    "This info is displayed on your public profile"?: PrimitiveOverrideProps<TextProps>;
    Divider39163114?: PrimitiveOverrideProps<DividerProps>;
    DataRow39163118?: PrimitiveOverrideProps<FlexProps>;
    "Full name"?: PrimitiveOverrideProps<TextProps>;
    "Wesley Peck"?: PrimitiveOverrideProps<TextProps>;
    Button39163119?: PrimitiveOverrideProps<ButtonProps>;
    Divider39163158?: PrimitiveOverrideProps<DividerProps>;
    DataRow39163137?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Product Manager"?: PrimitiveOverrideProps<TextProps>;
    Button39163140?: PrimitiveOverrideProps<ButtonProps>;
    Divider39163160?: PrimitiveOverrideProps<DividerProps>;
    DataRow39163144?: PrimitiveOverrideProps<FlexProps>;
    Company?: PrimitiveOverrideProps<TextProps>;
    AWS?: PrimitiveOverrideProps<TextProps>;
    Button39163147?: PrimitiveOverrideProps<ButtonProps>;
    Divider39163162?: PrimitiveOverrideProps<DividerProps>;
    DataRow39163151?: PrimitiveOverrideProps<FlexProps>;
    "Email address"?: PrimitiveOverrideProps<TextProps>;
    "wpeck@aws.com"?: PrimitiveOverrideProps<TextProps>;
    Button39163154?: PrimitiveOverrideProps<ButtonProps>;
    Divider39163168?: PrimitiveOverrideProps<DividerProps>;
    header39213051?: PrimitiveOverrideProps<FlexProps>;
    Sync?: PrimitiveOverrideProps<TextProps>;
    "How you want to sync data across platforms"?: PrimitiveOverrideProps<TextProps>;
    Divider39213067?: PrimitiveOverrideProps<DividerProps>;
    DataRow39213054?: PrimitiveOverrideProps<FlexProps>;
    "Automatic syncing"?: PrimitiveOverrideProps<TextProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    SwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
    Divider39213049?: PrimitiveOverrideProps<DividerProps>;
    "Delete Account"?: PrimitiveOverrideProps<FlexProps>;
    header39163165?: PrimitiveOverrideProps<FlexProps>;
    "Delete account"?: PrimitiveOverrideProps<TextProps>;
    "Not happy with the product? Delete your account and you'll never hear from us again."?: PrimitiveOverrideProps<TextProps>;
    Button39203049?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SettingsPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SettingsPageOverridesProps | undefined | null;
}>;
export default function SettingsPage(props: SettingsPageProps): React.ReactElement;
