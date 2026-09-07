---
qid: ing_fe9ce17c4e__faang__local
question: Your product has several distinct corpora - docs, tickets, code, CRM. How
  do you route queries?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 446
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:32:02-05:00'
sources: []
---

**Clarify**  
- *Goal*: When a user submits a natural‑language query, decide which corpus (docs, tickets, code, CRM) should be queried to return the most relevant answer.  
- *Assumptions to confirm*:  
  - All corpora are searchable via an API or vector store.  
  - We have labeled training data indicating which corpus a given query belongs to.  
  - Latency budget per request (e.g., <200 ms).  

**Approach**  
1. **Feature extraction** – tokenize, embed, and compute metadata scores for each candidate corpus.  
2. **Classifier** – a lightweight supervised model (log‑reg or small transformer) predicts the most suitable corpus.  
3. **Fallback** – if confidence < threshold, query all corpora in parallel and rank results by relevance score.  

**Depth**  
- Use sentence embeddings (e.g., Sentence‑BERT) for queries and corpus snippets; compute cosine similarity to nearest neighbor in each vector store.  
- Train a logistic regression on labeled data: features = {cosine_sim_docs, sim_tickets, sim_code, sim_crm, keyword_presence}.  
- Complexity: O(C·log N) per query (C=4 corpora, N≈size of vector index).  
- Trade‑offs: single‑corpus routing reduces latency; fallback keeps recall high.  

**Edge Cases**  
- Ambiguous queries (“how to reset password?” could belong to docs or CRM).  
- New corpus added → retrain classifier periodically.  
- Out‑of‑scope terms leading to low similarity across all corpora.  

**Optimize & Communicate**  
- Cache recent query embeddings and routing decisions for 5 min to amortize cost.  
- A/B test threshold values; monitor precision@k per corpus.  
- Present results: “We first route the query to the most relevant corpus via a lightweight classifier, then fall back to multi‑corpus search only when confidence is low—balancing latency and coverage.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
