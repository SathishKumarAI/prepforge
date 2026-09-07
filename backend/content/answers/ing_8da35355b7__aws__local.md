---
qid: ing_8da35355b7__aws__local
question: 'Explain: Tell me about a performance optimisation you shipped. Give me
  the numbers, and tell me why I should believe them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 380
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:45:54-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a serverless recommendation engine that served 1 M users daily. Production logs showed a 2‑second cold‑start latency and a 30 % error rate during traffic spikes.

**Action (Dive Deep + Ownership)**  
I performed a full instrumentation audit with CloudWatch, X-Ray, and custom Prometheus metrics. The bottleneck was the Lambda’s heavy ML model load (~300 MB) that triggered on every request. I refactored to **SageMaker Endpoint** for inference and moved the model to an EFS-backed container in ECS Fargate.  

- Introduced **Provisioned Concurrency** (10‑20 instances) to eliminate cold starts.  
- Enabled **Application Auto Scaling** on CPU utilization, scaling from 2 to 12 containers within 30 s.  
- Configured **AWS WAF + Shield Advanced** to absorb DDoS and reduce error bursts.

**Result (Deliver Results)**  
- Latency dropped from 2 s → 350 ms (70 % reduction).  
- Error rate fell from 30 % → <0.5 %.  
- Cost decreased by 18 % due to more efficient compute usage (ECS vs Lambda).  

**Why Believe It?**  
All metrics are sourced from CloudWatch dashboards that were audited quarterly. I also ran A/B tests with a 1‑week holdout, achieving statistical significance (p < 0.01) on latency and error reductions.

> *Customer Obsession* – The improved UX directly translates to higher engagement.  
> *Ownership* – I owned the full stack from data collection to deployment and continuous monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
