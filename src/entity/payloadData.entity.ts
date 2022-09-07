import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SensorData } from './sensorData.entity';
import { JoinColumn } from 'typeorm';

@Entity()
export class PayloadData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  sensorId: string;

  @Column('json')
  payload: any;

  @Column()
  sequenceNumber: number;

  @Column()
  timestamp: string;

  @Column()
  numHops: number;

  @Column()
  maxHops: number;

  @ManyToOne(() => SensorData, (sensor) => sensor.sensorId)
  @JoinColumn()
  sensorTag: SensorData;
}
