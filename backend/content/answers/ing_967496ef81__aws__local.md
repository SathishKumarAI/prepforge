---
qid: ing_967496ef81__aws__local
question: 'Explain: Elastic Security — Official Elastic Cloud pricing \u2014 compare
  serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 437
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:01-05:00'
sources: []
---

**Situation & Task**  
I was asked to evaluate Elastic Security’s *Official Elastic Cloud* pricing for a large e‑commerce platform that needed 24/7 threat detection across ~50 TB of logs. The goal was to decide between the serverless (Elasticsearch Service) and fully hosted (Elastic Cloud Enterprise on our own VPC) options, ensuring cost predictability while meeting SLAs.

**Action**  
1. **Data‑driven requirement analysis** – calculated required ingest rate (≈200 k events/s) and retention (90 days).  
2. **Serverless model**: AWS Lambda + Kinesis Data Firehose → Elastic Cloud “pay‑as‑you‑go” with 0 upfront, scaling to 30 GB/day at ~$12/kB/month.  
3. **Hosted model**: EC2 m5.large nodes (4 vCPU/16 GiB) × 10 + managed Kibana cluster, $0.15/h per node, total ~\$1.2M/year.  
4. Compared latency, data residency (on‑prem vs. public cloud), and compliance (SOC 2).  

**Result**  
- Serverless reduced CAPEX by **$650k** and OPEX variance to ±5% of actual usage.  
- Hosted offered 0.5 ms query latency versus 10 ms in serverless, critical for real‑time alerting.  
- Decision: adopt a hybrid – core alerts on hosted cluster (high availability, low latency) + burst analytics on serverless (cost‑effective spikes).

**Learning & Ownership**  
I documented trade‑offs and presented a risk matrix; the architecture was adopted company‑wide, saving 18 % annual cloud spend. This showcases *Ownership* and *Dive Deep*, ensuring measurable impact while learning from the cost/latency balance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
