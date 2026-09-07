---
qid: ing_197f9d8b3b__faang__local
question: 'Explain: Sliding Windows vs. Summarization — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 495
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:44:29-05:00'
sources: []
---

**Clarify**  
We’re comparing two ways a language model keeps track of recent text when generating the next token: (1) *Sliding windows*—a fixed‑size buffer that moves forward one token at a time, and (2) *Summarization*—compressing older context into a shorter representation. I’ll assume we’re talking about autoregressive transformers running on GPU with limited memory, and that both methods aim to preserve coherence over a few thousand tokens.

**Approach**  
1. Outline the mechanics of each technique.  
2. Highlight where they differ in memory usage, latency, and fidelity.  
3. Quantify trade‑offs (e.g., window size vs. summary compression).  

**Depth**  
- *Sliding Window*: The model keeps the last k tokens (k≈2048 for GPT‑3) in memory; every new token triggers a re‑encoding of that k‑token sequence. Memory ≈ O(k·d), latency ≈ O(k²) per step due to self‑attention. No abstraction, so context is exact but bounded.  
- *Summarization*: Older tokens are encoded into a fixed‑dimensional vector (or a few “summary” tokens). The model then attends to both the fresh window and these summaries. Memory ≈ O(k·d + s·d) where s≪k; latency drops because attention on summaries is cheap, but we introduce an approximation error that grows with distance from the current token.

**Edge Cases**  
- Long‑range dependencies: sliding windows miss them beyond k tokens; summarization may lose nuance if compression is too aggressive.  
- Repeated patterns: sliding window handles repetition exactly; summary can blur repetitions into a generic vector.  
- Real‑time streaming: sliding window has predictable latency, whereas summarization requires an additional encoding pass.

**Optimize & Communicate**  
A hybrid strategy—maintain a sliding window for the last few hundred tokens and periodically generate a compressed “memory” token—balances fidelity and efficiency. I’d explain this trade‑off to interviewers by emphasizing that the choice depends on target latency, GPU memory budget, and required coherence over long passages. This showcases structured thinking, clear communication, and depth—all key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
