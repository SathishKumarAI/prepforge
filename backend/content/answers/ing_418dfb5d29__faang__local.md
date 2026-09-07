---
qid: ing_418dfb5d29__faang__local
question: Explain min-p sampling and repetition/frequency penalties. When do standard
  sampling settings fail?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 565
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:16:26-05:00'
sources: []
---

**Clarify**  
*Problem:* Describe the *minimum‑p (min‑p)* sampling strategy and how repetition/frequency penalties work in language model decoding. Explain scenarios where vanilla temperature/Top‑k sampling breaks down.  
*Assumptions to confirm:* We’re dealing with autoregressive transformers, token probability distributions are softmax outputs, and we want diverse yet coherent continuations.

**Approach**  
1. Define min‑p: enforce a lower bound on cumulative probability mass before selecting the next token.  
2. Explain repetition penalty (e.g., `logit -= λ`) and frequency penalty (`logit -= γ * count(token)`).  
3. List failure modes of standard sampling (high temperature → incoherence, low temperature → repetitive loops).  

**Depth**  
- **Min‑p Sampling:**  
  - Sort tokens by probability descending.  
  - Accumulate probabilities until ≥ `p_min`.  
  - Renormalize the surviving subset and sample.  
  - Guarantees that unlikely “dead‑end” tokens are excluded while retaining diversity.  
- **Repetition & Frequency Penalties:**  
  - *Repetition penalty* reduces logits of already generated tokens, discouraging immediate repeats (`logit_i = logit_i / λ`).  
  - *Frequency penalty* subtracts a term proportional to the token’s past count (`logit_i -= γ * freq_i`), mitigating long‑term repetition.  
- **When Standard Sampling Fails:**  
  - Low temperature → deterministic, often stuck in loops or grammatical errors.  
  - High temperature → ungrammatical, off‑topic outputs.  
  - Top‑k/Top‑p alone can still produce “hallucinations” if the probability mass is mis‑distributed. Min‑p + penalties balance coherence and novelty.

**Edge Cases**  
- Extremely low `p_min` collapses to greedy decoding.  
- Over‑penalizing (`λ, γ` too high) may suppress needed repeated context (e.g., code).  
- Rare tokens may be unfairly excluded if `p_min` is large; test with synthetic vocab.

**Optimize & Communicate**  
*Improvements:*  
- Adaptive `p_min` based on sentence length or entropy.  
- Combine with nucleus sampling for fine‑grained control.  

*Narration:* “By bounding the probability mass and explicitly dampening repeats, min‑p sampling + penalties address both diversity and coherence—something vanilla temperature/Top‑k settings miss when they either over‑exploit or under‑explore the model’s distribution.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
