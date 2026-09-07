---
qid: ing_d1670283eb__faang__local
question: 'Explain: Config Topic ¶ — ksqlDB Architecture - ksqlDB Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 392
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:47:28-05:00'
sources: []
---

**Clarify**  
You’re asking what the *Config Topic* is in the ksqlDB architecture and why it matters for schema evolution, feature toggles, and runtime configuration.

**Approach**  
1. Identify the role of the Config Topic within ksqlDB’s control plane.  
2. Map its relationship to Kafka topics (state, schema registry, stream metadata).  
3. Explain how it’s used by the server, clients, and operators.

**Depth**  
- The Config Topic is a hidden Kafka topic (`__ksql-config`) that stores key‑value pairs representing global ksqlDB settings (e.g., `auto.offset.reset`, `max.poll.records`).  
- It also persists *streaming* configuration changes such as the number of source partitions, checkpoint paths, and custom query parameters.  
- When a server starts, it reads this topic to bootstrap its internal state; any subsequent writes are replicated across all ksqlDB nodes, ensuring consistency in a clustered deployment.  
- Operators can alter runtime behavior without redeploying by publishing new entries; the broker watches the topic for changes and applies them atomically.

**Edge Cases**  
- Corruption of the Config Topic leads to stale or inconsistent settings—watch for replication lag or partition failures.  
- Conflicting writes from multiple nodes may cause race conditions; ksqlDB serializes updates via Kafka’s log compaction.  

**Optimize & Communicate**  
To improve reliability, enable *exactly‑once* semantics on the Config Topic and monitor its offset lag. When explaining to interviewers, highlight that this design keeps configuration tightly coupled with data streams, enabling zero‑downtime reconfiguration—a key requirement for large‑scale streaming services at FAANG scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
