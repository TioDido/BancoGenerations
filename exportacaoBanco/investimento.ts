export {investimento}
import { Banco } from "./banco"

class investimento extends Banco {

}

//poupanca,corrente,saldo (poupanca + corrente), investimento
var foi = new Banco(0,0,200,0);
foi.showInvestiment();
