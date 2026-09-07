---
qid: ing_dd93c85df9__faang__local
question: An enterprise customer wants to deploy your RAG system but has no labelled
  data. How do you evaluate it before and after launch?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 552
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:13:54-05:00'
sources: []
---

**Clarify**

> *Problem:* An enterprise client wants to roll out a Retrieval‑Augmented Generation (RAG) model but lacks labeled evaluation data.  
> *Assumptions to confirm:*  
> 1. They have a large, domain‑specific knowledge base that the RAG will query.  
> 2. Business goals are measurable (e.g., user satisfaction, task completion).  
> 3. We can instrument logging and user feedback mechanisms in production.

**Approach**

1. **Pre‑launch: Proxy metrics & synthetic data** – generate pseudo‑labels using rule‑based heuristics or crowd‑source a small benchmark; use them to estimate baseline BLEU/ROUGE.  
2. **A/B testing framework** – deploy the RAG behind a feature flag and expose it to a controlled user segment while collecting interaction logs (click‑through, dwell time).  
3. **Post‑launch: Continuous evaluation** – set up dashboards for key metrics (response relevance scores from embedding similarity, user satisfaction surveys) and trigger alerts when drift is detected.

**Depth**

- *Synthetic labeling:* Run the RAG on a curated query set, then let domain experts grade outputs; compute precision/recall of retrieved passages.  
- *Embedding‑based relevance:* For each query–response pair, calculate cosine similarity between query embedding and top‑retrieved passage embeddings; use this as an automated proxy for quality (O(n log n) with approximate nearest neighbors).  
- *User‑centric metrics:* Capture time‑to‑answer, number of interactions before task completion.  
- Complexity: Pre‑launch evaluation is O(m × k) where m = synthetic queries, k = retrieved passages; post‑launch monitoring runs in real time with sub‑second latency.

**Edge Cases**

- If the knowledge base contains contradictory facts, relevance scores may be misleading—need to flag low‑confidence hits.  
- Cold start: Early users may see poor performance until enough interaction data accumulates.  
- Privacy: Ensure logs respect data‑anonymization policies.

**Optimize & Communicate**

- *Improvements:* Introduce active learning—flag uncertain responses and have experts label them, feeding back into the system to refine retrieval relevance thresholds.  
- *Narration:* “We’ll first simulate a realistic workload with synthetic labels to get a ballpark of performance. Then we’ll roll out an A/B test so real users provide organic feedback while we monitor embedding‑based relevance scores in real time. If we spot drift or low confidence, we’ll trigger active learning cycles to keep the model sharp.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
