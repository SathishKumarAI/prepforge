---
qid: ing_c7d5791273__aws__local
question: 'Explain: Decision: Managed vs Self-Hosted — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 416
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:04-05:00'
sources: []
---

**Situation & Task**  
I was leading a new recommendation engine for an e‑commerce marketplace that required real‑time similarity search on user and product embeddings (≈ 10 M vectors). The choice was between a managed vector DB (e.g., Amazon Kendra/Bedrock) or a self‑hosted solution (FAISS + EC2).

**Action & Design**  
I scoped the problem: low latency (< 50 ms), 99.9 % availability, and cost ≤ $5k/month. I benchmarked three options:

| Option | Avg Query Latency | Cost | Ops Effort |
|--------|-------------------|------|------------|
| Managed (Amazon Kendra) | 12 ms | $3.8k | ★ |
| Self‑hosted FAISS on EC2 + ALB | 18 ms | $4.6k | ★★ |
| OpenSearch Vectors | 35 ms | $5.1k | ★★★ |

The managed service gave the best latency and lowest ops cost, but I identified a hidden trade‑off: vendor lock‑in for custom embeddings. I proposed hybrid architecture: use Kendra for high‑volume queries, and a lightweight FAISS cluster for experimentation and A/B tests.

**Result**  
Deployment hit 99.95 % uptime in the first month; query latency dropped from 35 ms to 12 ms, boosting conversion by **4.2 %** (≈ $1.3M incremental revenue). Cost stayed under budget, with a 15 % margin.

**Learnings & Bar‑raiser Signals**  
I owned the decision cycle, dove deep into performance data, quantified impact, and documented trade‑offs for future teams. I also created a rollback playbook that reduced mean time to recovery by 30 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
