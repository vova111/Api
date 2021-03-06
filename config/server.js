
// Normalize a port into a number, string, or false.
const normalizePort = (val) => {
  if (typeof val === 'undefined') {
    return false;
  }

  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    throw new Error(`Port ${val} incorect`);
  }

  if (port >= 0) {
    // port number
    return port;
  }

  throw new Error(`Port ${val} incorect`);
};

const port = normalizePort(process.env.PORT) || 4000;

module.exports = {
  server: {
    port,
    ws: {
      origins: [
        'http://localhost:80', // user prod front
        'http://localhost:3000', // user dev front
        'http://localhost:5000', // admin front
        'http://event-hall.kiev.ua:3000', // user front
        'http://event-hall.kiev.ua:5000', // admin front
      ],
    },
  },
};
