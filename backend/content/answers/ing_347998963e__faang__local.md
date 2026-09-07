---
qid: ing_347998963e__faang__local
question: 'Explain: Search Ranking — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 456
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:46:15-05:00'
sources: []
---

**1️⃣ Clarify**  
*What is a search‑ranking model?*  
We want an ML system that, given a query *q* and a set of candidate documents *D*, returns an ordered list \(\pi\) such that the top‑ranked items are most relevant to *q*.  
Assumptions:  
- Query–document relevance can be quantified (e.g., click‑through or human labels).  
- We have historical logs for training and a live ranking pipeline.  

**2️⃣ Approach**  
1. **Feature engineering** – query embeddings, term overlap, user signals, page quality metrics.  
2. **Model choice** – start with a pairwise RankNet/GBDT, then move to neural models (BERT + dot‑product).  
3. **Training objective** – pairwise hinge loss or listwise NDCG loss; use negative sampling to handle millions of candidates.  
4. **Serving** – pre‑compute document embeddings, cache query features, score in O(|D|) with GPU acceleration.  

**3️⃣ Depth**  
- *Complexity*: Training is \(O(N \log N)\) for pairwise, inference \(O(|D|)\).  
- *Trade‑offs*: GBDT gives fast inference but limited expressiveness; transformer models improve relevance but cost more compute and latency.  
- *Evaluation*: Offline AUC/NDCG + online AB tests on CTR/engagement.  

**4️⃣ Edge Cases**  
- Cold start queries → fallback to keyword matching.  
- Query drift → continual learning or periodic re‑training.  
- Sparse features → impute or use attention over missingness.  

**5️⃣ Optimize & Communicate**  
Iteratively profile latency, compress embeddings (quantization), and shard the serving cluster. Explain each step clearly: “We first reduce dimensionality to keep inference under 10 ms per query, then we fine‑tune on recent click data to capture trend shifts.” This demonstrates structured thinking, depth, and communication—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
