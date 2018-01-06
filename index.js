'use strict';

const mergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: 'ember-apollo',

  treeForAddon (tree) {
    const apolloClientPath = path.dirname(require.resolve('apollo-client/index.js'))
    let apolloClientTree = this.treeGenerator(apolloClientPath)

    if (!tree) {
      return this._super.treeForAddon.call(this, apolloClientTree)
    }

    const trees = mergeTrees([apolloClientTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
};
