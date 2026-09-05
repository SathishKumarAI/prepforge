---
qid: ing_cfccb7f9ba__star__local
question: 'Explain: Evaluation Criteria — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 378
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:24:46-05:00'
sources: []
---

**Situation:**  
During my last role as a data scientist at a fintech startup, we were building an AI‑driven recommendation engine for loan products. Our prototype used a simple in‑memory k‑NN search on embeddings, but latency hit 250 ms per query and our model’s recall dropped to 65% when scaling to 500k customers.

**Task:**  
I was tasked with evaluating and migrating to a production‑ready vector database that could handle millions of vectors, provide sub‑millisecond similarity searches, and integrate seamlessly with our existing Spark pipeline.

**Action:**  
First, I defined clear criteria: query latency (< 30 ms), recall (> 90%), storage cost per GB, ease of scaling (horizontal sharding), SDK support for Python/Java, and community maturity. I benchmarked Milvus, Pinecone, Weaviate, and Qdrant using identical 128‑dim float embeddings from our model, measuring latency, throughput, and MRR on a test set. I also ran cost simulations in AWS for each cluster size. After evaluating trade‑offs—Milvus offered best raw speed but required manual sharding; Pinecone handled scaling automatically but was pricier—I decided to pilot Milvus with a 4‑node cluster.

**Result:**  
Post‑migration, query latency dropped to 12 ms and recall rose to 92%. The system now supports 2 million vectors with 30% lower storage cost than our prior setup. I learned that rigorous, metric‑driven evaluation is essential: real workloads, clear KPIs, and a willingness to trade operational overhead for performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
