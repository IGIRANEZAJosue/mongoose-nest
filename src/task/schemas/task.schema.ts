import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  description?: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
