---
qid: ing_529b0af041__star__local
question: 'Explain: KV Cache Tiling — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 350
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:13:31-05:00'
sources: []
---

**Situation** – In my last role, we were deploying a GPT‑style model to a mobile edge device with only 2 GB of RAM. The KV cache for a 16‑token prompt consumed about 1.5 GB, leaving no room for the rest of the pipeline and causing out‑of‑memory crashes during inference.

**Task** – I had to reduce the KV cache footprint by at least 40 % without sacrificing latency or model accuracy, so the model could run continuously on the device.

**Action** – I implemented a *KV cache tiling* strategy:  
1. Partitioned the key/value tensors into tiles matching the transformer’s attention heads (e.g., 64‑token slices).  
2. Stored each tile in a compressed format using product quantization, reducing per‑tile size by ~3×.  
3. Added an LRU eviction policy that kept only the most recent tiles in RAM; older tiles were swapped to flash with on‑the‑fly decompression during attention computation.  
4. Leveraged CUDA’s cooperative groups to overlap tile fetches and matrix multiplications, keeping GPU utilization above 70 %.

**Result** – The KV cache size dropped from 1.5 GB to 0.8 GB, meeting the memory budget. End‑to‑end latency increased by only 7 %, and BLEU scores on our downstream NLG task stayed within 0.2 points of baseline. I learned that careful tile granularity and compression can reconcile strict memory limits with real‑time inference demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
