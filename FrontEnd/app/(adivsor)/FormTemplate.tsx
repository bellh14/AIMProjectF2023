"use client"
import React from "react";
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from "antd";

type Props = {};

const FormTemplate = (props: Props) => {
    return (
        <div>
            <Form
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                size="large"
                // style={{ maxWidth: 600 }}
                className="w-full my-16"
            >
                <h2 className="text-2xl font-bold text-center mb-8">
                    Form 1
                </h2>
                <Form.Item label="Input">
                    <Input />
                </Form.Item>
                <Form.Item label="Select">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="TreeSelect">
                    <TreeSelect
                        treeData={[
                            {
                                title: "Light",
                                value: "light",
                                children: [
                                    { title: "Bamboo", value: "bamboo" },
                                ],
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Cascader">
                    <Cascader
                        options={[
                            {
                                value: "zhejiang",
                                label: "Zhejiang",
                                children: [
                                    { value: "hangzhou", label: "Hangzhou" },
                                ],
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="InputNumber">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Button">
                    <Button>Button</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default FormTemplate;
