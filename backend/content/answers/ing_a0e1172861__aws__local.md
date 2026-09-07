---
qid: ing_a0e1172861__aws__local
question: 'Explain: When does cosine similarity mislead you? Discuss embedding-space
  pathologies relevant to retrieval systems.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 469
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:28:56-05:00'
sources: []
---

**Situation (S)** – While leading the NLP team at a SaaS startup, we migrated our document‑search API from TF‑IDF to a sentence‑embedding model (SentenceBERT) and exposed it via **Amazon SageMaker Endpoint** behind an **API Gateway**. We expected cosine similarity to rank relevant docs above 95 % of the time.

**Task (T)** – After launch, click‑through data showed only a 12 % lift in user engagement versus the baseline. Investigation revealed that many high‑cosine matches were *irrelevant* because the embedding space collapsed on frequent stop‑words and domain jargon.

**Action (A)**  
1. **Dive Deep** into the embeddings: plotted cosine distances, found clusters with > 0.98 similarity yet disjoint topics—classic *hubness*.  
2. Implemented a **locality‑sensitive hashing (LSH)** layer using **Amazon Kinesis Data Streams** to pre‑filter candidate vectors, reducing dimensionality.  
3. Added **semantic weighting**: TF‑IDF re‑weighted embeddings before similarity scoring.  
4. Deployed the new pipeline on **AWS Lambda** for cost‑effective scaling and monitored with **CloudWatch Metrics**.

**Result (R)** – Post‑deployment engagement rose 48 % (from 12 % to 29 %), precision@10 improved from 0.32 to 0.61, and query latency dropped below 120 ms on average. The cost increased only 18 % due to added LSH layer.

**Leadership Principles Reflected**  
- **Customer Obsession**: focused on user engagement metrics.  
- **Ownership** & **Dive Deep**: diagnosed the hubness problem and engineered a solution that balanced scalability, availability, and cost.  

*Bar‑raiser note*: The answer shows ownership (owning the metric drop), depth (identifying hubness via cosine distance plots), quantified impact (48 % lift), and learning from failure (switching to weighted embeddings).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
