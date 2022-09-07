import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CoreData } from './coreData.entity';
import { SensorData } from './sensorData.entity';
import { JoinColumn, OneToMany } from 'typeorm';

@Entity(`NodeData`)
export class NodeData {
  @PrimaryGeneratedColumn()
  node: number;

  @Column()
  tag: string;

  @Column({ default: '' })
  description?: string;

  @ManyToOne(() => CoreData, (core) => core.site)
  @JoinColumn({ name: 'site' })
  site: CoreData;

  @OneToMany(() => SensorData, (sensor) => sensor.node)
  @JoinColumn()
  sensors: SensorData[];
}
