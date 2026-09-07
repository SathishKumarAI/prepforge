---
qid: ing_10b36be3fd__faang__local
question: 'Explain: Interview questions — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 493
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:22:22-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of the difference between *inference* and *production* in an AI lifecycle. I’ll confirm that we’re talking about deploying machine‑learning models (e.g., image classifiers) and not about training pipelines or data engineering.

---

**Approach**  
1. Define each term.  
2. Explain how they differ in objectives, workflows, and constraints.  
3. Provide a concrete example to illustrate the contrast.

---

**Depth**  

| Aspect | Inference | Production |
|--------|-----------|------------|
| **Goal** | Execute a trained model on new data to produce predictions or decisions. | Deliver a robust, scalable system that continuously serves inference requests in real time or batch. |
| **Scope** | Single‑shot or low‑latency prediction; often offline evaluation. | End‑to‑end pipeline: monitoring, scaling, A/B testing, rollback, compliance. |
| **Resources** | GPU/CPU for a few seconds per request; minimal overhead. | Autoscaling clusters, load balancers, caching layers, logging, metrics dashboards. |
| **Latency & Throughput** | Tight latency targets (ms‑level). | Balance latency with throughput; SLA guarantees. |
| **Observability** | Accuracy metrics, confidence scores. | Health checks, error rates, drift detection, audit trails. |

*Example*: A credit‑card fraud model is first run in inference mode on a test set to measure ROC‑AUC. Once approved, it’s moved into production as a REST API behind an autoscaling service, with real‑time monitoring and a rollback plan if the false‑positive rate spikes.

---

**Edge Cases**  
- **Model drift**: Inference may still be correct locally but degrade in prod due to distribution shift.  
- **Resource exhaustion**: Production systems must handle traffic spikes; inference alone doesn’t reveal this.  
- **Security**: Production needs encryption, authentication; inference testing often omits these layers.

---

**Optimize & Communicate**  
I’d emphasize that *inference* is a unit of work, while *production* is the operational environment that guarantees reliability and compliance at scale. I would close by noting how good monitoring in production feeds back into improving inference quality—closing the loop for continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
