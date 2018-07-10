
生成交易 Metadata的示例，文件名称为 `${functionName}.json`，格式如下：

```javascript
{
  "fields": [
    { "key": "id", "name": "ID", "type": "String", "primaryKey": true}, 
    { "key": "name", "name": "姓名", "type": "String", "editable": true, "searchable": true, "required": true },
    { "key": "age", "name": "年龄", "type": "Date", "editable": true, "searchable": true, "required": true }
  ]
}

```
