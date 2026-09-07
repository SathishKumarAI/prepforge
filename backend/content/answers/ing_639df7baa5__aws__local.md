---
qid: ing_639df7baa5__aws__local
question: 'Explain: Product Quantization (PQ) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 376
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:25-05:00'
sources: []
---

**Situation / Task**  
While leading the search‑engine team at a SaaS startup, we needed to scale similarity search for 200 M user embeddings (300‑dim vectors) on a budget of $2k/month. Traditional k‑NN was too slow and memory‑intensive.

**Action**  
I championed **Product Quantization (PQ)**, splitting each vector into *m* sub‑vectors and quantizing each to its nearest codeword from a small lookup table. I built an open‑source module that:
- Uses **Amazon DynamoDB** for the PQ index (high availability, 99.999 % SLA)  
- Stores embeddings in **S3** with **Glacier** tiering for cold data  
- Triggers **AWS Lambda** to rebuild codebooks nightly, keeping latency < 10 ms.  

I benchmarked against brute‑force: query time dropped from 350 ms → 8 ms (≈ 44× speedup) and RAM usage fell by 80 %. Revenue impact? We handled 5× the traffic without a new server tier, saving ~30 % of infra costs.

**Result**  
- **Customer Obsession**: Users experienced instant search; satisfaction scores rose from 78 → 92.  
- **Ownership & Deliver Results**: Took full ownership of PQ adoption, delivered measurable performance gains and cost savings within two sprints.

**Bar‑raiser notes** – I demonstrated *deep dive* into vector math, quantified impact (latency, memory, cost), and iterated on failure when initial codebooks over‑fitted; resolved by adding entropy regularization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
