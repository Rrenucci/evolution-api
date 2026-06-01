// Wrapper to start Evolution API with increased memory limit
const { spawn } = require('child_process');

const child = spawn(
  process.execPath,
    ['--max-old-space-size=512', 'dist/main.js'],
      {
          stdio: 'inherit',
              env: process.env,
                  cwd: __dirname
                    }
                    );

                    child.on('error', (err) => {
                      console.error('Failed to start process:', err);
                        process.exit(1);
                        });

                        child.on('exit', (code, signal) => {
                          if (signal) {
                              console.error('Process killed by signal:', signal);
                                }
                                  process.exit(code || 0);
                                  });
