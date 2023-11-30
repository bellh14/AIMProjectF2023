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

type Props = {
    id: string;
    name: string;
};

const FormTemplate = (props: Props) => {
    return (
        <div id={props.id}>
            <Form
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 16 }}
                layout="horizontal"
                size="large"
                className="w-full my-16 shadow-lg p-8 rounded-xl"
            >
                <h2 className="text-3xl font-bold text-center mb-8 text-primary-purple">
                    {props.name}
                </h2>
                <div className="grid grid-flow-row grid-cols-2 gap-8 my-4">
                    <Form.Item label="Input" className="text-2xl">
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
