import { IExperience } from "./experience.model";
import { ISave } from "./save.model";
import { ISkill } from "./skill.model";
import { IUer } from "./user.model";
export interface ICandidat {
    id: number;
    profile: string,
    phone: string,
    address: string,
    resume: string,
    profile_picture: string,
    save: ISave[],
    skills: ISkill[],
    experience: IExperience[],
    user: IUer[],
}