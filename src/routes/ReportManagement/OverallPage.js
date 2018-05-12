import React, { PureComponent } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {Form, Input, DatePicker, Button, Table} from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

const FormItem = Form.Item;
const dateFormat = 'YYYY/MM/DD';
@Form.create()
export default class OverallPage extends PureComponent {
  render() {
    const { getFieldDecorator } = this.props.form;
    const columns = [
      {
        title: '用户名称',
        dataIndex: 'userName',
      },
      {
        title: '气源均价',
        dataIndex: 'buyAveragePrice',
      },
      {
        title: '销售均价',
        dataIndex: 'saleAveragePrice',
      },
      {
        title: '成本',
        dataIndex: 'totalCost',
      },
      {
        title: '管输费',
        dataIndex: 'totalFee',
      },
      {
        title: '销售收入',
        dataIndex: 'totalIncome',
      }
    ];

    const dataSource = [
      {
        key: '1',
        userName: '客户1',
        buyAveragePrice: 1,
        saleAveragePrice: 1,
        totalCost: 1,
        totalFee: 1,
        totalIncome: 1
      }, 
      {
        key: '2',
        userName: '客户1',
        buyAveragePrice: 1,
        saleAveragePrice: 1,
        totalCost: 1,
        totalFee: 1,
        totalIncome: 1
      }
    ];

    const handleSubmit = e => {      
      e.preventDefault();     
      this.props.form.validateFields((err, values) => {
        if (!err) {
          alert(values);
          
        }
      });
    }    
    
    return (
      <PageHeaderLayout >
        <Form layout="inline">
          <FormItem>
            <DatePicker allowClear={false} defaultValue={moment(new Date().toLocaleDateString(), dateFormat)} format={dateFormat} />
          </FormItem>
          <FormItem>
              <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                查询
              </Button>
          </FormItem>
        </Form>
        <Table dataSource={dataSource} columns={columns}/>
      </PageHeaderLayout>
    );
  }
}