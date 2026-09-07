---
qid: ing_a43f6a1d28__aws__local
question: How do you keep LLM costs under control in a multi-tenant product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 486
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:50-05:00'
sources: []
---

**Situation & Task**  
I was tasked to launch a SaaS platform that exposes GPT‑style LLMs to 200+ tenants while keeping inference spend under $0.02 per thousand tokens—Amazon’s *Deliver Results* and *Customer Obsession* were the guiding lights.

**Action – Technical Design**  
1. **Model Tiering & Spot Savings** – We deployed two model families: a “lite” DistilBERT on **AWS SageMaker Endpoint (ml.m5.large)** for 90 % of queries, and an optional “premium” GPT‑3.5 turbo on **Amazon Bedrock** for high‑value tenants.  
2. **Batching & Queueing** – Incoming requests funnel into an **SQS FIFO queue**; Lambda workers batch up to 20 tokens per call, reducing per‑token overhead by ~35 %.  
3. **Dynamic Scaling with SageMaker Pipelines** – Auto‑scaling policies adjust endpoint replicas based on CPU/latency thresholds, preventing overprovisioning during off‑peak hours.  
4. **Cost Attribution & Alerting** – We instrumented CloudWatch metrics (tokens per tenant) and used **AWS Cost Explorer API** to generate monthly reports; a PagerDuty alert fires if spend > $0.015/1k tokens.

**Result**  
Within 3 months, we reduced average inference cost from $0.028 to $0.018 per 1,000 tokens (≈36 % savings) while maintaining < 200 ms latency for 95 % of requests. Tenants reported higher satisfaction scores (+12 %) due to consistent performance.

**Reflection – Bar‑raiser Lens**  
- **Ownership:** I led cross‑team negotiations on budget cuts and vendor selection.  
- **Dive Deep:** Continuous profiling uncovered queuing bottlenecks; I iterated until latency met SLA.  
- **Learned from Failure:** A misconfigured scaling policy once caused a 30 % spike; we added guardrails, documented the incident, and updated runbooks—an example of *Bias for Action* and *Invent & Simplify*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
