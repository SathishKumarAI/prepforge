---
qid: ing_d39e132c7b__faang__local
question: 'Explain: An eval pipeline you own suddenly reports a 6-point drop for a
  customer''s model between Tuesday and Wednesday. The model didn''t change. Debug
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 455
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:52:23-05:00'
sources: []
---

**Clarify**  
We’re seeing a 6‑point accuracy drop on a customer’s model from Tue → Wed even though the code and weights are unchanged.  
Assumptions to confirm:  

1. The same evaluation data set was used (no shuffling or re‑partitioning).  
2. No environment changes (Docker image, library version, GPU/CPU mix).  
3. The metric calculation logic is deterministic.  
4. The model checkpoint and inference code are identical.

**Approach**  
1. **Reproduce locally** – run the pipeline on the same data set and capture intermediate outputs.  
2. **Version‑stamp all inputs** – log hash of data, random seeds, and environment specs.  
3. **Instrument metrics** – add checksums for predictions and ground truth at each step.  
4. **Rollback** – compare with a known good run from Tue to isolate the divergence point.

**Depth**  
- If data hashing differs, likely a data‑shuffle or incremental data pull caused different samples.  
- If environment hashes differ (e.g., `torch==1.13` vs `1.12`), subtle GPU‑side optimizations can alter floating‑point results → metric drift.  
- A nondeterministic seed (Python’s `random`, NumPy, CUDA) will change softmax ordering or dropout masks, affecting evaluation.  
Complexity: O(N) over dataset; minimal overhead from hashing.

**Edge Cases**  
- Distributed evaluation where each worker sees a different shard.  
- Cached predictions that were stale and refreshed mid‑week.  
- External services (e.g., feature store) returning updated values between runs.

**Optimize & Communicate**  
Once the root cause is identified, add a **data‑consistency guard**: lock the evaluation data set to a specific version hash per run. If an environment change occurs, flag it and block the pipeline until manually approved.  
Explain to stakeholders that deterministic evaluation requires immutable inputs and reproducible environments; any drift triggers an alert, ensuring we catch such drops early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
