---
qid: ing_0bcfc39c24__think__local
question: 'Explain: Cons — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 487
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:29:39-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   *Ask what “cons” means in this context (e.g., performance, maintenance, cost).*  
   *Assume a typical ML pipeline: data ingestion → preprocessing → model training → inference.*  
   *Presume the audience knows basic ML terms but may not be familiar with system‑engineering trade‑offs.*

**2. Adopt a layered mental model**  
   - **Data layer** (storage, streaming)  
   - **Compute layer** (training, inference workers)  
   - **Orchestration layer** (job schedulers, model registries)  
   - **Observability & governance** (monitoring, compliance).  

**3. Reason step‑by‑step through scalability challenges**  
   1. *Data volume*: larger datasets → higher I/O, longer ingestion times, need distributed storage.  
   2. *Model complexity*: deep nets require GPUs/TPUs; scaling training often means multi‑node parallelism (data or model parallelism).  
   3. *Real‑time inference*: latency constraints force low‑latency serving stacks; horizontal scaling can lead to state‑consistency issues.  
   4. *Feature engineering pipelines*: ETL jobs become bottlenecks; need incremental/streaming solutions.  
   5. *Deployment churn*: frequent model updates → versioning, A/B testing, rollback complexity.  

**4. Spot common traps**  
   - Assuming linear scaling of training time with data size.  
   - Ignoring cold‑start costs for new workers or containers.  
   - Overlooking the cost of data shuffling in distributed training.  
   - Treating inference latency as a one‑off metric; it degrades under load.

**5. Sanity‑check & articulate clearly**  
   *Re‑explain each layer’s bottleneck in plain terms, then link back to “cons”.*  
   *Use concrete examples (e.g., 10 GB of image data → 2× slower ingestion on a single node).*  
   *Conclude by summarizing that scalability hurts both performance and operational complexity unless the system is intentionally architected for distributed workloads.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
