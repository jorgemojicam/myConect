export class Conect {
  id: number;
  description = '';
  url = '';
  type:number;

  constructor(values: object = { }) {
    Object.assign(this, values);
  } 
}
