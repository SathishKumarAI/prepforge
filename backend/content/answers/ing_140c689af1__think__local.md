---
qid: ing_140c689af1__think__local
question: 'Explain: An enterprise wants semantic search over ~100M documents but is
  balking at vector-index infrastructure cost. Walk me through embedding compression
  options and the math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 692
total_tokens: 902
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:02:01-05:00'
sources: []
---

**1️⃣ Clarify the Problem & Set Assumptions**

- *Goal*: 100 M docs → one vector per doc (e.g., 768‑dim float32).  
- *Constraints*: Memory budget, latency, acceptable MRR drop.  
- *Assume*: Embeddings are L2‑normalized; search uses cosine/inner product; compression must be invertible or approximate.

**2️⃣ Mental Model: Quantization + Dimensionality Reduction**

Think of each vector as a point in ℝⁿ. Two orthogonal axes:

1. **Reduce dimensionality (n↓)** → fewer bytes per vector, but lose discriminative power.
2. **Quantize values (bit‑width ↓)** → coarser representation, but still keep n.

Combine: *product quantization*, *scalar/vector quantization*, *PCA/LSH*.

**3️⃣ Step‑by‑Step Reasoning**

| Option | Math & Size | Compression Ratio | Typical MRR Impact |
|--------|-------------|-------------------|--------------------|
| **Full float32 (n=768)** | 4 bytes × 768 = 3072 B | 1× | 100 % |
| **8‑bit scalar quantization** | 1 byte × 768 = 768 B | ≈4× | <5 % loss |
| **Product Quantization (PQ)**: split into m subspaces, each k‑level codebook | (m × log₂k) bits per vector | e.g., m=16, k=256 → 8 bytes → 384× | <3 % loss |
| **PCA to d=128** | 4 B × 128 = 512 B | ≈6× | ~10–15 % drop |
| **PQ + PCA** (d=128, m=16,k=256) | 8 bytes | ≈384× | <5 % loss |

*Compute cost*:  
`Memory ≈ #docs × bytes_per_vec`.  
For 100M docs:  
- Full float32 → ~307 GB.  
- PQ (8 B) → ~800 MB.

**4️⃣ Common Traps**

- **Ignoring L2‑norm**: Quantization breaks cosine similarity unless you re‑normalize or use asymmetric distance.  
- **Over‑compressing**: 1‑bit per dimension destroys structure; avoid if MRR <80 %.  
- **Assuming linearity**: PCA assumes variance → discriminative power; fine‑tune with a validation set.

**5️⃣ Sanity‑Check & Communicate**

- *Quick sanity*: 100M × 8 B = 800 MB – fits on commodity SSD.  
- *Explain trade‑off*: “We’ll lose ~4 % MRR for a 384× memory reduction.”  
- *Validate*: Run A/B on a sample (e.g., 1 M docs) before full rollout.

This framework lets you iterate compression settings, quantify savings and performance loss, and decide the sweet spot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
