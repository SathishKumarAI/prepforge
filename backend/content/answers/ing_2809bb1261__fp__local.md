---
qid: ing_2809bb1261__fp__local
question: 'Explain: Q: Explain the "Block Table" in the context of vLLM.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 421
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:30:26-05:00'
sources: []
---

### The “Block Table” in vLLM  
vLLM runs large language models on GPUs by streaming *attention* over a *token window*. Each token’s key‑value pair is stored in a fixed‑size **memory block** (e.g., 16 KB). The **block table** is the runtime map that tells the engine where each token lives and how many tokens share a block.

#### Why it must exist  
1. **Fragmentation avoidance** – Tokens arrive at different rates; naïvely allocating a new block per token would exhaust GPU memory quickly.  
2. **Cache‑friendly access** – By grouping contiguous tokens into one block, the engine can launch a single GEMM for all of them, exploiting spatial locality.  
3. **Dynamic batching** – As inference proceeds, some queries finish while others continue. The block table tracks *live* vs. *free* blocks so that new requests reuse freed space without costly memory copies.

#### Deeper principle  
The table is a lightweight implementation of the **online memory allocator** for a *fixed‑size block system*. It turns the continuous stream of tokens into a discrete, deterministic schedule: each token → (block_id, offset). This reduces the problem to a combinatorial one—packing tokens into blocks under capacity constraints—which can be solved with simple LRU or priority policies.

#### Non‑obvious insight  
Most people treat the block table as an engineering detail, but it actually **enables implicit parallelism**. Because each block contains many tokens, the engine can batch all key‑value updates for that block into a single matrix multiplication, thereby amortizing kernel launch overhead and achieving near‑peak GPU utilization—something explicit batching alone cannot guarantee.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
