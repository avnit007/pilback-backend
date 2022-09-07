import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CoreData } from './entity/coreData.entity';
import { NodeData } from './entity/nodeData.entity';
import { PayloadData } from './entity/payloadData.entity';
import { SensorData } from './entity/sensorData.entity';

@Controller('pilback')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/sites')
  async getCoreData() {
    return await this.appService.getCoreData();
  }

  @Post('/site')
  async addSite(@Body() site: CoreData) {
    return await this.appService.addSite(site);
  }

  @Delete('/site/:id')
  async deleteSite(@Param('id') id: string) {
    return await this.appService.deleteSite(id);
  }

  @Get('/:site/nodes')
  async getNodeDataBySiteId(@Param('site') site: string) {
    return await this.appService.getNodeDataBySiteId(site);
  }

  @Post('/node')
  async addNode(@Body() node: NodeData) {
    return await this.appService.addNode(node);
  }

  @Delete('/node/:id')
  async deleteNode(@Param('id') id: string) {
    return await this.appService.deleteNode(id);
  }

  @Get('/:node/sensors')
  async getSensorDataByNodeId(@Param('node') node: number) {
    return await this.appService.getSensorDataByNodeId(node);
  }

  @Post('/sensor')
  async addSensor(@Body() sensor: SensorData) {
    return await this.appService.addSensor(sensor);
  }

  @Delete('/sensor/:id')
  async deleteSensor(@Param('id') id: string) {
    return await this.appService.deleteSensor(id);
  }

  @Get('/:sensor/payloads')
  async getPayloadsBySensorId(@Param('sensor') sensor: string) {
    return await this.appService.getPayloadsBySensorId(sensor);
  }

  @Post('/payload')
  async addPayload(@Body() payload: PayloadData) {
    return await this.appService.addPayload(payload);
  }

  @Delete('/payload/:id')
  async deletePayload(@Param('id') id: string) {
    return await this.appService.deletePayload(id);
  }
}
