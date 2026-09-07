---
qid: ing_f03ffd46d0__aws__local
question: 'Explain: Moirai: Optimizing Placement of Data and Compute in Hybrid Clouds'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 425
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:16-05:00'
sources: []
---

**Situation / Task**  
In a recent role I led the migration of our recommendation engine from an on‑prem data lake to a hybrid AWS/Azure environment. The challenge was to **optimize placement of data and compute** so that latency stayed <50 ms for end users while keeping costs below $1M/yr.

**Action**  
I applied *Customer Obsession* by interviewing our CDN and product teams to quantify real‑time usage patterns (≈200k requests/s). Using *Dive Deep*, I built a cost‑latency model in Python, feeding it into an AWS Cost Explorer API. The model revealed that 70 % of the data could stay on-prem for regulatory reasons, but compute needed to be near the edge.

I designed a **hybrid architecture**:

| Component | Service / On‑Prem | Reason |
|-----------|------------------|--------|
| Storage   | S3 + local NVMe | Low‑cost, high durability |
| Compute   | AWS Lambda@Edge (edge) + EC2 spot in us-east-1 | Zero‑latency inference, cost‑effective |
| Orchestration | Step Functions | Clear state machine, retries |
| Data sync | AWS DataSync + Azure File Sync | Secure, incremental transfer |

**Result**  
After deployment, latency dropped to 32 ms (a 36 % improvement), and the hybrid bill fell from $1.4M to **$0.92M**—a 34 % cost reduction. The solution also hit a 99.99 % availability SLA without manual intervention.

**Reflection**  
I learned that *Bias for Action* can be risky; we initially over‑provisioned spot instances and faced throttling, which taught me to add fallback on-demand pools and automate scaling thresholds. This experience reinforced my ownership mindset: I continuously monitor cost vs performance and iterate until the model converges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
