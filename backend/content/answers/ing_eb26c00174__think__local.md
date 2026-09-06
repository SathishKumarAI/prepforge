---
qid: ing_eb26c00174__think__local
question: 'Explain: Tensor Parallelism (TP) — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 476
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:32:20-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Confirm we’re explaining *Tensor‑Parallelism (TP)* as it applies in a *serving* context (real‑time inference).  
- Assume the audience knows basic model architecture but not TP internals.  
- Note that “infrastructure” refers to hardware layout, networking, and software orchestration.

**2️⃣ Adopt a mental model: “distributed tensor slice”**  
Think of a large weight matrix as split into vertical slices (columns) that live on separate devices. Each device holds only its slice but all must collaborate to compute one row of the output. In serving, this collaboration happens for every request, so we need low‑latency communication.

**3️⃣ Step‑by‑step reasoning**  
1. **Model partitioning** – split each tensor along a chosen dimension (e.g., columns).  
2. **Local inference** – each device multiplies its slice with the same input vector and produces a partial output.  
3. **All‑reduce aggregation** – all partial outputs are summed across devices to form the final activation.  
4. **Pipeline orchestration** – requests flow through a chain of TP shards; the first shard receives the raw query, passes intermediate activations downstream.  
5. **Latency budgeting** – quantify compute time per shard vs. inter‑device communication latency; optimize by batching or using RDMA.

**4️⃣ Common pitfalls to avoid**  
- Forgetting that TP reduces memory per device but *increases* communication overhead.  
- Assuming a single request can be served on one shard—TP requires all shards to participate for each token.  
- Ignoring the need for consistent random seeds and state when using multiple replicas.

**5️⃣ Sanity‑check & verbalize**  
Run through a toy 2‑shard example: “Shard 1 multiplies first half of weights → partial A; Shard 2 does the same → partial B; we sum A+B to get final result.” If this makes sense, the explanation is coherent. Conclude by linking TP’s benefits (scale‑up memory) with its cost (extra latency), framing it as a trade‑off in serving infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
