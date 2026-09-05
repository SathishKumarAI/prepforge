---
qid: ing_72aeb26a1f__star__local
question: 'Explain: Data & context strategy — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 375
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:16:54-05:00'
sources: []
---

**Situation**  
When I joined the content‑delivery team at a media startup, our recommendation engine was stuck on keyword matching; click‑through rates for new articles dipped to 3 % and search latency hovered around 1.2 s.

**Task**  
I was tasked with building a data & context strategy that could surface relevant content via semantic search while keeping response times under 500 ms, and boosting engagement by at least 20 %.

**Action**  
First, I mapped our article corpus into contextual embeddings using the open‑source Sentence‑Transformers model fine‑tuned on our domain headlines. I stored vectors in Pinecone, a managed vector database that offers sub‑millisecond nearest‑neighbor queries. To enrich context, I appended metadata tags (topic, author sentiment) and built an index that weighted these fields during similarity scoring. For latency control, I introduced a two‑stage retrieval: a fast cosine‑distance filter on the top 200 candidates, followed by a BERT re‑ranker for the final 10 results. I integrated this pipeline into our FastAPI service and added cache layers with Redis.

**Result**  
Within three weeks of rollout, search latency dropped to 320 ms and click‑through rates climbed from 3 % to 4.8 %, a 60 % lift. The semantic model also reduced false positives by 35 %. I learned that combining lightweight vector search with selective re‑ranking balances relevance and speed, and that continuous monitoring of embeddings drift is essential for long‑term performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
