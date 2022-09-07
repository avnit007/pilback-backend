import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CoreData } from './entity/coreData.entity';
import { NodeData } from './entity/nodeData.entity';
import { PayloadData } from './entity/payloadData.entity';
import { SensorData } from './entity/sensorData.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(CoreData) private readonly Core: Repository<CoreData>,
    @InjectRepository(NodeData) private readonly Node: Repository<NodeData>,
    @InjectRepository(SensorData) private readonly Sensor: Repository<SensorData>,
    @InjectRepository(PayloadData) private readonly Payload: Repository<PayloadData>,
  ) {}

  async getCoreData() {
    return await this.Core.find();
  }

  async addSite(site: CoreData) {
    return await this.Core.save(site);
  }

  async deleteSite(uuid: string) {
    return await this.Core.delete(uuid);
  }

  async getNodeDataBySiteId(site: string) {
    return await this.Node.find({
      relations: ['site'],
      where: {
        site: {
          uuid: site,
        },
      },
    });
  }

  async addNode(node) {
    const siteData = await this.Core.find({ where: { uuid: node.site }});
    const data: NodeData = {
      ...node,
      site: siteData[0],
    };
    return await this.Node.save(data);
  }

  async deleteNode(node: string) {
    return await this.Node.delete(node);
  }

  async getSensorDataByNodeId(node) {
    return await this.Sensor.find({
      where: {
        node: node,
      },
    });
  }

  async addSensor(sensor) {
    const nodeData = await this.Node.find({
      where: { node: sensor.node },
    });
    const data: SensorData = {
      ...sensor,
      node: nodeData[0],
    };
    return await this.Sensor.save(data);
  }

  async deleteSensor(id: string) {
    return await this.Sensor.delete(id);
  }

  async getPayloadsBySensorId(sensor: string) {
    return await this.Payload.find({
      where: { sensorId: sensor }
    });
  }

  async addPayload(payload) {
    const sensorData = await this.Payload.find({
      where: { sensorId: payload.sensorId },
    });
    const data: PayloadData = {
      ...payload,
      sensorTag: sensorData[0],
    };
    return await this.Payload.save(data);
  }

  async deletePayload(id: string) {
    return await this.Payload.delete(id);
  }
}
