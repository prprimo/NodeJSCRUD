import {Table, Model, Column, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt, Length, IsDate, IsInt, DataType, Is, Validate} from "sequelize-typescript";
import {Usuario as UserLang} from '../Language/Usuario';

@Table({
  timestamps: true,  
  validate: {
    hasNomeAndEMail(this: Usuario): void {
      if (this.Name == 'primo1' && this.EMail == 'primo1@nold.com' ) 
      {
        throw new Error('Require either both Nome and EMail or neither');
      }
    }
  }
})
export class Usuario extends Model<Usuario> {

  @IsInt
  @PrimaryKey
  @AutoIncrement
  @Column
  UsuarioID: number;

  @Length({min: 3, max: 15, msg: UserLang.Nome})
  @Is(function CheckName(value: string): void {
    try 
    {
      if (value.toUpperCase() == 'PRIMO') {
        throw new Error('identico');
      }
    } 
    catch (err)
    {
      throw new Error(`"${value}" ja esta cadastrado. ${err}`);
    };
  })
  @Column
  Name: string;

  @Validate({ 
    isEmail: { msg: UserLang.EMail}
  })
  @Column({
    type: DataType.STRING(255),
    unique: true,
    allowNull: false,
    defaultValue: '',
    comment: 'EMail do Usuario'
  })
  EMail: string;
  
  @IsDate
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
