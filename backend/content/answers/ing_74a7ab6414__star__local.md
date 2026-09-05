---
qid: ing_74a7ab6414__star__local
question: 'Explain: Sources — Cohere'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 378
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:27:48-05:00'
sources: []
---

**Situation:**  
At my previous startup we were launching a recommendation engine for a niche e‑commerce site. The product catalog was constantly growing, and our search team needed to surface highly relevant items based on user queries in real time.

**Task:**  
I had to design a system that could ingest the ever‑changing text data (product titles, descriptions, reviews) into Cohere’s embeddings API, maintain an up‑to‑date vector index, and serve similarity searches with sub‑100 ms latency for 50k concurrent users.

**Action:**  
First, I set up a Kafka stream to capture every product update. Each message triggered a lambda that called Cohere’s `embed` endpoint (using the `large` model for higher semantic depth). The resulting vectors were stored in an approximate nearest neighbor index built with Faiss on a GPU‑enabled cluster. To keep source provenance, I tagged each vector with a `source_id` pointing back to the original product record and a `timestamp`. For performance, I batched 1k embeddings per request and used Cohere’s batch API, reducing round‑trip time by ~70%. Finally, I built a lightweight REST layer that queried Faiss, returned top‑10 matches, and logged each hit for audit.

**Result:**  
Within three weeks we achieved a 40 % lift in click‑through rate on search results. Latency stayed below 90 ms even under peak load, and the source tags allowed us to trace every recommendation back to its product record, simplifying debugging and compliance audits. I learned how to balance embedding quality against cost by choosing Cohere’s models strategically and the importance of robust data pipelines for real‑time AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
