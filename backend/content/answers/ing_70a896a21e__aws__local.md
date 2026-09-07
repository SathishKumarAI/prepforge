---
qid: ing_70a896a21e__aws__local
question: 'Explain: Recency-Weighted Ranking — Knowledge Management'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 401
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:18-05:00'
sources: []
---

**Recency‑Weighted Ranking for a Knowledge‑Management Service**

*Leadership Principles:* **Customer Obsession** (deliver up‑to‑date answers) & **Dive Deep** (understand user intent and data decay).

**Situation / Task**  
At my last company we built an internal FAQ bot. Users complained that older articles still surfaced at the top, hurting adoption. I was tasked to re‑rank results so freshness mattered.

**Action**  
1. *Define a decay function*: `score = base_score × exp(−λ·Δt)`, where Δt is hours since last edit and λ=0.01/hour (tuned via A/B testing).  
2. *Indexing strategy*: Store `last_modified` in DynamoDB alongside TF‑IDF vectors; use a Lambda nightly job to compute the decayed score and write it to an ElasticSearch index.  
3. *Query pipeline*: The API layer queries ES with the user’s query, receives documents ordered by `score`.  
4. *Monitoring*: CloudWatch metrics track mean time-to-answer (MTTA) and click‑through rate (CTR).  

**Result**  
After deployment, MTTA dropped from 12 min to **3.2 min** (+73% faster), CTR rose 18%, and the bot’s usage grew from 1.2k to 4.7k queries/day—tripling engagement.

*Bar‑raiser focus*: I owned the end‑to‑end feature, dug into decay math, quantified impact with real KPIs, and iterated after a false positive spike by tightening λ. This blend of data‑driven design and ownership aligns with Amazon’s standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
