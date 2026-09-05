---
qid: ing_90bdb03e7f__star__local
question: 'Explain: Derive the KV cache memory formula and compute it for a concrete
  model.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 369
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:25-05:00'
sources: []
---

**Situation:**  
While working on a real‑time translation service, our team noticed that the KV cache was consuming almost 40 % of GPU memory, limiting batch size to two sequences of length 512.

**Task:**  
I needed to derive a clear formula for KV cache memory usage and calculate it for our BERT‑style transformer (12 layers, hidden size 768) so we could quantify savings from pruning attention heads.

**Action:**  
The KV cache stores keys and values per layer:  
`CacheSize = Batch × SeqLen × NumLayers × HeadDim × 2`.  
With `HeadDim = HiddenSize / NumHeads`, the formula becomes  
`CacheSize = B × L × H × (Hid/NumHeads) × 2`.  
For our model: `B=2`, `L=512`, `H=12`, `Hid=768`, `NumHeads=12`.  
Plugging in: `CacheSize = 2 × 512 × 12 × (768/12) × 2 ≈ 9.4 MB` per layer, totaling ~113 MB for all layers.  
After pruning to 8 heads, the calculation dropped to ~75 MB, freeing 38 % of memory.

**Result:**  
We increased batch size from two to four sequences without GPU stalls, cutting inference latency by 18 %. The exercise also reinforced my understanding of how KV cache scales with model depth and head count, guiding future architectural choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
