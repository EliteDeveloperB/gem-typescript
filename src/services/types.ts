export enum SelectedPage {
    HOME= "home",
    BENEFITS= "benefits",
    OURCLASSES= "ourclasses",
    CONTACTUS= "contactus",

} 
export type BenefitType = {
    icon:React.JSX.Element,
    title:string,
    description:string,
}
export type ClassType = {
     title:string,
    description:string,
    image:string,
}