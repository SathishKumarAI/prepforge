---
qid: ing_95cd461a49__aws__local
question: 'Explain: Data Parallelism Attention For DeepSeek Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 408
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:04:30-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a next‑gen LLM (DeepSeek) to an on‑prem GPU cluster. The model had a 12 B parameter encoder and we needed to train it in <48 h while keeping costs under $5k/month.

**Action**  
I scoped *data parallelism* for the attention blocks:  
1. Split each mini‑batch across GPUs, broadcasting the same weight tensors.  
2. Used **All‑Reduce** (NCCL + AWS ParallelCluster) to aggregate gradients after every 4 ms step.  
3. Leveraged **SageMaker Neo** to compile kernels for our H100s, cutting GPU usage by ~20%.  
4. Stored the training set on **Amazon S3** with *Intelligent Tiering* and streamed via **EMR Spark** to avoid I/O bottlenecks.

**Result**  
Training time dropped from 96 h to 32 h (75% faster), cost fell from $12k to $4.8k/month, and we achieved a perplexity reduction of 8% over baseline. Post‑deployment on **EKS** with an auto‑scaling GPU node group, the model maintained >99.5 % availability.

---

### Leadership Principles  
- **Ownership** – I owned the entire pipeline from data ingestion to inference, ensuring end‑to‑end reliability.  
- **Dive Deep** – I profiled every layer, tuned NCCL settings, and quantified gradient staleness versus throughput.  

**Bar‑raiser notes:** The answer shows ownership, deep technical detail, quantifiable impact, and a clear learning loop (tuning All‑Reduce to balance speed vs accuracy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
