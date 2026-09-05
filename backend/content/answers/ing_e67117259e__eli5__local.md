---
qid: ing_e67117259e__eli5__local
question: 'Explain: Service discovery for MCPs — modelcontextprotocol/modelcontextprotocol
  \u00b7 Discussions \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 257
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:40:00-05:00'
sources: []
---

Imagine a bustling coffee shop where every barista (a “model” that can answer questions) has its own specialty menu (the *ModelContextProtocol*). A customer (your application) walks in and wants the best espresso for their taste. Instead of asking each barista individually, they use the shop’s “menu board” (service discovery) to see which baristas offer espresso and what style it comes in.

In machine‑learning terms:

- **MCP** (Model Context Provider) is a service that hosts one or more models.
- **ModelContextProtocol** defines how those models describe themselves—what inputs they accept, what outputs they give, and how to talk to them.
- **Service discovery** is the process of finding all MCPs on a network, reading their ModelContextProtocols, and choosing the right one for your task.

So service discovery is like scanning the shop’s menu board: it tells you which baristas (MCPs) are available, what they can brew (model capabilities), and how to order (protocol). This lets you pick the perfect model without hunting around.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
