---
qid: ing_cc09720a7b__faang__local
question: How do images become tokens, and why does image resolution drive inference
  cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 528
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:44-05:00'
sources: []
---

**Clarify**  
You’re asking how a pixel‑array is converted into the “tokens” that a vision transformer consumes, and why higher‑resolution images inflate inference time. I’ll assume we’re working with standard ViT‑style patch embeddings, no exotic pre‑processing.

**Approach**  
1. Describe tokenization: split image → patches → flatten → linear projection → positional encoding.  
2. Explain how resolution affects number of patches and thus tokens.  
3. Connect token count to transformer ops (self‑attention).  
4. Mention memory/compute scaling.

**Depth**  
- **Tokenization**: For an \(H \times W\) image, we choose patch size \(P\times P\). Number of patches \(N = \frac{HW}{P^2}\). Each patch is flattened to a vector of length \(P^2C\) (C=channels), then projected to hidden dim \(d\) via a learned weight matrix.  
- **Positional encoding**: Adds a unique bias per patch index, preserving spatial order.  
- **Inference cost**: A transformer layer does \(\mathcal{O}(N^2 d)\) work because self‑attention computes pairwise dot products between all token pairs. Thus, if resolution doubles (area ×4), \(N\) quadruples → cost increases by roughly 16×. Memory also scales as \(\mathcal{O}(N^2)\) for attention matrices.

**Edge cases**  
- Very small images: fewer patches, negligible overhead.  
- Extremely large images: memory may become the bottleneck before compute.  
- Non‑square or irregular shapes can break simple division; need padding or adaptive pooling.

**Optimize & communicate**  
To mitigate cost we can:  
1. Use *adaptive* patching (larger \(P\) for high‑res inputs).  
2. Replace full self‑attention with sparse or linear attention mechanisms (e.g., Performer, Linformer) to reduce \(\mathcal{O}(N^2)\) to \(\mathcal{O}(Nd)\).  
3. Employ patch‑wise downsampling early in the network.  

I’d explain these trade‑offs clearly: higher resolution gives richer detail but exponentially increases computation; sparse attention keeps fidelity while keeping latency reasonable. This structured reasoning demonstrates problem‑solving, technical depth, and clear communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
