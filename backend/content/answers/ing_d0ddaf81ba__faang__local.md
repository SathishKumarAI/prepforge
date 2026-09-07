---
qid: ing_d0ddaf81ba__faang__local
question: 'Explain: Stop Sequences — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 383
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:46:18-05:00'
sources: []
---

**Clarify**  
You’re asking how *stop sequences* work inside an inference pipeline for a language model – i.e., the mechanism that tells the decoder when to terminate generation and what assumptions we need (model type, tokenization, whether beam search is used).

**Approach**  
1. Tokenize the stop string(s).  
2. While generating, after each step check if the suffix of the generated token IDs matches any stop sequence.  
3. If a match occurs, truncate output up to that point and halt further decoding.

**Depth**  
- The pipeline typically holds the model’s logits in a buffer; for every new token we compare its ID with the last *k* tokens (where *k* is the longest stop sequence).  
- Complexity per step: O(k · |stop|) – trivial compared to softmax.  
- In beam search, each hypothesis carries its own suffix state so a stop can prune that beam while others continue.  
- Implementation must handle sub‑token boundaries; we use the same tokenizer as the model.

**Edge Cases**  
- Stop strings that are prefixes of other tokens (e.g., “##ing” vs “#”).  
- Overlapping stops – ensure the longest match wins to avoid premature truncation.  
- Streaming generation: need to buffer until a full stop sequence is observed.  

**Optimize & Communicate**  
We can pre‑compute a deterministic finite automaton (DFA) for all stop sequences, reducing per‑step checks to O(1). I’d explain that trade‑off (memory vs speed) and show sample code snippets. This demonstrates clear problem framing, efficient solution design, and awareness of practical pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
