module.exports = {
    apps: [{
        name: "server_tcp",
        script: "./index.js",
        instances: 1,
        exec_mode: "fork",
        watch: true,
        log_file: "~/.pm2/logs/server_tcp-outerr.log",
        out_file: "NULL", // ~/.pm2/logs/server_tcp-out.log
        error_file: "~/.pm2/logs/server_tcp-error.log",
        combine_logs: true,
        merge_logs: true,
        env_production: {
            NODE_ENV: "production",
            NODE_PATH: "./"
        },
        env_development: {
            NODE_ENV: "development",
            NODE_PATH: "./"
        }
    }]
};