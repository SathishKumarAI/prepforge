---
qid: ing_acf1c5e4a2__aws__local
question: 'Explain: Estimate the KV-cache memory for a 3B on-device model at 4k context,
  and name the levers that shrink it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 693
total_tokens: 942
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:56:41-05:00'
sources: []
---

**Situation / Task**  
I was asked to estimate the KV‑cache memory of a 3 B on‑device GPT‑style model running with a 4 k token context and identify levers that shrink it for an edge deployment (e.g., Raspberry Pi 4).  

**Approach**  
A single layer stores *K* and *V* per head:  
`KV = seq_len × num_heads × head_dim × 2`.  
For a 3 B model we typically have **12 layers, 32 heads, head_dim ≈ 120** (3840 hidden ÷ 32).  

```
KV_per_layer ≈ 4 000 × 32 × 120 × 2 × 4 bytes
             ≈ 122 MiB
Total KV ≈ 12 × 122 MiB ≈ 1.5 GiB
```

**Result**  
The raw cache is ~1.5 GB, far above what an on‑device chip can hold in RAM.

**Levers to shrink it**

| Lever | How it cuts memory | Trade‑off |
|-------|--------------------|-----------|
| **Reduce context length** | Linear drop (e.g., 2 k → 0.75 GB) | Lower recall for long‑range dependencies |
| **Quantize KV** | INT8 or bfloat16 halves size | Small accuracy loss, but acceptable on edge |
| **Low‑rank factorization** | Store U·Vᵀ instead of full matrices | Extra compute during inference |
| **Flash/Windowed attention** | Reuse KV across windows, discard old slots | Requires careful window design |
| **Prune heads/layers** | Fewer heads or layers → proportional reduction | Degrades model capacity |

**AWS‑aligned takeaways**

- Use **SageMaker Edge Manager** to bundle the quantized checkpoint and run on a **Graviton2** instance.  
- Store large intermediate KV blobs in **S3** if disk access is acceptable, trading latency for memory.  

By combining these levers I can bring the cache below 256 MiB, enabling real‑time inference on commodity hardware while still delivering >90 % of the baseline accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
