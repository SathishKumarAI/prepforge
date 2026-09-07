---
qid: ing_1bd9a7d76d__faang__local
question: 'Explain: Prefill and Decode Phases — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 483
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:49:42-05:00'
sources: []
---

**Clarify**

We’re asked to describe the two main stages of a language‑model inference pipeline: **Prefill** (or “prompting”) and **Decode**.  
Assumptions:  
* The model is transformer‑based, already trained.  
* We’re dealing with autoregressive decoding (e.g., GPT).  
* Batch size ≈ 1 during real‑time serving.

**Approach**

1. Tokenize the user prompt → Prefill phase.  
2. Run the prompt through the transformer once to obtain hidden states for every token.  
3. Enter Decode phase: iteratively generate next tokens, feeding each new token back into the transformer until stopping criteria are met.

**Depth**

- **Prefill**  
  *Runs a full forward pass over the entire prompt.*  
  *Complexity*: O(|prompt| × n_layers × d_model²) but executed only once.  
  *Benefit*: Caches key/value tensors for each layer, avoiding recomputation during decoding.

- **Decode**  
  *Per token, perform a forward pass from the last cached state.*  
  *Complexity*: O(n_layers × d_model²) per generated token (since we reuse keys/values).  
  *Common strategies*: greedy, top‑k/top‑p sampling, beam search.  
  *Stopping*: end‑of‑sequence token or max length.

**Edge Cases**

- Very short prompts → Prefill overhead dominates; consider “cold start” tricks.  
- Long prompts → memory blow‑up from caching all keys/values.  
- Beam search with large width → quadratic growth in decoding time.

**Optimize & Communicate**

- Use *cache pruning* for long contexts (e.g., sliding window).  
- Apply *tensor parallelism* or *pipeline parallelism* to spread Prefill across GPUs.  
- For Decode, switch to *flash‑attention* or *kernel fusion* to reduce per‑token latency.  

When explaining this in an interview, I’d emphasize how Prefill amortizes cost by caching keys/values and how Decode leverages that cache for efficient token generation, then discuss trade‑offs (latency vs. memory) and concrete optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
