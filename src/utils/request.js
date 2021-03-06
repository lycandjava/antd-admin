import Ajax from 'robe-ajax'

const { param } = Ajax
export default function request (url, options) {

  if (options.cross) {
    return Ajax.getJSON('http://query.yahooapis.com/v1/public/yql', {
      q: "select * from json where url='" + url + '?' + Ajax.param(options.data) + "'",
      format: 'json'
    })
  } else {
    console.log("request",options)
    return Ajax.ajax({
      url: url,
      method: options.method || 'get',
      data: (options.data || {}),
      processData: options.method === 'get',
      dataType: 'JSON'
    }).done((data) => {
      return data
    })
  }

}
