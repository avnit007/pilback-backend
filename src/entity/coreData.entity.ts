import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NodeData } from './nodeData.entity';

@Entity('CoreData')
export class CoreData extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ default: '' })
  version: string;

  @Column({ default: '' })
  site: string;

  @OneToMany(() => NodeData, (node) => node.site, { cascade: true })
  nodes: NodeData[];
}
