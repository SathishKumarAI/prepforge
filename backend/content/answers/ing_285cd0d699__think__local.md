---
qid: ing_285cd0d699__think__local
question: 'Explain: Our serving cost is dominated by KV cache, not weights. Get it
  down by an order of magnitude and tell me what you give up.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 438
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:20:48-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
- “Serving cost” = inference latency / compute (GPU/TPU) or energy.  
- “KV cache” refers to key‑value memory in transformer attention, not model weights.  
- The claim: reducing KV‑cache size by 10× will drop serving cost; ask what trade‑offs this entails.

**2️⃣ Mental model & framework**  
- In a transformer, each layer’s self‑attention uses all past keys/values to compute context for the current token.  
- Cost ∝ (KV cache size) × (number of attention heads) × (hidden dimension).  
- Reducing KV size shrinks matrix multiplications, memory bandwidth, and cache pressure → faster inference.

**3️⃣ Step‑by‑step reasoning**  
a. Quantify baseline: if a 12‑layer GPT‑2‑XL uses ~30 GB KV for a long prompt, compute per‑token FLOPs.  
b. Scale down by factor 10 (e.g., from 30 GB to 3 GB).  
c. Recalculate FLOPs and latency; expect ~10× speedup if cache dominates.  
d. Identify what is lost: each head no longer sees older tokens → less long‑range context, poorer language modeling for long passages.

**4️⃣ Common traps to avoid**  
- Forget that weights still dominate memory footprint in training but not inference.  
- Assume KV reduction only affects latency; it also hurts accuracy.  
- Ignore that attention patterns may change (e.g., locality bias) when cache shrinks.

**5️⃣ Sanity‑check & communicate**  
- Verify by running a small benchmark: compare perplexity on long‑context tasks before/after pruning the cache.  
- Explain: “We save 10× compute, but we give up the ability to attend beyond X tokens; the model behaves like it has a shorter memory.”  

This structured approach lets you evaluate the trade‑off quantitatively and communicate the implications clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
