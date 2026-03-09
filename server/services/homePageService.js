import path from "path";
import ExcelRepository from "../repositories/excelRepository.js";

const repo = new ExcelRepository(path.resolve("../data/homePage.xlsx"));

export const getAll = () => repo.findAll();
export const getById = (id) => repo.findById(id);
export const create = (data) => repo.create(data);
export const update = (id, data) => repo.update(id, data);
export const remove = (id) => repo.delete(id);
