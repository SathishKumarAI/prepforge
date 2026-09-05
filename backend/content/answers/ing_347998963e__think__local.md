---
qid: ing_347998963e__think__local
question: 'Explain: Search Ranking — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 392
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:30:14-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Confirm whether the interviewer wants a high‑level overview or a deep dive into algorithms (e.g., BM25, learning‑to‑rank).  
- Assume they’re familiar with basic ML concepts but not the specifics of ranking systems.  

**2️⃣ Adopt a mental model**  
- Think of ranking as an *inference problem*: given query + candidate set → score vector → sorted list.  
- Map it to classic ML stages: feature extraction, representation learning, loss design, and inference.  

**3️⃣ Step‑by‑step reasoning**  
1. **Problem framing** – relevance prediction vs. ranking objective.  
2. **Feature pipeline** – lexical, semantic, user‑behavior signals.  
3. **Model choices** – pointwise (regression), pairwise (SVM‑rank, RankNet), listwise (LambdaMART).  
4. **Training loss & evaluation** – cross‑entropy, hinge, NDCG, MAP.  
5. **Inference & efficiency** – score all candidates vs. retrieval + re‑ranking.  

**4️⃣ Common pitfalls to avoid**  
- Mixing up *relevance* and *ranking* objectives.  
- Overlooking the importance of query‑dependent features.  
- Assuming a single loss works for all ranking scenarios.  

**5️⃣ Sanity‑check & verbalize**  
- Rephrase each step in plain terms (e.g., “we first turn text into vectors, then learn which ones matter most”).  
- Ask: “Does this align with what we see in real engines like Google or Elasticsearch?”  
- End with a quick example (e.g., query “wireless headphones” → feature extraction → LambdaMART training → top‑k output).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
