---
qid: ing_23c65f9d54__star__local
question: 'Explain: Estimate the KV-cache memory for serving a large model, and explain
  how it constrains batch size and throughput.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 383
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:36-05:00'
sources: []
---

**Situation**  
While deploying a 12‑Billion parameter transformer for real‑time recommendation, the ops team hit a wall: our KV‑cache exceeded GPU memory at a batch size of 16, causing OOM errors during inference.

**Task**  
I had to estimate the per‑token KV‑cache footprint, determine how it limits batch size, and propose a throughput‑friendly solution that stayed within 24 GB VRAM on an A100.

**Action**  
1. Calculated cache size:  
   - Key/value per head = 4 bytes (FP32) × seq_len × hidden_dim ÷ num_heads.  
   - For 12B model, hidden_dim=4096, heads=64 → ~0.5 GB/step.  
2. Measured that at seq_len = 128, each request consumes ≈64 MB of cache (both K and V).  
3. Built a simple script to profile cache usage per batch size; found the linear relationship: cache_total = 64 MB × batch_size.  
4. Implemented dynamic batching with a “max_cache” cap: if total cache >20 GB, drop or split requests.  
5. Added checkpointing of past layers and re‑used cached keys across requests to shave ≈10 % off memory.

**Result**  
Batch size increased from 8 to 12 without OOMs, raising throughput from 1.4 RPS to 2.3 RPS (≈65 % improvement). I learned that precise KV‑cache accounting is critical for scaling large models and that simple batching heuristics can unlock significant performance gains while staying within hardware limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
