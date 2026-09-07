---
qid: ing_68b8032f66__aws__local
question: 'Explain: Anti-Patterns to Avoid'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 512
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:05-05:00'
sources: []
---

**Anti‑Patterns in AI Projects (Amazon Style)**  

> **Leadership Principles:** *Customer Obsession*, *Ownership*, *Dive Deep*.

### Behavioral (STAR)  
**Situation:** A startup built a recommendation engine for its e‑commerce site but saw a 12 % drop in conversion after launch.  
**Task:** Own the root cause and restore performance.  
**Action:** I mapped every model pipeline step, uncovered that “lazy” feature drift checks were missing (an anti‑pattern). I implemented automated monitoring with CloudWatch + SageMaker Pipelines, added a retraining trigger on a 0.3 % change in click‑through distribution, and documented the process for the Ops team.  
**Result:** Conversion rose by **18 %**, model latency dropped from 350 ms to 120 ms, and cost per inference fell 25 %. The team now follows “no silent drift” as a core practice.

### Technical / System  
| Anti‑Pattern | Why it fails | AWS Solution |
|--------------|--------------|-------------|
| **“Train once, deploy forever.”** | Models become stale; feature drift degrades accuracy. | SageMaker Pipelines + Ground Truth for scheduled retraining; use CloudWatch metrics to trigger re‑train. |
| **Monolithic “All‑in‑One” inference service.** | Hard to scale, hard to rollback. | Deploy per‑model endpoints via SageMaker Hosting Services or Lambda for lightweight models; use API Gateway with throttling. |
| **Hard‑coded credentials in code.** | Security breach risk. | Use IAM roles and Secrets Manager; enable encryption at rest (KMS). |
| **Over‑engineering feature engineering as a batch job only.** | Misses real‑time signals, increases latency. | Mix batch (Glue) with streaming (Kinesis + Lambda) for near‑real‑time feature updates. |

### Bar‑raiser Checklist  
- **Ownership:** Own the end‑to‑end pipeline, not just model code.  
- **Dive Deep:** Quantify drift thresholds, monitor inference latency, and cost per request.  
- **Learn from Failure:** Document incidents; iterate on monitoring to avoid repeat patterns.  

By eliminating these anti‑patterns, teams deliver reliable, scalable AI that truly serves the customer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
