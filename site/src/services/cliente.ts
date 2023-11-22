import BaseConnect from "./base_connect"

export interface Cliente {
  nome: string;
  email: string;
  urlAvatar: string;
  cargo: string;
}

export interface ClienteToken {

}

export interface ClienteInfo {
  
}

export default class ClienteConnection extends BaseConnect {
  static base_path = '/user';

  static async BuscarTodos() {
    const response = await this.get(`${this.base_path}/list/all`);
    return response;
  }

  static async BuscarPorId(id: number) {
    const response = await this.get(`${this.base_path}/:id`, { params: { id } });
    return response;
  }

  static async Criar(data: object) {
    const response = await this.post(`${this.base_path}/`, data);
    return response;
  }
  
  static async Login(data: object) {
    const response = await this.post(`${this.base_path}/login`, data);
    return response;
  }

  static async Atualizar(id: number, data: object) {
    const response = await this.put(`${this.base_path}/:id`, data, { params: { id } });
    return response;
  }

  static async Deletar(id: number) {
    const response = await this.delete(`${this.base_path}/:id`, { params: { id } });
    return response;
  }

  static async info(token: string) {
    const response = await this.get(`${this.base_path}/info`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response;
  }

}