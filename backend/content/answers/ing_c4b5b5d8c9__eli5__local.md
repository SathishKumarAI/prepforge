---
qid: ing_c4b5b5d8c9__eli5__local
question: 'Explain: Access the MCP Configurator — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 337
total_tokens: 498
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:47:52-05:00'
sources: []
---

Think of the Glean MCP (Machine‑Learning Platform) server like a smart home hub that keeps all your devices in sync. The **MCP Configurator** is the user‑friendly control panel where you set up and tweak how the hub talks to each device.

1. **Open the Configurator** – just as you’d tap an app icon on your phone, launch the MCP Configurator by clicking its shortcut or running `glean-mcp-config` in a terminal.
2. **Connect to the Server** – it asks for the server’s address (e.g., `http://localhost:8080`). This is like entering the Wi‑Fi SSID so the hub knows where to reach the hub itself.
3. **Choose a Project** – pick the learning task you want to run; think of this as selecting which room in your house you’re controlling.
4. **Set Parameters** – adjust settings such as data source, model type, or training frequency. Each slider is a knob that tunes how aggressively the hub learns from new data.
5. **Save and Run** – hit “Apply” to push these choices to the server, then start the training job. The Configurator will show progress like a status light on your smart thermostat.

In short, the MCP Configurator lets you comfortably tell the Glean MCP server what data to use, how to learn from it, and when to deploy that learning—just as you’d set up a new smart device in your home.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
