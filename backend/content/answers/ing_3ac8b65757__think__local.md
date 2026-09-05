---
qid: ing_3ac8b65757__think__local
question: What is prefill/decode disaggregation, and why do large-scale deployments
  separate the two?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 384
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:44:31-05:00'
sources: []
---

**1️⃣ Clarify the core concepts first**  
   - *Prefill*: the phase where a model generates an entire answer (or chunk) before any part is returned.  
   - *Decode*: the streaming, token‑by‑token generation that users actually see.  
Assume the user knows what a language model does but not the pipeline stages.

**2️⃣ Adopt a “pipeline‑stage” mental model**  
Think of LLM inference as two distinct legs: an offline pre‑computation leg (prefill) and an online streaming leg (decode). This mirrors CPU vs. GPU workloads or batch vs. interactive processing in other systems.

**3️⃣ Step‑by‑step reasoning**  
   - Explain why prefill is expensive but can be amortized over many requests (batching, caching).  
   - Show that decode needs low latency; splitting lets you cache the heavy work while keeping the front‑end fast.  
   - Illustrate with a diagram: request → prefill buffer → streaming decode.

**4️⃣ Watch for common pitfalls**  
   - Don’t conflate “prefill” with “token generation”; it’s about bulk computation, not just the first token.  
   - Avoid implying that decoding is always cheaper—large models still cost per token.  
   - Be clear that separation isn’t a hardware requirement but an optimization strategy.

**5️⃣ Sanity‑check and verbalise**  
   - Re‑frame: “We pre‑compute so we don’t have to redo the heavy math for every user.”  
   - Ask, “Does this explanation make sense if I had just read about token‑level latency?”  
   - Adjust wording until the distinction feels intuitive—prefill = batch prep; decode = live streaming.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
