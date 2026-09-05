---
qid: ing_ca9c41408f__star__local
question: 'Explain: Disadvantages — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 327
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:18-05:00'
sources: []
---

**Situation:**  
While working on a real‑time analytics platform for a telecom operator, we had to keep user session logs replicated across three regional database clusters to guarantee low latency reads during peak usage hours.

**Task:**  
I was tasked with evaluating whether the replication strategy was sustainable and identifying any hidden costs that might jeopardize our SLA targets.

**Action:**  
First, I mapped out the write‑through path: every new log entry had to be persisted in all replicas before acknowledging the client. Using PostgreSQL’s logical replication, I instrumented WAL logs and added a custom lag monitor. The monitor revealed that under peak load (≈ 1 M writes/second), replication lag spiked to 4–5 seconds on one replica due to disk I/O contention. I then re‑architected the write pipeline: introduced a lightweight Kafka buffer, allowed asynchronous batch commits for non‑critical logs, and switched the heavy replicas to SSDs with RAID‑10. Finally, I implemented a “stale read” fallback that served reads from the lagging replica when latency exceeded 3 ms, while still maintaining eventual consistency.

**Result:**  
Replication lag dropped below 1 second across all clusters, reducing read latency by 25 % and cutting write‑ack overhead by 30 %. However, I learned that aggressive replication introduces significant write amplification, increased storage costs, and complex failure handling—trade‑offs that must be carefully balanced against consistency guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
