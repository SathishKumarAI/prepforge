---
qid: ing_b89d583f17__think__local
question: Walk me through what happens inside the server when an LLM processes a request.
  Why are prefill and decode bottlenecked differently?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 555
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:07:55-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Assume a typical transformer‑based LLM hosted on GPU/TPU clusters.  
   - Focus on the *server‑side* pipeline: request ingestion → tokenization → model inference (prefill + decode) → response serialization.  
   - Ignore client‑side networking details unless they influence internal batching.

**2️⃣ Adopt a mental model of the inference workflow**  
   - **Prefill stage**: all context tokens are processed once to produce hidden states for the first output token.  
   - **Decode stage**: each subsequent token is generated one at a time, re‑using earlier hidden states and only attending to the new token’s position.  
   - View the transformer as a *sequence of matrix multiplications* that differ in parallelism between stages.

**3️⃣ Step‑by‑step reasoning toward the bottleneck analysis**  
   1. In prefill, every layer processes *all* context tokens → massive parallel matrix ops → high GPU throughput.  
   2. In decode, only one new token is processed per step; earlier layers reuse cached activations, reducing work but forcing a tight loop that stalls on memory bandwidth or kernel launch overhead.  
   3. Quantify FLOPs: prefill ≈ L·N×H² (L=layers, N=context length); decode ≈ L×H² per token.  
   4. Examine GPU utilization curves from profiling tools to confirm that prefill saturates compute while decode is limited by latency and memory traffic.

**4️⃣ Common traps to avoid**  
   - Mixing up *batch* vs. *sequence* parallelism: larger batch sizes can hide decode latency but not the per‑token serial nature.  
   - Assuming decoding is “easier” because it processes fewer tokens; it’s actually more sensitive to kernel launch overhead and memory stalls.  
   - Forgetting that some frameworks fuse multiple operations in prefill, whereas decode often requires separate kernels.

**5️⃣ Sanity‑check & verbalize the insight**  
   - Verify with a toy example: one layer, 128‑dim hidden state, compare FLOPs for N=32 vs. single token.  
   - Explain that prefill benefits from *data parallelism* across tokens, while decode is bound by *latency* of each step and cache reuse patterns.  
   - Conclude by summarizing: “Prefill bottlenecked by compute‑bound matrix ops; decode bottlenecked by latency & memory traffic.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
