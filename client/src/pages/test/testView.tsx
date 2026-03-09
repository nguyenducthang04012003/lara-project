import { Table, Button, Modal, Form, Input, InputNumber, Space } from "antd";
import { useState } from "react";
import { environment } from "../../services/environment";
import { language } from "../../i18n/language";

type Product = {
  id: number;
  name_vi: string;
  name_en: string;
  price: number;
};

type Props = {
  products: Product[];
  refresh: () => void;
};

export default function HomePageView({ products, refresh }: Props) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [lang, setLang] = useState<"vi" | "en">("vi");
  const [form] = Form.useForm();
  const t = language[lang];

  const handleAdd = () => {
    setEditing(null);
    form.resetFields();
    setOpen(true);
  };

  const handleEdit = (record: Product) => {
    setEditing(record);
    form.setFieldsValue(record);
    setOpen(true);
  };

  const handleDelete = async (id: number) => {
    await fetch(`${environment.FE_ENDPOINT}homePage/${id}`, {
      method: "DELETE",
    });

    refresh();
  };

  const handleSubmit = async () => {
    const values = await form.validateFields();

    if (editing) {
      await fetch(`${environment.FE_ENDPOINT}homePage/${editing.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } else {
      await fetch(`${environment.FE_ENDPOINT}homePage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    }

    setOpen(false);
    refresh();
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: t.productName,
      render: (record: Product) =>
        lang === "vi" ? record.name_vi : record.name_en,
    },
    {
      title: t.price,
      dataIndex: "price",
    },
    {
      title: t.action,
      render: (_: unknown, record: Product) => (
        <Space>
          <Button onClick={() => handleEdit(record)}>
            {t.edit}
          </Button>

          <Button danger onClick={() => handleDelete(record.id)}>
            {t.delete}
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ width: "100vw", padding: 20 }}>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={() => setLang("vi")}>VI</Button>
        <Button onClick={() => setLang("en")}>EN</Button>
      </Space>

      <h1>{t.product}</h1>

      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        {t.addProduct}
      </Button>

      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        pagination={false}
      />

      <Modal
        open={open}
        title={
          editing
            ? lang === "vi"
              ? t.editProduct
              : "Edit Product"
            : lang === "vi"
              ? t.addProduct
              : "Add Product"
        }
        onCancel={() => setOpen(false)}
        onOk={handleSubmit}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name_vi"
            label="Tên (VI)"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="name_en"
            label="Name (EN)"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="price"
            label={lang === "vi" ? "Giá" : "Price"}
            rules={[{ required: true }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
