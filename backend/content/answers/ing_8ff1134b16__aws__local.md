---
qid: ing_8ff1134b16__aws__local
question: 'Explain: When to Use Strong Consistency — Strong vs. Eventual Consistency
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 379
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:33-05:00'
sources: []
---

**Situation / Task**  
While architecting a real‑time fraud‑detection platform for a fintech client, I had to decide between strong and eventual consistency for the account‑balance store that feeds a live analytics pipeline.

**Action**  
I mapped the *critical path*: every transaction must see an up‑to‑date balance before it is approved. A stale read could let a customer spend beyond credit limits, violating regulatory compliance and eroding trust. I chose **Amazon DynamoDB with `StrongRead` enabled** on the primary key (`AccountID`). For non‑critical reporting tables (e.g., historical activity logs) I switched to **Eventual Consistency** to reduce latency and cost.

I modeled throughput: 50 k writes/sec for transactions, 5 k reads/sec for alerts. With strong reads DynamoDB’s single‑AZ latency stays <10 ms; the cost increase was ~15 % but within budget because I reserved capacity only on the transaction table.

**Result**  
After deployment, the fraud‑detection latency dropped from 200 ms to 35 ms, and the false‑positive rate fell by **32 %**, directly translating into $1.2 M annual savings in chargebacks. The reporting tables ran at 80 % lower cost while still delivering near real‑time dashboards.

**Reflection (Bar‑raiser)**  
I demonstrated *Ownership* by balancing regulatory risk against cost, *Dive Deep* through detailed latency & cost modeling, and quantified impact with clear metrics. I also documented the fallback plan—switching to eventual consistency if write spikes exceed capacity—to learn from potential over‑provisioning failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
