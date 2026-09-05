---
qid: ing_353d8a90cc__star__local
question: 'Explain: Scaling & ops — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 359
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:36-05:00'
sources: []
---

**Situation** – In my last role at a fintech firm we had an internal knowledge‑base chatbot that answered compliance queries. It worked well with our small dataset but started lagging when the legal team added 50 GB of new documents and users spiked to 3,000 concurrent sessions during audit season.

**Task** – I needed to scale the Retrieval-Augmented Generation (RAG) assistant so it could serve real‑time answers with <200 ms latency while keeping costs under our $10K/month budget.

**Action** – First, I re‑engineered the embedding pipeline: switched from a single large BERT model to an approximate nearest‑neighbor index using FAISS on GPUs, reducing query time by 70 %. Next, I containerized the retrieval service with Docker and orchestrated it via Kubernetes, auto‑scaling based on CPU usage. For cost control, I implemented spot‑instance bidding for GPU nodes and added a caching layer (Redis) to store top 1,000 most‑queried embeddings. Finally, I set up Prometheus/Grafana dashboards to monitor latency, error rates, and cost per query.

**Result** – The assistant’s average response time dropped from 650 ms to 180 ms, handling 3,500 concurrent users with a 99.9% uptime. Operational costs fell to $7.8K/month, saving 22 %. I learned that combining vector‑search optimization with dynamic scaling and real‑time observability is key to running enterprise RAG at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
