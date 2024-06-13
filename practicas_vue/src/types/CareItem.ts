export enum CareInfo {
    redBar = "red_bar",
    blueBar = "blue_bar",
    womanPic = "Woman picture",
    manPic = "Man picture",
    graphicD = "Graphic Designer",
    dc = "Doctor",
    comercial = "Comercial",
    ceo = "CEO NY Memorial",
    nurse = "Nurse",
}

export type CareItem = {
    className: string
    imgSrc: string
    altText: string
    name: string
    profession: string
}

