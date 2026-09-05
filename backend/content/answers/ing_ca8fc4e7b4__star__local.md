---
qid: ing_ca8fc4e7b4__star__local
question: 'Explain: Optimal Candidate Count — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 258
total_tokens: 493
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:17-05:00'
sources: []
---

**Situation:** In a hiring platform I was tasked with improving our AI‑driven resume ranking pipeline. The current system returned the top 200 candidates per job, but we were seeing diminishing returns—most clients only reviewed the first 30 to 40 profiles.

**Task:** Reduce the candidate list size to an optimal count that balances relevance and diversity while keeping processing time low, without hurting placement rates.

**Action:** I introduced a two‑stage reranking strategy. First, I trained a lightweight gradient‑boosted model on click‑through data to score all 200 candidates. Second, I applied a diversity filter using cosine similarity over embedding vectors from a transformer encoder, ensuring no more than 15% of the top 50 were from the same industry or location. I also set up an A/B test to tune the cutoff between 30 and 45 candidates based on conversion metrics.

**Result:** The optimal count settled at 38 candidates, cutting client review time by 28% and increasing placement success by 12%. I learned that combining relevance scoring with explicit diversity constraints yields a more efficient, higher‑quality candidate shortlist.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
