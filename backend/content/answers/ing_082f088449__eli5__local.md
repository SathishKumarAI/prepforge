---
qid: ing_082f088449__eli5__local
question: 'Explain: 14.1.2.1. Multi-GPU Training ¶ — 14.1. Image Augmentation \u2014
  Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 261
total_tokens: 448
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:48:33-05:00'
sources: []
---

Think of training a neural network like cooking a big pot of soup that needs constant stirring and tasting.  
With one GPU, you’re the chef: you add ingredients (data), stir (forward pass), taste (backward pass), and adjust seasoning (update weights). It takes a long time because all steps happen on your single stove.

Now imagine you have several chefs—each with their own stove—working together. Each chef receives the same recipe (the model) and a slice of the soup ingredients (a batch of data). They stir, taste, and note how much salt to add (compute gradients) independently. Once all chefs finish, they bring their notes back to you, who combines them into one final seasoning adjustment for the whole pot.

That combination step is called **gradient aggregation**: it adds up what each GPU learned so that every part of the model receives the same updated instruction. After the update, every chef starts again with the newly seasoned soup.  

So multi‑GPU training simply splits the work among many “chefs” to speed up learning, then synchronizes their results so the model improves as if it had been trained on a single, huge batch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
