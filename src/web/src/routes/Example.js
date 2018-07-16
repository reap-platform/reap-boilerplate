import React from 'react'
import { Input, Button, Card, Form } from 'antd'

const { Item } = Form
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 6,
  },
}

const Component = ({ dispatch, form, message }) => {
  return (
    <Card title="示例功能">
      <Form>
        <Item label="姓名" {...formItemLayout}>

          {form.getFieldDecorator('name', {
            rules: [{
              required: true, message: '请输入姓名',
            }],
          })(<Input />)}
        </Item>
        <Item {...{ wrapperCol: { push: 6, span: 6 } }}>
          <Button onClick={() => {
              form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                  dispatch({ type: 'example/hello', name: values.name })
                }
              })
            }}
          >提交</Button>
        </Item>
        <Item {...formItemLayout}>
          {message}
        </Item>
      </Form>
    </Card>
  )
}
export default Form.create()(Component)
