---
qid: ing_56370ee46f__think__local
question: Explain speculative decoding. Why doesn't it change the model's output distribution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 564
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:41:57-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
- *Speculative decoding* is a generation strategy that predicts several future tokens in parallel and then discards those that don’t match a later “real” sample.  
- We’re asked why this technique **doesn’t alter the underlying probability distribution** that the language model (LM) assigns to sequences.

Assume:  
- The LM is stateless between calls (each token prediction uses the same context).  
- Speculative decoding only *selects* tokens, it never *changes* the logits or probabilities produced by the model.

---

**2️⃣ Mental model / framework**  
Treat the LM as a black‑box that outputs a probability distribution \(P(t|c)\) for next token \(t\) given context \(c\).  
Speculative decoding is an **intermediate sampling algorithm** that uses *multiple* draws from this same distribution to reduce latency. It can be viewed as a “pre‑filter” rather than a generative modification.

---

**3️⃣ Step‑by‑step reasoning**  

1. **Generate speculative tokens**: For context \(c\), the LM samples \(k\) tokens \(\{t_1,\dots,t_k\}\) from \(P(t|c)\).  
2. **Validate against a single true sample**: Draw one “real” token \(t^\*\sim P(t|c)\).  
3. **If any speculative token equals the real one**, use it; otherwise discard and repeat.  

Because every speculative token is drawn from the *same* distribution, the probability that the algorithm outputs a particular token is exactly the same as if we had sampled once directly. The extra draws are just an efficiency trick: they don’t bias the outcome because we only accept tokens that match a genuine sample.

---

**4️⃣ Common traps to avoid**  

- **Thinking “more samples = more chance of rare tokens”** – the algorithm still requires the real token to appear, so it doesn’t artificially inflate probabilities.  
- **Assuming speculative decoding changes logits** – it does not; it only re‑orders or discards intermediate draws.  
- **Confusing acceptance probability with distribution shape** – the acceptance step is a post‑hoc filter, not a change in the underlying PMF.

---

**5️⃣ Sanity check & verbalization**  

- *Check*: If you run speculative decoding with \(k=1\), it reduces to ordinary sampling.  
- *Explain aloud*: “Speculative decoding just draws extra tokens from the same distribution and keeps whichever matches a fresh draw; since we never tweak the probabilities, the overall output distribution stays identical.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
