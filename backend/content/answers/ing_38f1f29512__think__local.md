---
qid: ing_38f1f29512__think__local
question: Compare projector/adapter designs - MLP vs resampler vs cross-attention.
  How does the choice interact with the training recipe?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 552
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:40:26-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
   • Identify what “projector/adapter” means in your context (e.g., a lightweight module that injects external info into an LLM).  
   • Assume you’re comparing three concrete designs: **MLP‑style adapters**, **resampling layers**, and **cross‑attention heads**.  
   • Decide on the evaluation criteria: parameter count, FLOPs, ease of integration, and impact on downstream fine‑tuning.

**2. Adopt a mental model**  
   • Treat each design as an *information bottleneck* that maps external embeddings into the transformer’s hidden space.  
   • Think of **MLP adapters** as shallow MLPs (dim → bottleneck → dim), **resamplers** as linear projections with optional down‑sampling, and **cross‑attention** as a full attention block between two sequences.

**3. Step‑by‑step reasoning**  
   1. Compute parameter counts: MLP ≈ 2×bottleneck×dim, resampler ≈ dim² (if dense), cross‑attention ≈ 4×dim².  
   2. Estimate compute: MLP linear → O(dim·bottleneck); resampler linear → O(dim²); cross‑attention quadratic in sequence length.  
   3. Assess expressiveness: cross‑attention offers full interaction, MLP is limited to per‑token transformations, resampler trades off capacity for speed.  
   4. Map each design onto a training recipe: e.g., freeze the base model and fine‑tune only adapters (cheap), or jointly train all layers with careful LR schedules.

**4. Common traps**  
   • Forgetting that cross‑attention adds quadratic cost in sequence length, which may dominate training time.  
   • Assuming MLPs are always cheaper; they can still become a bottleneck if the bottleneck width is large.  
   • Ignoring that resamplers might require extra positional encodings to preserve order information.

**5. Sanity‑check & communicate**  
   • Verify parameter and FLOP counts with a quick script.  
   • Explain trade‑offs in plain terms: “If you need speed, pick an MLP or resampler; if you need rich interaction, use cross‑attention but expect higher compute.”  
   • Summarize the interaction with training recipes: “Freezing the backbone + small adapters → fast convergence; full fine‑tuning of cross‑attention → more data needed but better performance.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
