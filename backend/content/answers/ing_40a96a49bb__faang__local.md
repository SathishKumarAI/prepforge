---
qid: ing_40a96a49bb__faang__local
question: 'Explain: Cost Optimization Patterns — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 489
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:14:27-05:00'
sources: []
---

**Clarify**

The interview asks how we keep AI‑model training and inference economical when deployed at massive scale (e.g., millions of requests/day). I’ll assume we’re talking about GPU/TPU clusters in the cloud, autoscaling pipelines, and model serving with low latency.

---

**Approach**

1. **Resource right‑sizing & auto‑scaling**  
2. **Model compression & quantization**  
3. **Serverless / spot‑instance usage**  
4. **Caching & batch inference**  
5. **Observability & cost dashboards**

---

**Depth**

| Pattern | How it saves money | Typical metrics |
|---------|-------------------|-----------------|
| *Right‑sizing + autoscale* | Spin down idle nodes; use GPU types that match compute intensity. | Utilization > 70% → keep, < 30% → de‑provision |
| *Model compression/quantization* | Reduce FLOPs and memory footprint by 4–8× (INT8, pruning). | Latency ↑ <5%, cost ↓ ≈ 60% |
| *Spot / preemptible instances* | Pay ~70% less; risk of eviction handled by checkpointing. | Spot usage % ≥ 80% |
| *Batch inference & caching* | Process 100+ requests per GPU run; cache frequent embeddings. | Throughput ↑ ×10, cost ↓ ≈ 50% |
| *Observability* | Real‑time dashboards spot underutilized clusters and stale models. | Cost anomalies flagged in < 5 min |

---

**Edge Cases**

- **Burst traffic**: autoscale may lag → add a burst buffer tier.  
- **Model drift**: compressed models can degrade accuracy; monitor AUC drift.  
- **Spot evictions**: checkpointing overhead might offset savings if eviction rate > 20%.

---

**Optimize & Communicate**

Start with a baseline cost‑model, then iterate: first right‑size, next compress, finally spot‑shift. Present ROI per change and keep stakeholders updated via dashboards. This layered approach aligns with FAANG’s data‑driven, incremental optimization culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
