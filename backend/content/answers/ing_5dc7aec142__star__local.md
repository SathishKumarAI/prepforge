---
qid: ing_5dc7aec142__star__local
question: 'Q: Why is Reciprocal Rank Fusion (RRF) safer than "Simple Score Addition"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 288
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:35:42-05:00'
sources: []
---

**Situation:** In a client‑facing search product we were merging results from three heterogeneous ranking engines (BERT‑based semantic, keyword, and popularity). The initial prototype simply summed their raw scores to produce the final list.

**Task:** I had to design a fusion strategy that would reduce the risk of a single engine’s noise dominating the top ranks while still preserving relevance.

**Action:** I replaced score addition with Reciprocal Rank Fusion (RRF), computing score = Σ 1/(k + rank_i) for each document across engines. I set k=60 to dampen high‑rank penalties, implemented it in Python using NumPy for speed, and added a sanity check that any document appearing in the top 10 of at least two engines automatically moved up.

**Result:** After deploying RRF, the mean reciprocal rank (MRR) rose from 0.42 to 0.56, click‑through increased by 18%, and we saw a 25% drop in outlier spikes where one engine’s mis‑ranking caused poor top‑10 lists. I learned that weighting by reciprocal rank naturally tempers extreme scores and that simple addition can amplify noise when engines are unevenly calibrated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
