export enum NavItemInfo {
  findText = "FIND", 
  circleText =  "MY CIRCLE OF CARE",
  circleDivClass = "bottom_bar",
  pendingText = "PENDING",
  pendingDivClass = "ellipse_pending",
  pendingId = "pendingItem"

}

export type NavItem = {
  text: string
  divClassName?: string
  id?: string
};

