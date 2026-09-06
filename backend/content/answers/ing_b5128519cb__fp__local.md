---
qid: ing_b5128519cb__fp__local
question: 'Explain: 1-Tier Architecture — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 363
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:29:23-05:00'
sources: []
---

**One‑Tier (Client‑Server) Architecture: From Problem to Design**

When a system’s sole requirement is *“a user must see data and invoke a single operation”*, the simplest solution is to place **both the UI and business logic on the client**, while the server offers only persistent storage.  
*Why this works:*  

1. **Latency minimization** – Every interaction hits the database directly, eliminating round‑trips through a middle tier.  
2. **Simplicity of deployment** – No separate application server to manage; updates are pushed to the client bundle.  
3. **Security isolation** – The server exposes only a thin API (often just CRUD), reducing the attack surface.

From an optimization standpoint, the cost function is *total response time* \(T = t_{\text{client}} + t_{\text{db}}\). Removing the application layer reduces \(t_{\text{app}}\) to zero, so the architecture is optimal when \(t_{\text{app}}\) would otherwise dominate.  

A non‑obvious insight: **stateful clients become the new “session store.”** Because the client holds all business state, it can cache intermediate results and replay actions offline, turning a single‑tier system into an opportunistic distributed cache. This is why many modern mobile apps adopt a one‑tier pattern with local databases (SQLite) while still syncing to a central server only when connectivity permits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
