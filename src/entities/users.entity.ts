import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('users')

export class UserEntity extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    company_code: string
    name: string
    date_of_birth: string
    avatar: string
    phone_number: string
    role_id: string
    email: string
    password: string
    occupation_id: string
    blood: string
    gender: string
    deletion_reason_id: string
    mtg_link: string
    change_role_at: string
    edit_orgchart_time: string
    club: string
    favorite: string
    senryu: string
    motto: string
    dream: string
    introduction: string
    recent_status_id: string
    personality_image: string
    contract_date: string
    authen_secretKey: string
    reset_pass_secret_key: string
    password_last_change: string
    authen_status: string
    operation_status_comment: string
    recruitment_status_id: string
    created_by: string
    updated_by: string
    deleted_by: string
    created_at: string
    updated_at: string
    deleted_at: string
}