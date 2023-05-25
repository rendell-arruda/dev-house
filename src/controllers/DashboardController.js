import House from '../models/House';

class DashboardController {
  async show(req, res) {
    const { user_id } = req.headers;
    //buscar todas as casas do usuario logado
    const houses = await House.find({ user: user_id });
    return res.json(houses);
  }
}

export default new DashboardController();
