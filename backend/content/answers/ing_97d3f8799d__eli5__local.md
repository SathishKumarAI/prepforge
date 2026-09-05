---
qid: ing_97d3f8799d__eli5__local
question: 'Explain: Decoding strategy — Text generation \u00b7 Hugging Face'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 221
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:38:24-05:00'
sources: []
---

Imagine a chef who has a recipe book (the language model) and wants to write a new dish description.  
**Decoding strategy** is the chef’s “taste test” method: how she picks which word to add next.

* **Greedy decoding** = immediately choose the tastiest ingredient (highest probability). It’s fast but can miss subtle flavors.
* **Beam search** = keep several promising ingredient chains at once, exploring many possible dishes before picking the best overall.  
* **Top‑k sampling** = look only at the k most popular ingredients and randomly pick one, adding variety while staying realistic.  
* **Nucleus (top‑p) sampling** = choose from the smallest set of ingredients whose probabilities add up to p, balancing surprise and coherence.

In Hugging Face’s text generation, you tell the “chef” which strategy to use so it writes sentences that feel natural yet inventive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
