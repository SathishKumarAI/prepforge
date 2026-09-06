---
qid: vq_69b73fdb20__faang__local
question: How does text generation with Generative AI work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 380
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:14:36-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how generative language models create new text, assuming we’re talking about transformer‑based systems like GPT‑4 or Llama.

**Approach**  
1. Tokenize the prompt into subword units.  
2. Feed tokens through a stack of self‑attention layers that compute contextual embeddings.  
3. Use a linear head to produce logits over the vocabulary for the next token.  
4. Sample (greedy, top‑k, nucleus) and append the chosen token; repeat until an end‑of‑sequence token or length limit is hit.

**Depth**  
- **Self‑attention** lets every token attend to all others, capturing long‑range dependencies.  
- The model is *pre‑trained* on a massive corpus via masked language modeling or causal LM loss, learning general linguistic patterns.  
- During generation, the softmax distribution over tokens is conditioned on the entire preceding context, so each new word depends on what has already been produced.  
- **Decoding strategies** (beam search, nucleus sampling) trade off diversity vs. coherence.  

**Edge Cases**  
- Repetition or “hallucination” occurs when the model over‑confidently repeats patterns; mitigated by repetition penalties.  
- Very long prompts can exceed context windows, causing truncation of earlier tokens.  
- Rare words may be out‑of‑vocabulary if the tokenizer lacks them.

**Optimize & Communicate**  
Improvements include efficient transformer variants (FlashAttention), caching key/value tensors to reduce recomputation, and prompt engineering to steer generation. I’d explain that these optimizations lower latency while preserving output quality, highlighting how FAANG teams balance speed, cost, and user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
