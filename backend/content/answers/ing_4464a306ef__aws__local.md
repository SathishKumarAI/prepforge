---
qid: ing_4464a306ef__aws__local
question: 'Explain: Research Frontiers — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 476
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:00:50-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was asked to lead a cross‑functional team that would build an autonomous “agent” for real‑time fraud detection in credit‑card transactions. The goal: reduce false positives by 30 % while keeping latency under 200 ms.

**Action**  
*Customer Obsession & Ownership*: I began with a deep dive into user pain points—security analysts complained that alert fatigue was killing productivity. I mapped the entire flow, from ingestion to decision, and identified bottlenecks in data preprocessing.  

*Design*:  
- **Ingestion**: Kinesis Data Streams → Lambda (real‑time feature extraction).  
- **Model serving**: SageMaker Real‑Time Endpoint with a multi‑model strategy (one model per fraud category).  
- **Orchestration**: Step Functions to route traffic, fall back to batch inference on S3 if latency exceeded 200 ms.  
- **Observability**: CloudWatch metrics + Evidently for canary testing.

*Bias for Action & Invent & Simplify*: I prototyped a lightweight decision tree (≈10 k parameters) that ran in Lambda and achieved 85 % precision with zero cost. It served as a safety net while the heavier XGBoost model warmed up.  

**Result**  
- False positives dropped from **25 % to 17 %** (30 % reduction).  
- End‑to‑end latency: **180 ms average, 95th percentile <250 ms**.  
- Cost per inference fell by **$0.0004**, saving ~$1M annually.

**Learnings**  
The biggest failure was over‑optimizing for speed at the expense of model accuracy; I learned to balance metrics via a multi‑objective loss and continuous A/B testing.  

---

> **Bar‑raiser cues:** ownership of the entire pipeline, depth in data & system design, quantified impact (30 % reduction), and iterative learning from early missteps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
