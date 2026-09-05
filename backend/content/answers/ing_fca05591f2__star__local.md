---
qid: ing_fca05591f2__star__local
question: 'Explain: Model Output — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 322
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:53:40-05:00'
sources: []
---

**Situation** – At my last internship I was asked to build a demo that could show non‑technical stakeholders how a transformer predicts the next word in a sentence. The team had already trained GPT‑2 on our product logs, but nobody understood why certain tokens were chosen over others.

**Task** – I needed to create an interactive visualization that mapped the model’s internal attention weights and probability distribution for each prediction step, so people could see which past words influenced the next word choice.

**Action** – First I extracted the hidden states and softmax outputs from GPT‑2 after every token. Using D3.js I plotted a heatmap of the multi‑head attention scores, overlaying them on the input sentence. Then I built a small web app that allowed users to type a prompt; as each new word was generated the app updated two panels: one showing the probability bar chart for candidate tokens and another highlighting the attention weights across layers. I also added a “confidence slider” that let viewers see how the top‑k sampling changed the output.

**Result** – The demo drew 1,200 views in its first week on our internal portal and reduced the number of FAQ emails about model behavior by 35 %. It taught me how to translate complex transformer internals into intuitive visual stories, a skill I’ve since applied to explain attention patterns in BERT for a customer‑facing product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
