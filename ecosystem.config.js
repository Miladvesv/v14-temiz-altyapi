module.exports = {
  apps: [
    {
      name: "Mainframe",
      namespace: "Miladves",
      script: 'main.Miladves',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Bots/Main"
    }
  ]
};