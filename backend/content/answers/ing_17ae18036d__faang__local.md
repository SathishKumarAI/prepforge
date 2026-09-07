---
qid: ing_17ae18036d__faang__local
question: We set temperature to 0, so outputs should be deterministic. Why do users
  still get different answers to the same prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 446
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:39:44-05:00'
sources: []
---

**Clarify**  
The user is perplexed: setting a language model’s temperature to 0 should make its generation deterministic, yet they observe varying responses to identical prompts. I’ll confirm that the prompt text, context length, and any hidden system messages are truly identical, and that no other sampling parameters (top‑p, repetition penalty) differ.

**Approach**  
1. Verify that the same model checkpoint is used each time.  
2. Check for side‑effects: cached embeddings, tokenization differences, or stateful components like stochastic dropout in fine‑tuning layers.  
3. Examine whether the prompt is truncated or padded differently across calls.  
4. Test by feeding the exact token sequence (including special tokens) to the model and inspecting the raw logits.

**Depth**  
- Even at temperature 0, models may still incorporate *stochastic* elements if dropout or other regularization layers remain active during inference.  
- Tokenizers can produce different token IDs for semantically identical inputs due to casing or whitespace variations; these subtle changes alter the hidden state trajectory.  
- Some deployments enable “temperature‑override” at runtime or use a cache of past generations that influence next-token probabilities.  
- If the prompt is too long, truncation policies (e.g., left vs right truncation) can yield different contexts.

**Edge Cases**  
- Minor differences in whitespace, line breaks, or hidden Unicode characters.  
- Inconsistent model versions or hardware‑specific optimizations.  
- Reusing a conversation buffer that carries over prior turns.

**Optimize & Communicate**  
I’d suggest normalizing prompts (strip/normalize whitespace), freezing dropout layers for inference, and ensuring deterministic tokenization by using the same tokenizer instance. I’d narrate my reasoning as: “Temperature controls randomness in the softmax; however, any residual stochasticity—dropout, tokenizer idiosyncrasies, or runtime overrides—can still introduce variance.” This shows structured problem‑solving, clear communication, and depth expected by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
