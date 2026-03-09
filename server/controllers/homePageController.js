import * as pageService from "../services/homePageService.js";

export const getAll = (req, res) => {
  const data = pageService.getAll();

  res.json(data);
};

export const create = (req, res) => {
  const item = pageService.create(req.body);

  res.json(item);
};

export const update = (req, res) => {
  const item = pageService.update(req.params.id, req.body);

  res.json(item);
};

export const remove = (req, res) => {
  pageService.remove(req.params.id);

  res.json({ message: "deleted" });
};
