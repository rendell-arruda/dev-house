//metodos
/*index, show, store, update, destroy
index: listagem de sessoes
store: criar uma sessao
show: listar uma unica sessao
update: atualizar/editar uma sessao
destroy: deletar uma sessao
*/

import User from '../models/User';
import * as Yup from 'yup';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required()
    });

    const { email } = req.body;
    //chama o metodo create do model User e passa o email como parametro criando um novo usuario
    // let user = await User.create({ email });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }
    //verifica se o usuario ja existe
    let user = await User.findOne({ email });
    if (!user) {
      //cria um novo usuario
      user = await User.create({ email });
    }
    return res.json(user);
  }
}

export default new SessionController();
