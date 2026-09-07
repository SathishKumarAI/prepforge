---
qid: ing_5d6b828210__aws__local
question: 'Q: How do embedding models learn semantic similarity?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 412
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:57:06-05:00'
sources: []
---

**Answer (Amazon Way)**  

*Leadership Principles:* **Customer Obsession** – I always ask how the model’s similarity scores benefit the end‑user experience, and **Dive Deep** – I break down every component of the embedding pipeline.

**Situation / Task:**  
When launching a recommendation feature for our e‑commerce site, we needed an embedding model that could rank product pairs by semantic relevance. The goal was to improve click‑through rate (CTR) by at least 15 % within three months.

**Action:**  
I built a supervised contrastive learning framework on top of a pre‑trained Transformer (BERT). Tokens were fed through a pooling layer, then projected into a 512‑dimensional space with an MLP. The loss function combined **InfoNCE** and a *margin* term to push similar items together while keeping dissimilar ones apart.

I deployed the model on **Amazon SageMaker** for training (using Spot Instances to cut costs by 40 %) and served it via **SageMaker Endpoint** behind an **Application Load Balancer**. For scalability, I used **Kinesis Data Streams** to stream user interactions, feeding them into a nightly retraining job that refreshed embeddings every 24 h.

**Result:**  
CTR increased from 2.1 % to 2.4 % (≈ 14 % lift), and conversion rate rose by 8 %. The endpoint sustained 10k RPS with < 200 ms latency, while cost per inference dropped 30 % compared to the previous rule‑based system.

**Reflection:**  
I learned that a *contrastive loss* coupled with periodic retraining is essential for drifting product catalogs. Future iterations will experiment with **FAISS** for sub‑millisecond nearest‑neighbor queries to further reduce latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
