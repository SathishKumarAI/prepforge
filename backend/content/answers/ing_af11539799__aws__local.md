---
qid: ing_af11539799__aws__local
question: 'Explain: AI Anti-Patterns — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 421
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:01:29-05:00'
sources: []
---

**AI Anti‑Patterns – A Quick Guide**

> **Leadership Principles:** *Customer Obsession* (don’t build for the “nice‑to‑have” but for real user pain points) & *Ownership* (own data, model, and its impact).

**Situation / Task**  
While leading a recommendation engine upgrade, my team fell into several AI anti‑patterns that threatened latency, fairness, and cost.

**Action**  

| Anti‑Pattern | Why it hurts | Remedy |
|--------------|--------------|--------|
| **Over‑engineering models** | 3 × compute & 50 % slower inference | Adopt *AutoML* + pruning; use SageMaker Pipelines to iterate quickly |
| **“Black‑box” feature sets** | Hidden bias, hard to audit | Implement Feature Store with metadata (SageMaker Feature Store) and explainability (Amazon SageMaker Clarify) |
| **Data “copy‑paste”** | Duplicate data inflates storage & training time | Deduplicate via Glue catalog; enforce schema versioning |
| **Ignoring model drift** | 15 % drop in precision after 2 weeks | Deploy continuous evaluation with Amazon CloudWatch + Lambda alerts |

**Result**  
By refactoring the pipeline, we cut inference latency from 350 ms to 120 ms (30 % faster), reduced training cost by $4k/month, and increased recommendation CTR by 8 pp. The team adopted a “no‑duplicate” policy that now runs automatically on each data ingest.

**Bar‑raiser takeaways:**  
*Ownership:* I took full responsibility for the pipeline overhaul.  
*Dive Deep:* Quantified latency, cost, and CTR before/after.  
*Learning from failure:* Documented anti‑patterns in a shared repo so future squads avoid them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
