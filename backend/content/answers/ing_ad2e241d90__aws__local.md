---
qid: ing_ad2e241d90__aws__local
question: 'Explain: Tell me about a time you disagreed with a researcher (or tech
  lead) about priorities, and what happened.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 392
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:57:12-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was building a real‑time recommendation engine for an e‑commerce platform (target: 3 × click‑through rate). The tech lead wanted to ship the “next‑gen” model that used a complex transformer architecture, claiming it would deliver higher accuracy. I believed a simpler gradient‑boosted tree (GBT) with incremental feature updates would hit our SLA of <50 ms inference and allow A/B testing sooner.

**Action**  
I drafted a *Proof‑of‑Concept* comparing both models on the last week’s click data:  
- **Transformer**: 0.42 ROC‑AUC, 200 ms latency, 2 × GPU cost per inference.  
- **GBT**: 0.39 ROC‑AUC, 45 ms latency, <1 % CPU usage.

I presented these findings in a data‑driven review and proposed a staged rollout: ship the GBT first (AWS SageMaker Endpoint with Lambda autoscaling), then run a controlled experiment against the transformer model on AWS Batch for batch inference. I also set up CloudWatch dashboards to track CTR, latency, and cost per acquisition.

**Result**  
The GBT launch improved CTR by 15 % within two weeks, met our latency SLA, and saved ~$30k/month in compute costs. The transformer was later deployed as a “next‑gen” feature after the GBT proved the business case for higher accuracy.  

**Reflection (Bar‑raiser)**  
I took ownership of the experiment design, dove deep into metrics, quantified impact, and learned that *bias for action* paired with *data‑driven decision making* can align divergent priorities without compromising quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
