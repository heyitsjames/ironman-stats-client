import Request from './Request';
import config from '../config/config';

const path = `${config.api_url}log`;
const req = {};

//------------------------------------------------------------------------------
// Following REST verbs for the names of API calls
//------------------------------------------------------------------------------

req.create = () => Request.post(`${path}`).then((data) => data);
req.retrieve = () => Request.get(path).then((data) => data);
req.list = () => Request.get(path).then((data) => data);
req.update = () => Request.put(`${path}`).then((data) => data);
req.destroy = () => Request.delete(`${path}`).then((data) => data);

exports.req = req;