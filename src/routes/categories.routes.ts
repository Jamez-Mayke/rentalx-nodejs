import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRouter = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRouter.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.status(200).send(all);
});

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

export { categoriesRouter };
