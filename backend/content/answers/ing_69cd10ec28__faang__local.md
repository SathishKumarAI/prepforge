---
qid: ing_69cd10ec28__faang__local
question: 'Explain: ByteDance / TikTok — Faang Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 513
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:49:42-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise overview of the typical machine‑learning (ML) coding problems you’ll encounter in a ByteDance/TikTok FAANG‑style interview. I’ll assume they’re targeting senior ML engineers: questions that blend algorithmic thinking, statistical insight, and system‑scale awareness.

---

**Approach**  
1. List common problem themes.  
2. For each theme, give one representative question.  
3. Briefly note the key skills probed (e.g., time‑series, recommendation, NLP).  
4. Highlight expected complexity/edge cases.  

---

### Depth

| Theme | Representative Question | Core Skills Tested |
|-------|-------------------------|--------------------|
| **Recommender Systems** | *Design a real‑time collaborative filtering pipeline that scales to 1B users and 10M items.* | Matrix factorization, online learning, distributed processing. |
| **Time‑Series Forecasting** | *Predict next‑day user engagement for a viral video given sparse click logs.* | ARIMA/Prophet intuition, handling missing data, lag features. |
| **NLP & Content Moderation** | *Build a lightweight model to flag hate‑speech in 200 ms per comment on a live stream.* | Text embeddings, fast inference, precision‑recall trade‑off. |
| **A/B Testing & Causal Inference** | *Estimate uplift of a new recommendation algorithm when only observational data is available.* | Propensity scores, inverse probability weighting. |
| **Scalable ML Engineering** | *Implement an online learning loop that updates user embeddings every minute using Kafka streams.* | Streaming APIs, checkpointing, rollback strategy. |

- **Complexity**: Most problems expect \(O(n \log n)\) or better for core loops; distributed solutions may involve MapReduce/Apache Flink.
- **Edge Cases**: Cold‑start users, data sparsity, concept drift, latency budgets.

---

### Optimize & Communicate  
Emphasize modular design (feature extraction → model training → inference), unit tests for edge scenarios, and profiling to meet TikTok’s 200 ms per request SLA. Conclude by tying back to ByteDance’s mission: scalable, real‑time ML that drives engagement at a global scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
