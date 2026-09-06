---
qid: ing_9ddd143913__fp__local
question: 'Explain: Data Characteristics — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 385
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:41:08-05:00'
sources: []
---

**Data characteristics** are the *physics* of a learning problem—size, distribution, noise, sparsity, and temporal dynamics. In a system‑design interview you must treat them as constraints that dictate architecture, not as “nice‑to‑have” features.

1. **Scale & throughput**  
   • If \(N\) (records) × \(D\) (features) ≫ memory, you need distributed storage and streaming ingestion.  
   • Latency budgets force batch vs. online trade‑offs: a 10 ms SLA requires incremental updates rather than full retraining.

2. **Distribution shift**  
   • Non‑stationarity means the model must adapt; online learning or concept‑drift detectors become mandatory components.  

3. **Noise & missingness**  
   • High‑variance features demand robust loss functions (Huber, quantile) and imputation strategies that can be performed in situ.

4. **Feature sparsity**  
   • Sparse tensors justify compressed representations (CSR/CSC) and hashing tricks; they also influence the choice of kernel or embedding method.

5. **Label availability**  
   • If labels are scarce, semi‑supervised or self‑distillation pipelines must be incorporated.

---

### Non‑obvious insight

Most candidates forget that *data characteristics shape the entire data‑flow graph*, not just the model layer. For example, a sparse, high‑dimensional text corpus with heavy class imbalance will benefit from **feature‑level sharding** and **class‑weighted loss**, but also from **pre‑emptive sampling** at ingestion to avoid stragglers in distributed training. In other words, design your data pipeline first; the model is just a downstream consumer that inherits all upstream decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
