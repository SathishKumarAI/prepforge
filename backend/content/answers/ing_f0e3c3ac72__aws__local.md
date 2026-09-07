---
qid: ing_f0e3c3ac72__aws__local
question: 'Explain: Excluded — Highavailability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 428
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:21:46-05:00'
sources: []
---

**Situation & Task**  
I was leading the redesign of an AI‑inference platform that had to process image embeddings for a global e‑commerce catalog. The product manager insisted we skip a high‑availability (HA) layer because “latency is already low” and the budget was tight.

**Action**  
1. **Dive Deep into Metrics** – I pulled 30 days of prod logs: 99.7 % request latency <10 ms, but during traffic spikes (holiday sales) we hit 0.3 % error rate due to single‑point failures in the inference node pool.  
2. **Customer Obsession & Ownership** – I ran a user‑impact simulation; a single outage would affect ~12 M users and cost ~$1.8 M in lost revenue (price × volume).  
3. **Design with HA** – Adopted an autoscaling `EC2 Auto Scaling Group` + `Application Load Balancer`, backed by `EFS` for model storage, and a read‑replica `RDS Aurora Serverless` for metadata. This added <5 ms overhead but dropped error rate to <0.01 %.  
4. **Cost & Trade‑off** – The incremental monthly cost was $3K vs potential loss of $1.8M/holiday; I presented a ROI analysis that justified the spend.

**Result**  
Post‑deployment, uptime rose from 99.7 % to 99.999 %, and during the next Black Friday sale we saw no service disruptions—$0 lost revenue, saving ~$1.8 M.  

*Bar‑raiser signals*: ownership of the problem, deep metric analysis, quantified business impact, and learning that “avoiding HA for cost” can backfire financially.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
