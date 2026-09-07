---
qid: ing_e259390866__faang__local
question: 'Explain: A Free Trial That Lets You Build Big! — What is TPS, what is QPS,
  and what is the difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 471
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:25:39-05:00'
sources: []
---

**Clarify**  
The interviewer wants a quick explanation of *TPS* (Transactions Per Second) vs *QPS* (Queries Per Second). I’ll assume they’re referring to system load metrics in distributed services, not the “TPS” used for blockchain transactions.

**Approach**  
1. Define each metric.  
2. Explain how they are measured and what they reveal.  
3. Highlight key differences in scope and use‑case.  

**Depth**  
- **QPS (Queries Per Second)** counts every read request that a service receives, regardless of its internal complexity. It’s a raw traffic indicator used for load balancers, API gateways, or search engines to gauge request volume.  
- **TPS (Transactions Per Second)** counts end‑to‑end business operations that may involve multiple reads/writes and must reach a consistency boundary. For example, an e‑commerce “place order” transaction includes inventory check, payment capture, and order persistence; all are counted as one TPS even if they trigger many underlying queries.  
- **Measurement**: QPS is often captured at the HTTP layer (requests per second), while TPS is aggregated after business logic completes successfully.  
- **Use‑case**: QPS drives horizontal scaling of stateless front‑ends; TPS informs database capacity planning, replication lag tolerance, and SLA guarantees.

**Edge Cases**  
- A single “heavy” query that triggers many sub‑queries will inflate QPS but not TPS.  
- Background jobs (e.g., cache refresh) may raise QPS without affecting business TPS.  
- Distributed transactions spanning microservices can complicate TPS counting—needs a global transaction manager.

**Optimize & Communicate**  
When presenting, emphasize that **QPS is traffic volume; TPS is throughput of meaningful work**. Use diagrams to show the pipeline: request → query count vs. transaction commit. Clarify that monitoring both gives a full picture: spikes in QPS can be harmless, but rising TPS indicates real business load that may need infrastructure scaling or optimization. This balanced view satisfies FAANG interviewers’ preference for clarity and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
