import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { NodeData } from './nodeData.entity';
import { PayloadData } from './payloadData.entity';

@Entity()
export class SensorData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sensorId: string;

  @Column()
  tag: string;

  @ManyToOne(() => NodeData, (node) => node.sensors)
  @JoinColumn({ name: 'node' })
  node: NodeData;

  @OneToMany(() => PayloadData, (payload) => payload.sensorTag)
  @JoinColumn()
  payload: PayloadData[];
}
