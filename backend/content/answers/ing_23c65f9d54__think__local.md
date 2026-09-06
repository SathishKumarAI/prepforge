---
qid: ing_23c65f9d54__think__local
question: 'Explain: Estimate the KV-cache memory for serving a large model, and explain
  how it constrains batch size and throughput.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 541
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:01:47-05:00'
sources: []
---

**1. Clarify & set assumptions**  
- Identify *what* the KV‑cache stores (key/value vectors per token).  
- Decide on a concrete model (e.g., GPT‑3 175B) and its hidden size (≈ 12,288).  
- Assume an average sequence length (e.g., 512 tokens) and that we cache all past tokens for generation.  
- Note hardware limits: GPU memory per device (e.g., 24 GB), number of GPUs in a node.

**2. Mental model / framework**  
- Treat the KV‑cache as an extra tensor appended to the activations.  
- Memory cost ≈ (2 × hidden_size × token_length) bytes per batch element.  
- Total cache memory = batch_size × this per‑element size.

**3. Step‑by‑step reasoning**  
1. Compute per‑token KV size: `2 * hidden_size * 4 bytes` (float32).  
   For 12,288 → ≈ 98 kB/ token.  
2. For a 512‑token sequence: `98 kB * 512 ≈ 50 MB` per batch element.  
3. If GPU memory is 24 GB and we keep ~70 % for activations + model weights, the usable cache space might be ~10 GB.  
4. Max batch size ≈ usable_cache / 50 MB ≈ 200.  
5. Throughput (tokens/sec) = batch_size * tokens_per_forward * speed_per_token.  
   Larger batch → more parallelism but limited by cache; smaller batch → less memory pressure but lower throughput.

**4. Common traps to avoid**  
- Forgetting the factor of 2 for key & value tensors.  
- Mixing float16 vs float32 assumptions (halves the size).  
- Ignoring that some tokens are dropped (e.g., when using KV‑cache reuse strategies).  
- Assuming all GPUs share a single cache; in multi‑GPU setups each has its own.

**5. Sanity check & communication**  
- Verify numbers: 50 MB * 200 ≈ 10 GB, matching the available space.  
- Explain that as batch size grows, KV‑cache dominates memory usage, forcing a trade‑off between batch size and per‑token latency/throughput.  
- Conclude by noting that efficient caching (e.g., block‑wise reuse) can relax these constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
