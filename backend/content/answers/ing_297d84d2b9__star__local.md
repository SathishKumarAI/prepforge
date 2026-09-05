---
qid: ing_297d84d2b9__star__local
question: 'Q: When would you use ColBERT over a bi-encoder?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 396
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:51:29-05:00'
sources: []
---

**Situation** – At my last role I was tasked with revamping the product recommendation engine for a mid‑size retailer that had 2 million SKUs and an average session length of 4 seconds. Our existing bi‑encoder model could generate candidate lists in under 200 ms, but recall on “search by description” queries hovered around 58 %, which hurt conversion.

**Task** – I needed to lift top‑k recall to at least 75 % while keeping inference latency below 250 ms per request and staying within the same GPU budget.

**Action** – I benchmarked a ColBERT architecture because it keeps token‑level interactions in memory and only performs a lightweight similarity search over pre‑indexed embeddings. I built an index with FAISS on GPU, tuned the nprobe parameter to balance speed/accuracy, and added a small re‑ranking step that re‑weights by product popularity. For comparison, I ran the same bi‑encoder through a dense retrieval pipeline but observed its cosine scores plateaued at 0.68 even after hyperparameter sweeps.

**Result** – Switching to ColBERT raised recall from 58 % to 78 % on our A/B test set, and end‑to‑end latency remained at ~230 ms. Revenue lift was estimated at +3.2 % in the pilot month. I learned that token‑wise interaction models like ColBERT excel when the vocabulary is large and queries are short, whereas bi‑encoders are preferable for ultra‑low latency or very few query tokens.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
