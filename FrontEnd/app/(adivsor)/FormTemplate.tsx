"use client";
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
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                size="large"
                // style={{ maxWidth: 600 }}
                className="w-full my-16"
            >
                <h2 className="text-2xl font-bold text-center mb-8 text-primary-purple">
                    Form 1
                </h2>
                <div className="grid grid-flow-row grid-cols-3 gap-8">
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
                                        {
                                            value: "hangzhou",
                                            label: "Hangzhou",
                                        },
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
                </div>
                <Form.Item label="Button:" className="flex justify-center">
                    <Button className="ml-4">Button</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default FormTemplate;
