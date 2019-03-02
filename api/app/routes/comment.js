const { commentAPI } = require('../api');
const path = require('path');
const { wrapAsync, auth } = require('../infra');

module.exports = app => {
  app
    .route('/photos/:photoId/comments')
    .get(wrapAsync(commentAPI.listAllFromPhoto))
    .post(auth, wrapAsync(commentAPI.add));
};
