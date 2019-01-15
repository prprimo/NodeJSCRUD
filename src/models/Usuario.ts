import {Model, Column, Table, CreatedAt, UpdatedAt} from "sequelize-typescript";

@Table
export class Usuario extends Model<Usuario> {

  @Column
  firstName: string;

  @Column
  lastName: string;
  
  @Column
  birthday: Date;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  static scope(...args: any[]): typeof Usuario {
    args[0] = args[0] || 'defaultScope';
    return super.scope.call(this, ...args);
  }
}
