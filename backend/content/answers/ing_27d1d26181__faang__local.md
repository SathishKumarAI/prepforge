---
qid: ing_27d1d26181__faang__local
question: You have thumbs-up/down and click logs from a live RAG product. How do you
  turn that into retrieval improvements?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 430
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:16:11-05:00'
sources: []
---

**Clarify**  
We’re given binary feedback (thumbs‑up/down) on documents returned by a Retrieval‑Augmented Generation (RAG) system and the raw click logs that show which snippets users actually open or skip. The goal: use this data to improve future retrieval quality.  
*Assumptions:* each query has at least 10 retrieved docs, feedback is timely, clicks correlate with relevance, and we can re‑rank or adjust vector embeddings.

**Approach**  
1. **Label extraction:** treat thumbs‑up as positive relevance, down as negative; augment with click‑through rate (CTR) as a soft signal.  
2. **Feature engineering:** for each query–doc pair compute embedding similarity, term overlap, positional features, and historical CTR.  
3. **Model training:** fine‑tune a lightweight ranking model (e.g., LambdaMART or a small neural net) on these labels to predict relevance scores.  
4. **Retrieval adjustment:** use the learned scoring function as an additional re‑ranking layer over the base dense retriever, optionally updating document embeddings via gradient steps.

**Depth**  
- Complexity: training is O(N log N) per epoch; inference adds a linear re‑rank cost on top of vector search.  
- Trade‑offs: heavier models give marginal gains but increase latency; lightweight models keep latency low while still leveraging feedback.

**Edge Cases**  
- No thumbs‑up for a query → fall back to baseline ranking.  
- Skewed feedback (few negatives) → apply class weighting or synthetic down samples.  
- Click bias (position effects) → debias using position‑aware CTR estimators.

**Optimize & Communicate**  
Iterate with A/B tests: measure NDCG@10 and user satisfaction. Report improvements as “+3 % precision, +0.2 s latency.” Emphasize that the system continuously learns from live interactions, turning passive signals into an active ranking loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
