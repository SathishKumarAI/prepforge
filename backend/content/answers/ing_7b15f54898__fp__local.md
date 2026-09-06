---
qid: ing_7b15f54898__fp__local
question: How Does the User Receive the Response? — ChatGPT System Design - by Neo
  Kim and Hayk
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 378
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:26:32-05:00'
sources: []
---

**From Problem to Delivery: Why the User’s Response Must Be a Stream of Tokens**

When a user submits a prompt, the system must answer *quickly* while preserving *semantic coherence*.  
1. **Latency vs. Quality Trade‑off** – The user perceives speed; thus the backend cannot wait for the full generation before sending anything.  
2. **Probabilistic Decoding** – Each next token \(t_i\) is sampled from a distribution conditioned on all previous tokens:  
   \[
   p(t_i|t_{<i}) = \text{softmax}(W h_i)
   \]
   where \(h_i\) is the hidden state after processing \(t_{<i}\).  
3. **Streaming Architecture** – After computing \(p(t_i)\), the token is immediately streamed to the front‑end via a lightweight protocol (e.g., WebSocket). The UI renders it as soon as it arrives, creating an illusion of instantaneous response.

The deeper principle here is *online inference*: we treat generation as a sequential decision process under uncertainty. Each emitted token updates the state and informs the next distribution, so the system continually refines its answer in real time.  

**Non‑obvious Insight**  
Most designs assume a monolithic “generate‑all‑then‑display” pipeline. In reality, the *intermediate* tokens are critical for user experience: they allow the UI to show partial results, adjust layout, and even offer live edits. Thus, latency is not merely a backend metric; it’s part of the cognitive model that defines how humans perceive AI conversation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
