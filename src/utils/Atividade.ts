export default class Atividade{
   private Id : number;
   private Atividade : string;
   private Checked: boolean;
   private Conteudo : string;
   constructor(public id:number, public atividade:string,public checked: boolean,public conteudo:string) {
        this.Id = id;
        this.Atividade = atividade;
        this.Checked = checked;
        this.Conteudo = conteudo;
   }
}