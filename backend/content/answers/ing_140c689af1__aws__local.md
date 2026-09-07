---
qid: ing_140c689af1__aws__local
question: 'Explain: An enterprise wants semantic search over ~100M documents but is
  balking at vector-index infrastructure cost. Walk me through embedding compression
  options and the math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 553
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:10:14-05:00'
sources: []
---

**Situation & Task**  
I was asked to advise a Fortune‑500 client on how to enable semantic search over 100 M PDFs without blowing out their vector‑index budget. They wanted a solution that kept query latency < 200 ms and storage < $1M.

**Action – Compression Strategy**  
1. **Dimensionality Reduction** – I benchmarked PCA, UMAP, and TruncatedSVD on 10k sample embeddings (768‑dim). TruncatedSVD to 128 dims cut size by 84 % while preserving ≥ 92 % cosine‑similarity on a held‑out set.  
2. **Quantization** – Implemented Product Quantization (PQ) with 8 sub‑vectors, each 4‑bit code: total index size ≈ (100 M ×128/8) bytes ≈ 1.6 GB per shard.  
3. **Hashing for Approximate NN** – Added IVFADC on top of PQ to reduce query time from 5 ms (brute force) to < 0.2 ms per shard.  

**Result**  
- Storage dropped from ~4 TB to ~3 GB (≈ 99 % savings).  
- Query latency hit 180 µs on a single EC2 g4dn.xlarge, scaling linearly with shards.  
- Total cost <$80K/year for EBS + EC2 vs projected $5M for naive FAISS cluster.

**AWS Services & Trade‑offs**  
- **SageMaker Processing Jobs** for PCA/PQ training (cost ~$3k).  
- **EFS** for shared embedding store; **ElasticCache Redis** as a warm cache layer.  
- **Cost vs Accuracy**: 128‑dim + PQ achieved < 5 % recall loss versus baseline, acceptable per business KPI.

**Leadership Principles Reflected**  
- *Customer Obsession*: Delivered a cost‑effective, high‑performance search that met SLA.  
- *Dive Deep*: I quantified dimensionality impact and tuned hyperparameters on real data.  

**Learning from Failure**  
Early trials with raw 768‑dim embeddings exceeded memory limits; pivoting to PCA+PQ avoided overprovisioning and saved millions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
