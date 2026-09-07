---
qid: ing_632df42191__aws__local
question: 'Explain: A colleague wants to move the semantic layer to the cloud so you
  can use a much bigger model. Walk me through the latency budget.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 579
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:09:19-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role we had a semantic‑layer service that ran on an on‑prem GPU cluster. A teammate proposed migrating it to the cloud to enable a larger transformer model (from 3 B to 12 B parameters). The key requirement was to keep the end‑to‑end latency under **120 ms** for real‑time customer queries.

**Action (A)**  
I scoped the new architecture:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Inference | **Amazon SageMaker Neo + Lambda@Edge** | Neo compiles the 12 B model to run on edge‑optimized hardware, cutting GPU inference time by ~60 %. |
| Data prep | **AWS Glue** | Extract–transform step runs in parallel on EMR clusters; latency < 20 ms. |
| API gateway | **Amazon API Gateway + Lambda** | Handles request routing with 1 ms cold start via provisioned concurrency. |
| Caching | **ElastiCache (Redis)** | Stores frequently requested embeddings, reducing inference to < 30 ms for cache hits. |

I ran a *latency budget* simulation:  
- Glue ETL: 15 ms  
- Lambda API: 5 ms  
- Neo inference (12 B): 70 ms (on GPU) → reduced to **28 ms** after Neo compiles to CPU‑optimized binary.  
- Redis cache hit: 10 ms  
Total worst‑case ≈ **120 ms**, meeting the requirement.

**Result (R)**  
After deployment, we observed a **35 % reduction in user wait times** and a **22 % increase in throughput** for high‑volume queries. The cost per inference dropped from $0.12 to $0.08 due to efficient GPU usage and cache hit rate of 68 %.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – ensuring latency stays within user‑acceptable bounds.  
- **Ownership & Dive Deep** – I led the end‑to‑end design, quantified trade‑offs, and iterated on the budget until metrics aligned.

### Bar‑raiser Takeaway  
- Demonstrated *ownership* by taking initiative to redesign the stack.  
- Showed *depth* through a clear latency budget and concrete AWS service choices.  
- Quantified impact with real numbers (latency, cost, throughput).  
- Learned from early cold‑start experiments, leading to provisioned concurrency and Neo compilation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
