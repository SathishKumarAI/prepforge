---
qid: ing_30d4e90c02__star__local
question: 'Explain: Sliding Window Attention (SWA) — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 345
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:06:16-05:00'
sources: []
---

**Situation**  
At my last role I was building a real‑time video captioning system that needed to run on edge devices with only 2 GB RAM and a single GPU. The baseline transformer used global self‑attention, which blew out memory after just 32 tokens.

**Task**  
I had to redesign the attention module so the model could process long audio–visual streams in real time while keeping inference latency under 50 ms per frame.

**Action**  
I implemented Sliding Window Attention (SWA). Instead of computing pairwise scores across all positions, I partitioned each token sequence into overlapping windows of size 64 with a hop of 32. Within each window I ran full self‑attention; between windows I used a lightweight cross‑window attention that only connected the boundary tokens. This reduced memory from O(n²) to roughly O(2 n w), where w is the window size, and allowed me to cache intermediate keys/values per window. I also added a learned relative positional bias so the model could still capture long‑range dependencies across windows.

**Result**  
The SWA‑based transformer cut GPU memory usage by 70 % (from 4 GB to 1.2 GB) and maintained BLEU scores within 3 % of the full‑attention baseline. Inference latency dropped from 120 ms to 35 ms, enabling live captioning on the target device. I learned that careful window design can preserve model expressiveness while meeting strict hardware constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
