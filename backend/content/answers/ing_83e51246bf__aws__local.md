---
qid: ing_83e51246bf__aws__local
question: 'Explain: Vector search: exact vs ANN — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 425
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:12-05:00'
sources: []
---

**Situation / Task**  
At my previous company we built a conversational AI that had to surface the most relevant FAQ snippets in < 200 ms for 10k concurrent users. The naive exact‑vector search on an Elasticsearch cluster was ~ 1 s per query and didn’t scale.

**Action**  
I proposed a hybrid Retrieval-Augmented Generation (RAG) pipeline:

| Component | AWS Service | Design |
|-----------|-------------|--------|
| **Vector index** | Amazon Kendra / OpenSearch with ANN plugin (HNSW) | Build an HNSW graph on the 1 M‑sentence corpus; use `search.knn` for sub‑second approximate nearest neighbors. |
| **Exact filter** | DynamoDB & Lambda | After ANN returns top‑k candidates, a Lambda refines them by exact cosine similarity using pre‑computed norms stored in DynamoDB. |
| **Gen model** | SageMaker Endpoint (LLM) | Feeds the refined snippets to a fine‑tuned LLM; response time < 400 ms. |

I benchmarked latency and cost: ANN reduced query time from 1 s → 200 ms (5× faster) while cutting CPU usage by 70 %. The exact filter maintained 99.8 % precision, so overall accuracy stayed high.

**Result**  
The new pipeline handled 15k RPS with a 95 % SLA and lowered operational cost from $12k/month to $4k/month—an 66 % savings—while improving user satisfaction scores by 12 points.

**Reflection**  
I learned that *Ownership* means iterating until the right trade‑off is found, and *Dive Deep* ensures we validate assumptions with data. This experience helped me advocate for a balanced exact/ANN strategy in future AI projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
