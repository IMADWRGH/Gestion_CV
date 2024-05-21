import { IExperience } from "./experience.model";
import { ISave } from "./save.model";
import { ISkill } from "./skill.model";
import { IUser } from "./user.model";
export interface ICandidat {
    id: number;
    profile: string,
    resume: string,
    save: ISave[],
    skills: ISkill[],
    experience: IExperience[],
    user: IUser[],
}
