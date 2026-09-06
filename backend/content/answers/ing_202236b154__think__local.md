---
qid: ing_202236b154__think__local
question: Attention is O(n²) in sequence length. Where does that actually bite in
  practice - prefill vs decode?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 587
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:49:04-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   • *What* is meant by “Attention is O(n²)”: the quadratic cost of computing all pairwise dot‑products in a transformer layer.  
   • *Which settings* are compared: prefill (e.g., batch inference on long prompts) vs decode (auto‑regressive generation token‑by‑token).  
   • Assume standard self‑attention, no sparsity tricks, and that memory bandwidth is not the bottleneck.

**2️⃣ Mental model / framework**  
   Use a cost‑per‑token analysis:  
   - *Prefill*: one forward pass on the whole sequence of length \(L\); cost ≈ \(c\,L^2\).  
   - *Decode*: for each new token we run attention over all previous tokens; cumulative cost ≈ \(c\,\sum_{k=1}^{T} k = c\,T(T+1)/2 \approx c\,T^2/2\).  
   Compare the two by plugging realistic \(L,T\) values and considering batch size, GPU memory, and parallelism.

**3️⃣ Step‑by‑step reasoning**  
   1. Pick a typical prompt length (e.g., 2048 tokens) and generation horizon (e.g., 512 tokens).  
   2. Compute prefilling cost: \(c·(2048)^2\).  
   3. Compute decoding cost: sum of squares up to 2569 → ≈ \(c·(2569^2)/2\).  
   4. Notice that for long prompts the prefilling dominates; for very short prompts (≤ few hundred tokens) decoding’s quadratic growth can overtake.  
   5. Factor in batching: prefill can be highly parallel across sequences, reducing wall‑clock time per token.

**4️⃣ Common traps to avoid**  
   – Forget that the decoder still processes *all* past tokens each step; its cost is not linear.  
   – Ignore that GPU kernels overlap compute and memory, so the practical scaling can differ from pure arithmetic.  
   – Assume batch size 1: larger batches amortize prefilling cost.

**5️⃣ Sanity‑check & verbalizing**  
   • Verify with a toy script (e.g., PyTorch profiler) to see if the wall‑clock time matches the quadratic trend.  
   • Explain that in practice, for short prompts (< 200 tokens) decoding is often the bottleneck; for long prompts or batch inference, prefilling dominates because you pay once for all pairs.  

This framework lets you quantify “where” the O(n²) penalty shows up and communicate it clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
