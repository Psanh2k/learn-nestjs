import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('users')

export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column({ unique: true })
    email?: string;

    @Column()
    password?: string;

    @Column({ nullable: true})
    google_id?: string;

    @Column()
    is_admin?: number;

    @Column()
    is_super?: number;

    @Column({ nullable: true})
    remember_token?: string;
}