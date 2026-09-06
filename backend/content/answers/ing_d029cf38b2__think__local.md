---
qid: ing_d029cf38b2__think__local
question: Kimi's headline feature is very long context. When you push context from
  8K to hundreds of thousands of tokens, what actually breaks first, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 543
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:42:28-05:00'
sources: []
---

**1. Clarify the question & assumptions**

- *What* exactly is “context” here?  
  Assume it’s the token window that a language model can attend to at once (e.g., 8 K vs. 200 K).  
- *What* might “break first”?  
  Likely refers to the first resource or architectural component that saturates as the window grows.

**2. Mental model / framework**

Use a layered view of an LLM’s forward pass:

1. **Embedding lookup** – O(T) memory.  
2. **Self‑attention** – quadratic time & memory in T.  
3. **Memory buffers (past key/value)** – linear or quadratic growth.  
4. **Hardware constraints** – GPU VRAM, CPU cache, interconnect bandwidth.

The “break point” is where one of these layers exceeds its hardware or algorithmic limits.

**3. Step‑by‑step reasoning**

- Start with the simplest scaling: memory for storing all past key/value pairs grows as T² in multi‑head attention.  
- For 8 K tokens, this fits comfortably on modern GPUs (≈ 12–24 GB).  
- At ~200 K tokens, the quadratic term dominates; you’d need on the order of terabytes of VRAM—impossible with current hardware.  
- Even if you could fit memory, the **compute time** for a single forward pass would become prohibitive (seconds → minutes), breaking real‑time inference.  
- Thus the *first* bottleneck is the quadratic attention cost (memory + compute), not the embedding layer or other linear components.

**4. Common traps to avoid**

- Confusing *embedding size* (linear) with *attention* (quadratic).  
- Ignoring that some models use **efficient attention** tricks; but standard transformers still hit T².  
- Assuming GPU VRAM alone determines feasibility—interconnect and CPU memory also matter.

**5. Sanity‑check & verbalize**

- Check dimensionality: key/value size = T × d_k per head → T² total.  
- Compare 8 K vs. 200 K: (200/8)² ≈ 625× more memory.  
- Verify that current GPUs max ~24 GB, so 625× > impossible.

**Answer (brief)**: The first thing that breaks is the quadratic self‑attention cost—both memory and compute blow up beyond what GPU hardware can handle, making inference infeasible before other components become problematic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
