require('dotenv').config();

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const logger = require('./logger');

class Server 
{
    constructor(service, uri, port) 
    {
        this.service = service;
        this.uri = uri;
        this.port = port;

        this.server = new grpc.Server();
    }

    async setService(protoService, service)
    {
        try {
            await this.server.addService(protoService, service);
        } catch (error) {
            logger.error(error);
        }
    }

    async loadProto(proto, serviceName, packageName = '', optional = {})
    {
        try {
            if (typeof optional != 'object')
                throw 'optional is not an object!';
            
            const rules = {
                keepCase: true,
                longs: String,
                enums: String,
                arrays: true,
                ...optional,
            };

            const protoPackage = await protoLoader.loadSync(proto, rules);
            const getPackage = await grpc.loadPackageDefinition(protoPackage);
            
            if (!packageName)
                return getPackage[serviceName].service;
            else
                return getPackage[packageName][serviceName].service;
        } catch (error) {
            logger.error(error);
        }
    }

    async listen()
    {
        try {
            await this.server.bindAsync(
                `${this.uri}:${this.port}`,
                grpc.ServerCredentials.createInsecure(),
                (err, port) => {
                    if (err)
                        throw err;
                    
                    logger.warn(`${this.service} grpc listening on ${port}`);
                    this.server.start();
                }
            )
        } catch (error) {
            logger.error(error);
        }
    }
}

module.exports = Server;