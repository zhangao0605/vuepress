# 1. 获取账户余额(GetAccount)

请求参数
           
| 参数名 | 类型 | 是否必须| 含义 |
| :------:| :------: | :------: | :------: |
| method | string | true | 调用的方法 |
| params | dict | true | 参数 |
  
params:
           
| 参数名 | 类型 | 是否必须| 含义 |
| :------:| :------: | :------: | :------: |
| chainId | string | true | 链id |
| address | string | true | 账户地址 |    

响应参数:
           
| 参数名 | 类型 | 是否必须| 含义 |
| :------:| :------: | :------: | :------: |
| address | string | true | 账户地址 |
| nonce | int | true | 交易的发起者在之前进行过的交易数量 |  
| balance| bigint | true | 账户余额 |  
| storageRoot| string | false | 合约存储数据的hash(没有合约返回null) | 
|codeHash| string | false | 合约代码的hash(没有合约返回null) | 

请求示例:
```
URL : test.thinkey.xyz
method : POST
request body :
{
"method": "GetAccount",
"params": {"chainId":"2", "address":"0x2c7536e3605d9c16a7a3d7b1898e529396a65c23"}
}
response:
{
"address": "0x2c7536e3605d9c16a7a3d7b1898e529396a65c23",
"nonce": 43,
"balance":9.99999985e+26,
"storageRoot": null,
"codeHash": null
}
```
<script>
  export default{
    //...do something
}
</script>
