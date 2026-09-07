---
qid: ing_74495ecd69__aws__local
question: 'Explain: Your LLM bill tripled this quarter. Design a cost-engineering
  programme - attribution, cascades, context management.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 429
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:48:55-05:00'
sources: []
---

**Situation & Task**  
Last quarter our LLM‑based recommendation engine’s bill jumped from $2 M to $6 M—tripling spend while traffic only grew 15%. I was tasked with a cost‑engineering program that would attribute spikes, cascade savings across teams, and manage context to keep latency low.

**Action**  
* **Attribution** – Instrumented every inference endpoint in *Amazon SageMaker* using CloudWatch metrics and AWS X-Ray traces. Built a Lambda pipeline that aggregates per‑model, per‑region, and per‑user‑segment costs into a real‑time dashboard (QuickSight).  
* **Cascades** – Introduced an “Inference Tier” hierarchy: on‑prem GPU pods for high‑value users, spot‑GPU SageMaker endpoints for bulk traffic, and a pre‑warm Lambda layer for low‑latency edge requests. Each tier’s cost was isolated in separate billing groups (AWS Budgets) so teams could see their impact immediately.  
* **Context Management** – Deployed *Amazon Elastic Cache* (Redis) to cache user embeddings, reducing redundant model calls by 40%. Added a “context window” policy that limits token usage per request, cutting inference length by an average of 25 % without hurting NPS.

**Result**  
Within two months we cut quarterly spend to $3.5 M—a 42 % reduction—while maintaining the same recommendation accuracy (precision‑@10 = 0.71). The program also earned a cross‑functional “Innovation” badge and was adopted by three other product lines.

> **Leadership Principles**: Ownership, Dive Deep  
> **Bar‑raiser focus**: Clear ownership of cost attribution, deep dive into metrics, quantified impact, and learning loop (iterating on tier thresholds after each sprint).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
