---
qid: ing_896a9f7804__think__local
question: Explain tensor parallelism vs pipeline parallelism for inference. When do
  you need each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 550
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:07:49-05:00'
sources: []
---

**Metacognitive plan for answering “Explain tensor parallelism vs pipeline parallelism for inference. When do you need each?”**

1. **Clarify the scope and set assumptions**  
   - Define *tensor parallelism* (splitting a single layer’s tensors across devices) vs *pipeline parallelism* (splitting the model into stages).  
   - Assume we’re dealing with large transformer‑style models, GPUs/TPUs as accelerators, and inference latency/bandwidth constraints.  
   - Note that “inference” usually implies fixed input size; training‑style gradients are irrelevant.

2. **Choose a mental framework**  
   - Use a *resource–performance* diagram: axes of device count, model size, layer width, and batch size.  
   - Map each parallelism strategy onto this space: tensor parallelism reduces per‑device memory but adds communication; pipeline parallelism keeps layers local but introduces pipeline stalls.

3. **Stepwise reasoning**  
   - Start with the problem: a model that won’t fit on one device → need to spread it.  
   - Explain how tensor parallelism works (split weight matrices, gather outputs) and its communication pattern (all‑reduce or all‑gather).  
   - Then describe pipeline parallelism (divide layers into *p* stages, feedforward each batch token through the chain, overlapping execution).  
   - Compare: memory footprint per device, latency for a single inference pass, throughput for many queries.

4. **Common traps to avoid**  
   - Don’t conflate data parallelism with tensor or pipeline; keep them distinct.  
   - Beware of assuming pipeline parallelism is always faster—pipeline depth and batch size matter.  
   - Avoid over‑simplifying communication costs: all‑reduce in tensor parallelism can dominate latency if not overlapped.

5. **Sanity‑check & verbalize**  
   - Re‑state the trade‑offs in plain terms: “Use tensor parallelism when you need to fit very wide layers on a few devices; use pipeline when your model is deep and you want to process many tokens concurrently.”  
   - End with a quick example (e.g., 8‑GPU setup for GPT‑3): 4‑tensor + 2‑pipeline yields best latency for large batches.  

This structured approach ensures the answer covers definitions, mechanics, trade‑offs, pitfalls, and practical guidance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
