import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    timeSlot: string;

    @Column()
    task: string;

    @Column()
    isFinished: boolean;

    @Column()
    created: Date;

    constructor(timeSlot: string, task: string) {
        this.timeSlot = timeSlot;
        this.task = task;
        this.isFinished = false;
        this.created = new Date();
    }
}
