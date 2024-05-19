import { ICandidat } from "./candidat.model";

export interface IJob {
    id: number,
    announce_name: string,
    company_id: number,
    candidat_id: ICandidat[],
    job_description: string,
    job_type: string,
    job_category: string,
}