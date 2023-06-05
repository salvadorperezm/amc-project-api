import { Column, Model, Table } from 'sequelize-typescript';

@Table({ paranoid: true })
export class Request extends Model {
  @Column
  valueOne: string;

  @Column
  valueTwo: string;

  @Column
  valueThree: string;
}
