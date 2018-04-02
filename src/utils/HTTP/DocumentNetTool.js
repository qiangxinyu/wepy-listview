let category = [{'id': 1, 'name': '\u4eba\u6587\u5b66\u79d1', 'sub': [{'id': 3, 'name': '\u4eba\u658701'}, {'id': 4, 'name': '\u4eba\u658702'}]}, {'id': 2, 'name': '\u5929\u6587\u5730\u7406', 'sub': [{'id': 5, 'name': '\u5929\u658701'}, {'id': 6, 'name': '\u5929\u658702'}]}, {'id': 7, 'name': '\u8bfb\u4e66\u5427', 'sub': [{'id': 8, 'name': '\u4e66\u5427\u7cbe\u54c1'}, {'id': 9, 'name': '\u4e66\u5427\u63a8\u8350'}, {'id': 10, 'name': '\u4e66\u5427\u70ed\u95e8'}]}]

const getCategory = (success, error) => {
  success(category)
}

var pageSize = 10
var datas = {}

for (var item of category) {
  for (var sub of item.sub) {
    datas[sub.id] = []
    for (var index = 0; index < 33; index++) {
      datas[sub.id].push({
        title: 'Ttitle' + sub.id + '_' + index,
        intro: 'sed when referring to someone or something for the first time in a text or conversation.',
        collect: index
      })
    }
  }
}

const getDocumentList = (page, id, success, error) => {
  setTimeout(() => {
    var list = datas[id]
    list = list.slice(pageSize * (page - 1), pageSize * page)
    success(list)
  }, 1000)
}

module.exports = {
  pageSize,
  getCategory,
  getDocumentList
}
