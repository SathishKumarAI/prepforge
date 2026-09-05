---
qid: ing_cf1be51559__star__local
question: 'Explain: The Gap Problem — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 337
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:23:22-05:00'
sources: []
---

**Situation**  
At my previous company we launched a knowledge‑base chatbot for the sales team. The initial model was a pure semantic retriever; it answered most queries but frequently missed relevant documents because of vocabulary mismatch. Sales reps complained that answers were often “too generic” and they had to dig through several pages manually.

**Task**  
I needed to reduce the “gap problem” – the disconnect between user intent expressed in natural language and the indexed content – while keeping latency under 800 ms for real‑time support.

**Action**  
I built a hybrid search pipeline. First, I added a lightweight keyword matcher (BM25) on top of our vector index to catch exact phrase matches. Then, I fine‑tuned an encoder on a domain‑specific corpus and introduced a relevance re‑ranking step that weighted BM25 scores with cosine similarity from the embeddings. To keep latency low, I deployed the re‑ranker as a microservice behind a caching layer and used approximate nearest neighbor (FAISS) for retrieval. Finally, I set up A/B testing to monitor precision@3 and user satisfaction.

**Result**  
The hybrid system lifted answer precision from 0.62 to 0.81 and reduced average click‑through time by 35 %. Sales reps reported a 25 % decrease in time spent searching. I learned that blending sparse and dense retrievals can effectively bridge the gap problem while maintaining production‑grade performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
