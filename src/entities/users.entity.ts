import { BaseEntity, Column, Entity, PrimaryColumn, Timestamp } from "typeorm";

@Entity('users')

export class UserEntity extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string
    email: string
    email_verified_at: Timestamp
    password: string
    remember_token: string
    created_at: Timestamp
    updated_at: Timestamp
}