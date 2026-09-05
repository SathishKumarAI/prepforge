---
qid: ing_c6615ab312__eli5__local
question: 'Explain: Q: Explain why transformer attention is O(n²) and what alternatives
  exist.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 231
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:50:16-05:00'
sources: []
---

Imagine you’re at a party where everyone has to whisper to every other person to share a secret. If there are *n* guests, each one talks to *n – 1* others, so the total number of whispers is about *n²*.  
In a transformer, “attention” works like that whispering: each token (word) looks at every other token to decide how much it should pay attention to. Computing all those pairwise interactions takes time proportional to the square of the sequence length—hence **O(n²)**.

To cut down on whispers, researchers invented shortcuts:

* **Sparse attention** – only a few nearby or important tokens whisper, like people talking in small groups.
* **Linear/efficient attention** – re‑arrange the math so each token needs to consider only a compressed summary of all others, reducing cost to linear time.

These tricks keep transformers fast while still letting them learn useful relationships.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
