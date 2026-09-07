---
qid: ing_e41c871c24__faang__local
question: 'Explain: After-Sales Support — What is TPS, what is QPS, and what is the
  difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 447
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:29:19-05:00'
sources: []
---

**Clarify**  
You’re asking for the meaning of two metrics used in after‑sales support: **TPS (Transactions Per Second)** and **QPS (Queries Per Second)**, and why they differ. I’ll assume we’re talking about a customer‑support platform that logs ticket events (transactions) and user search requests (queries).

**Approach**  
1. Define each metric formally.  
2. Explain what processes generate them.  
3. Highlight the key distinction in terms of granularity and intent.

**Depth**  

| Metric | What it counts | Typical source | Purpose |
|--------|----------------|----------------|---------|
| **TPS (Transactions Per Second)** | End‑to‑end business actions that change state – e.g., ticket creation, status updates, refund approvals. | Backend services handling CRUD on support objects. | Measures load that alters data; used for capacity planning of write‑heavy systems and SLA compliance. |
| **QPS (Queries Per Second)** | Read‑only lookups – e.g., searching ticket history, pulling customer profiles. | Search APIs or read replicas. | Gauges search traffic; informs caching strategy and index scaling. |

**Edge Cases**  
- A “transaction” may internally trigger many queries; TPS alone won’t reveal that load.  
- Bulk import jobs can inflate TPS dramatically but not affect QPS.  
- If the system treats a query as a transaction (e.g., a search that also flags tickets), metrics could overlap.

**Optimize & Communicate**  
Explain that monitoring both gives a holistic view: TPS tells you how many state changes the system must persist, while QPS shows how often users are reading data. Use separate autoscaling policies for write and read clusters. In an interview, I’d finish by noting we log each operation type separately so we can detect bottlenecks—e.g., high TPS but low CPU suggests disk‑bound writes; high QPS with slow latency points to index fragmentation. This demonstrates both technical depth and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
