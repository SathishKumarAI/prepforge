---
qid: ing_e9d503c49b__think__local
question: Why did transformers displace RNNs for language modelling, and what exactly
  does the KV cache buy you at inference time?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 583
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:27:41-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- Identify that “transformers” refers to the self‑attention architecture (e.g., GPT, BERT).  
- Assume the reader knows basic RNNs and wants a high‑level comparison, not low‑level math.  
- Note the two parts: *why transformers replaced RNNs* and *what the KV cache does during inference*.  

**2️⃣ Pick a mental model**  
- Use an “information flow & parallelism” lens: compare how each architecture propagates context through time vs across tokens.  
- For the cache, think of it as a **memory‑optimization shortcut** that reuses already computed key/value tensors instead of recomputing them for every new token.  

**3️⃣ Reason step by step**  

*Why transformers over RNNs:*  
a. *Long‑range dependency*: self‑attention directly connects any two tokens; RNNs must pass information through many recurrent steps, leading to vanishing gradients and slower learning.  
b. *Parallelism*: Transformers process all positions simultaneously on a GPU/TPU; RNNs are inherently sequential, limiting throughput.  
c. *Scaling & data*: With huge corpora, transformer training benefits from massive parallel compute, making larger models feasible.  

*KV cache at inference:*  
- In auto‑regressive decoding each new token requires computing attention over all previous tokens.  
- The cache stores the **keys** and **values** produced for past tokens once; subsequent steps only need to compute a single key/value pair for the new token and then run attention with the cached tensors.  
- This reduces both memory traffic and floating‑point operations, enabling faster generation without recomputing the entire context.  

**4️⃣ Avoid common traps**  
- Don’t conflate “parallelism” with “speed”; mention that hardware (GPUs) is a key enabler.  
- Avoid oversimplifying self‑attention as “magic”; it’s still linear‑time in sequence length but constant‑time per token when cached.  
- Don’t say RNNs are useless; they can be fine for short sequences or low‑resource settings.  

**5️⃣ Sanity‑check & verbalize**  
- Verify that the explanation covers both *model capacity* (long‑range) and *compute efficiency*.  
- Rephrase: “Transformers replaced RNNs because they let every token look at every other token in parallel, breaking the sequential bottleneck.”  
- For the cache: “The KV cache is a memoization trick that lets us reuse past key/value tensors so we only compute new ones for each fresh token.”  

This structured approach can be reused whenever comparing two architectures and explaining an optimization technique.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
