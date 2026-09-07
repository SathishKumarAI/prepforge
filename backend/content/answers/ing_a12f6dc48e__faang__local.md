---
qid: ing_a12f6dc48e__faang__local
question: 'Explain: Q: Explain the difference between prefill and decode phases.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 451
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:59:09-05:00'
sources: []
---

**Clarify**  
You’re asking about the two stages of a transformer‑based language model’s generation pipeline: *prefill* (also called “encoding” or “contextualization”) and *decode* (the autoregressive sampling step). I’ll assume we’re talking about GPT‑style models where the same network is used for both.

**Approach**  
1. Define each phase in terms of inputs/outputs.  
2. Explain why they are separate: computational reuse vs. sequential dependency.  
3. Touch on timing, parallelism, and memory.  

**Depth**  
- **Prefill** runs the transformer once over the entire prompt (or “context”) to produce contextualized hidden states for every token in that context. All tokens can be processed *in parallel* because there are no causal dependencies; this step is O(n·h²) where n = context length and h = hidden size.  
- **Decode** then generates each new token one at a time. For token t, the model must re‑run the transformer from scratch on the prompt plus all previously generated tokens (or use incremental caching), because each output depends on the previous one. This is sequential; we can’t parallelize across positions, so it’s O(t·h²) per step.

The key difference: prefill builds a reusable representation of the input; decode consumes that representation incrementally to produce new text.

**Edge cases**  
- Very long prompts may exceed memory in prefill.  
- Models with “cache” mechanisms reduce redundant work during decode, but still require at least one forward pass per token.  
- If beam search or sampling strategies are used, decoding complexity grows accordingly.

**Optimize & communicate**  
Highlight that efficient decoding often relies on caching key‑value pairs to avoid recomputing earlier layers. For interviewers, emphasize the trade‑off: prefill is a one‑time cost that enables fast subsequent generation, while decode remains inherently sequential but can be accelerated with hardware or algorithmic tricks (e.g., flash attention). This demonstrates awareness of both theory and practical system constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
