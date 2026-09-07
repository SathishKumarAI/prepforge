---
qid: ing_5b35ad7e73__faang__local
question: 'Explain: Context — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 425
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:15:23-05:00'
sources: []
---

**Context – Pattern: Server‑Side Service Discovery**

| Section | What to cover |
|---------|---------------|
| **Clarify** | *Problem:* In a micro‑service environment, how do services locate each other without hard‑coding addresses? Assume stateless services, dynamic scaling, and multiple environments (dev/stage/prod). Confirm if we need only discovery or also health checks. |
| **Approach** | 1️⃣ Use a registry (e.g., Consul, Eureka, etcd). <br>2️⃣ Each service registers its endpoint at startup with TTL/heartbeat. <br>3️⃣ Clients query the registry for available instances and perform load‑balancing locally or via an API gateway. |
| **Depth** | • Registration: Service publishes `serviceName`, IP/port, tags, metadata.  <br>• Discovery: Client queries `/services/{name}` → list of healthy nodes.  <br>• Health‑check: Registry pings or receives heartbeats; if absent beyond TTL, node is removed.  <br>• Complexity: O(1) read from local cache; registry ops O(log n).  <br>• Trade‑offs: Centralized bottleneck vs. fully decentralized gossip protocols. |
| **Edge Cases** | • Network partitions → stale entries → use short TTLs and fallback to DNS. <br>• Scaling registry itself → run it in HA cluster. <br>• Version mismatches → tag services with API version. |
| **Optimize & Communicate** | • Cache results locally and refresh periodically to reduce latency. <br>• Use circuit‑breaker patterns on failed lookups. <br>Explain that this pattern decouples deployment from service location, enabling dynamic scaling and zero‑downtime deployments. |

This structure demonstrates clear problem restatement, a logical plan, technical depth with complexity notes, awareness of pitfalls, and a concise narrative—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
