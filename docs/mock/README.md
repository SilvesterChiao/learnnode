<!--
 * @Author: SilvesterChiao
 * @Date: 2020-05-28 14:06:53
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-06-30 10:25:22
-->

# Mock.js

## Mock.Random

使用方法

```javascript
var Random = Mock.Random;
Random.email();
Mock.mock('@email');
Mock.mock({ email: '@email' })
```

| Type | Method |
| --- | --- |
| Basic | boolean, natural, integer, float, character, string, range, date, time, datetime, now |
| Image | image, dataImage |
| Color | color |
| Text | paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle |
| Name | first, last, name, cfirst, clast, cname |
| Web | url, domain, email, ip, tld |
| Address | area, region |
| Helper | capitalize, upper, lower, pick, shuffle |
| Miscellaneous | guid, id |

## 参考文档

1. [Mock.js](http://mockjs.com)
