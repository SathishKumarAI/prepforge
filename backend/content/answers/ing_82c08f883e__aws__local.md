---
qid: ing_82c08f883e__aws__local
question: 'Explain: Panel of LLM Judges (PoLL) — Ensemble Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 398
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:20:33-05:00'
sources: []
---

**Situation & Task**  
At my previous firm we needed a high‑confidence text‑classification pipeline for a compliance platform that processed ~1 M documents per day. A single LLM model produced >95% accuracy but occasional misclassifications cost $12k in manual reviews. I proposed the **Panel of LLM Judges (PoLL)** ensemble to boost precision while keeping latency under 200 ms.

**Approach & Design**  
*Model stack*: three distinct fine‑tuned Llama‑2 models (base, domain‑aware, and bias‑sensitive).  
*Ensemble logic*: majority vote + confidence threshold. If disagreement <0.8, the request is routed to a **Lambda@Edge** function that queries an **Amazon SageMaker Neo** optimized inference endpoint; otherwise it falls back to a pre‑cached **ElastiCache for Redis** decision.  
*AWS services*: SageMaker endpoints (multi‑AZ), Lambda@Edge for edge latency, SQS for back‑pressure, CloudWatch metrics for drift detection.

**Result**  
Precision rose from 95% → 99.4%, reducing manual review workload by 68 % and saving ~$1.6M annually. Latency stayed <180 ms per document; cost increased only 12 % due to efficient Neo compression.

**Reflection (Bar‑raiser notes)**  
*Ownership*: I owned the entire lifecycle—data prep, model training, deployment, monitoring.  
*Dive Deep*: Conducted A/B tests on confidence thresholds and observed drift quarterly, adjusting weights accordingly.  
*Learning from failure*: Initial rollout hit a 5 % spike in false positives; we introduced a fallback rule and re‑trained with hard examples, eliminating the spike within two weeks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
