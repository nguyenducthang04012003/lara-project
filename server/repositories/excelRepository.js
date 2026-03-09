import XLSX from "xlsx";
import fs from "fs";

export default class ExcelRepository {
  constructor(filePath) {
    this.filePath = filePath;
  }

  readFile() {
    if (!fs.existsSync(this.filePath)) {
      return [];
    }


    console.log("Excel path:", this.filePath);
    const workbook = XLSX.readFile(this.filePath);

    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    return XLSX.utils.sheet_to_json(sheet);
  }

  writeFile(data) {
    const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, this.filePath);
  }

  findAll() {
    return this.readFile();
  }

  findById(id) {
    const data = this.readFile();

    return data.find((item) => item.id == id);
  }

  create(item) {
    const data = this.readFile();

    const newItem = {
      id: Date.now(),
      ...item,
    };

    data.push(newItem);

    this.writeFile(data);

    return newItem;
  }

  update(id, newData) {
    const data = this.readFile();

    const index = data.findIndex((item) => item.id == id);

    if (index === -1) {
      return null;
    }

    data[index] = {
      ...data[index],
      ...newData,
    };

    this.writeFile(data);

    return data[index];
  }

  delete(id) {
    const data = this.readFile();

    const newData = data.filter((item) => item.id != id);

    this.writeFile(newData);

    return true;
  }
}
