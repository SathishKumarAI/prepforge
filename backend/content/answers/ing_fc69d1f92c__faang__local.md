---
qid: ing_fc69d1f92c__faang__local
question: 'Explain: Frequently Asked Questions About AI SREs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 467
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:26:33-05:00'
sources: []
---

**Clarify**  
The interview asks for a concise FAQ that an *AI Site Reliability Engineer (SRE)* might encounter. I’ll assume the audience is technically‑savvy but not necessarily AI experts, and that we’re targeting production ML workloads on cloud platforms.

**Approach**  
1. List core concerns: reliability, observability, scaling, data drift, model governance, and cost.  
2. For each, craft a brief question & answer pair that captures the “why” and the practical response.  
3. Keep language short (≈20‑30 words per Q&A) to stay within 160‑240 words total.

**Depth**  

| # | FAQ | Answer |
|---|-----|--------|
|1| **How do you ensure model uptime?** | Deploy in blue‑green pipelines; use canary checks on latency/accuracy; rollback on SLA breach. |
|2| **What observability stack is recommended?** | CloudWatch + Prometheus for metrics, OpenTelemetry traces, and a ML‑specific log aggregator (e.g., Feast). |
|3| **How do you handle data drift?** | Continuous monitoring of feature distributions; automated alerts trigger retraining or rollback. |
|4| **What’s the policy for model versioning?** | Immutable artifacts in an artifact store; tag with semantic versioning and lineage metadata. |
|5| **Cost control at scale?** | Spot instances + autoscaling, cache predictions with Redis, schedule batch jobs during low‑price windows. |

**Edge Cases**  
- Sudden traffic spikes → pre‑warm nodes, use serverless inference (Lambda/Cloud Run).  
- Model bias detection failures → fallback to rule‑based logic or human review.  
- API key leaks → enforce strict IAM roles and secret rotation.

**Optimize & Communicate**  
I’d iterate the FAQ with ops peers, add real metrics from past incidents, and present it as a living doc in Confluence so that new SREs can drill down into tooling links. This balances brevity with actionable depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
