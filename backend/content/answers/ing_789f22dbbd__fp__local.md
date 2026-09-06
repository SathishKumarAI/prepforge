---
qid: ing_789f22dbbd__fp__local
question: 'Explain: Read Replicas — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 432
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:21:12-05:00'
sources: []
---

**Read replicas in distributed databases**

*Problem:* A single master database can’t serve the massive read traffic of a global service without throttling writes or sacrificing latency. Reads are *stateless* and can be parallelised, but the master must stay consistent for every write.

*Why replication works:*  
Let \(W\) be the set of writes and \(R\) the set of reads. The master guarantees **serialisable** execution: each read sees a snapshot that reflects all preceding writes. A replica simply replays a subset of \(\{W\}\) (usually via log shipping). Because a read never mutates state, it can be served from any replica that has applied enough of the write log to satisfy its consistency level. The trade‑off is between **latency** (pick a nearby replica) and **freshness** (wait for more logs).

*Principle:*  
This is an instance of *consistency–availability* optimisation under CAP. Read replicas move the system from “write‑only availability” to “read‑parallel availability.” Formally, if each replica \(i\) maintains a state vector \(\mathbf{v}_i(t)\) that monotonically increases with the write log position, then any read request can be answered by choosing an \(i\) such that \(\mathbf{v}_i(t) \geq \theta\), where \(\theta\) is the desired consistency threshold. The system’s throughput scales linearly with the number of replicas because each read incurs no write‑side overhead.

*Non‑obvious insight:*  
Many designers treat replicas as “just more copies.” In reality, they enable **stochastic load balancing**: by selecting a replica at random (or weighted by latency), the probability that *all* reads hit the same node drops dramatically. This turns a deterministic bottleneck into an exponential tail in response times, a phenomenon often overlooked but critical for high‑volume services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
