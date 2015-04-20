var nodes = document.querySelectorAll('li');

Array.prototype.map.call(nodes, function(node) {
    var code = node.querySelector('code').textContent;
    node.querySelector('p a').href = 'javascript:' + encodeURIComponent(code.replace(/\s+/g, ' ').trim());
});
