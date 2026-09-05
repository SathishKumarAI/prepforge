---
qid: ing_4c795bd017__think__local
question: 'Explain: Related patterns — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 401
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:23:03-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify what “pattern” means in ML context (software design pattern).  
- Assume we’re discussing a *service‑oriented architecture* where ML models run as microservices.  
- Assume “server‑side service discovery” refers to how client code finds and connects to those model services.

**2️⃣ Mental model / framework**  
- Map the pattern onto the classic *client–server* + *registry* diagram.  
- Break it into: (a) a **service registry** that records available ML endpoints, (b) a **discovery protocol** (e.g., DNS‑SRV, Consul, etcd), and (c) client logic that queries the registry before invoking a model.

**3️⃣ Step‑by‑step reasoning**  
1. Deploy each ML service behind an endpoint.  
2. Register its address/metadata in the central registry at startup.  
3. Client queries the registry for the desired model name or capability.  
4. Registry returns current network location(s).  
5. Client connects, optionally balances load or falls back if a service is down.

**4️⃣ Common traps to avoid**  
- Forgetting to deregister services on shutdown → stale entries.  
- Relying solely on static config; leads to hard‑coded URLs and brittleness.  
- Ignoring versioning: multiple model versions can coexist, so the registry must expose that metadata.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “Does this enable dynamic scaling, failover, and decoupling?” If yes, the pattern is correctly applied.  
- Communicate it as a two‑tier solution: *registry* + *client lookup*, emphasizing its role in maintaining loose coupling between ML consumers and producers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
