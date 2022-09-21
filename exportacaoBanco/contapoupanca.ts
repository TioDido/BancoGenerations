export {contapoupanca}
import { Banco } from "./banco"

class contapoupanca extends Banco {

}
//poupanca,corrente,saldo (poupanca + corrente), investimento
var tentei = new Banco(0, 100, 0, 0);
tentei.showSavings();