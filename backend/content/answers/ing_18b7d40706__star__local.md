---
qid: ing_18b7d40706__star__local
question: 'Explain: Types of data replication — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 372
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:18:35-05:00'
sources: []
---

**Situation:**  
During my role as a DevOps Engineer at a fintech startup, we launched a new real‑time fraud detection service that needed to keep up with 10 k transactions per second across two regions (US and EU). The latency budget was under 50 ms, so any data lag could cause missed alerts.

**Task:**  
I had to design a replication strategy that would provide low‑latency reads for analytics while keeping writes consistent and fault‑tolerant. I also needed to document the trade‑offs so the product team understood why we chose one method over another.

**Action:**  
First, I implemented **synchronous master–slave replication** for the primary transaction ledger in PostgreSQL, ensuring immediate consistency for the critical write path. For analytics, I set up an **asynchronous logical replication** stream to a read‑only replica in the EU, then used Kafka Connect to push changes into a distributed cache (Redis). Additionally, I added **peer‑to‑peer (multi‑master) replication** with conflict resolution using vector clocks for the fraud rules database in Cassandra, allowing updates from both regions without blocking. I created dashboards showing latency and error rates, and ran chaos tests to verify failover.

**Result:**  
The system achieved <30 ms average read latency for analytics while maintaining 99.9% write consistency. The replication overhead added only ~2 % CPU on the replicas. Post‑deployment metrics showed a 40 % reduction in false negatives for fraud alerts, and the team now regularly uses our documented replication patterns as best practices across services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
