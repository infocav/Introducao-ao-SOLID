import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.header("user_id");
    try {
      const allUsers = this.listAllUsersUseCase.execute({ user_id });

      return response.send(allUsers);
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
  }
}

export { ListAllUsersController };
