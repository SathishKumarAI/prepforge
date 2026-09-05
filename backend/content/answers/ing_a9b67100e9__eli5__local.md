---
qid: ing_a9b67100e9__eli5__local
question: 'Explain: Load Balancing Across Multiple Servers — Proxy vs Reverse Proxy
  (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 244
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:06:50-05:00'
sources: []
---

Think of a busy pizza shop that can only serve customers through one front door.  
A **proxy** is like the shop’s receptionist: she stands at the door, takes each order, and then tells the kitchen which chef should cook it. The customer never sees the chefs—she only talks to the receptionist.  

A **reverse proxy** is a different front‑desk that pretends to be the pizza shop itself. When a customer walks in, they think they’re ordering from the shop’s main counter. The reverse proxy accepts the order, decides which chef (backend server) should make it, and then hands over the finished pizza back to the customer—all without the customer ever knowing there are multiple chefs behind the scenes.

In both cases the front‑door worker balances traffic: if one chef gets overloaded, the receptionist or reverse proxy can route new orders to a quieter kitchen. The key difference is who the client talks to—directly with a server (proxy) or indirectly through an invisible “shop” that hides multiple servers (reverse proxy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
