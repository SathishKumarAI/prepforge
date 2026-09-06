---
qid: ing_64b2698d8d__fp__local
question: 'Explain: Every prompt I ship keeps getting heavier'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 417
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:39:05-05:00'
sources: []
---

**Why do my prompts “get heavier” as I ship them?**

In a language‑model pipeline the *effective prompt size* is the sum of  
1) the raw text you send, and  
2) any hidden tokens that the model internally appends (e.g., task‑specific prefixes, instruction meta‑data, or token‑level context windows).  

From an optimization standpoint, a transformer learns to map an input sequence \(x = [x_1,\dots ,x_n]\) to an output distribution via self‑attention. The attention weights are computed over *all* tokens in the sequence, so every added token consumes a slice of the model’s capacity and increases quadratic compute cost \(O(n^2)\). To keep training stable, the model is often fine‑tuned with a fixed maximum length \(L\). When you ship a prompt that pushes \(n \approx L\), the optimizer must compress information: it learns to “cheat” by moving useful signal into earlier tokens and padding later ones with learned defaults. Thus each new prompt tends to carry more *implicit* context—hidden tokens, positional biases, or sub‑token embeddings—that weren’t present in the original text.

**Non‑obvious insight:**  
The heaviness you observe is not merely a side effect of added words; it’s a *consequence of the model’s attention budget*. Every time you add a token, the network reallocates its internal attention mass. If you consistently ship longer prompts, the model learns to rely on those extra slots for meta‑information (e.g., “please answer concisely”), effectively turning your prompt into an adaptive “instruction cache.” This cache grows with each deployment, so subsequent prompts must be re‑weighted against a larger baseline of implicit context—hence they appear heavier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
