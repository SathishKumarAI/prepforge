---
qid: ing_35cf6fa7f2__aws__local
question: 'Explain: Q10: Explain vector database indexing algorithms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 424
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:18-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a feature that exposed a recommendation engine to our e‑commerce customers. The team needed sub‑10 ms latency on millions of high‑dimensional product embeddings while staying within the $1M annual budget.

**Action**  
I chose an **IVF (Inverted File) + PQ (Product Quantization)** scheme for the vector store, implemented via Amazon OpenSearch Service’s *vector search* capability.  
- **Indexing algorithm:** IVF partitions vectors into 256 clusters; each cluster stores compressed PQ codes. This reduces disk I/O by ~90 % compared to brute‑force cosine similarity.  
- **AWS services used:**  
  - *OpenSearch* for distributed storage and query orchestration.  
  - *EC2 Spot Instances* (t3.large) for index build, lowering compute cost by 60 %.  
  - *S3* for durable raw embedding dumps and incremental rebuilds.  

I added a **re‑indexing pipeline** that runs nightly on a Lambda function triggered by S3 events, keeping the index fresh without impacting user traffic.

**Result**  
Latency dropped from 250 ms to 8 ms (4× faster), throughput increased from 200 to 1,200 queries per second, and we saved ~$120K annually versus the baseline.  

**Learning**  
The key takeaway was *Dive Deep*: profiling CPU vs I/O revealed that most cost came from disk seeks, not compute. By quantizing vectors, we traded a negligible 0.5 % recall loss for massive efficiency—an excellent example of *Invent & Simplify* while delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
