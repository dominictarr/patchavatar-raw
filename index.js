var visualize = require('visualize-buffer')
var h = require('hyperscript')

exports.gives = {
  avatar: {
    image: true,
    name: true
  }
}

exports.needs = {}

//doesn't need anything because it just uses the key.

exports.create = function (api) {
  var cache = {}
  return {
    avatar: {
      image: function (id, onImage) {
        if(cache[id]) return onImage(cache[id])
        var img = visualize(new Buffer(id.substring(1), 'base64'), 32)
        cache[id] = img.src
        return onImage(cache[id])
      },
      name: function (id) {
        return id.substring(0, 10)
      }
    }
  }
}
