import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreData } from './entity/coreData.entity';
import { NodeData } from './entity/nodeData.entity';
import { PayloadData } from './entity/payloadData.entity';
import { SensorData } from './entity/sensorData.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    TypeOrmModule.forFeature([
      CoreData,
      NodeData,
      SensorData,
      PayloadData,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
