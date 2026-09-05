---
qid: ing_87de7d0bd2__eli5__local
question: 'Explain: Prompt Tuning — Welcome - GraphRAG'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 237
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:11:35-05:00'
sources: []
---

**Prompt tuning is like giving a recipe card to a chef who already knows how to cook.**  
Imagine you have a master chef (the big language model) who can whip up any dish from a pantry of ingredients (its knowledge). You want the chef to make a *specific* dish—say, a spicy Thai noodle soup—but you don’t want to teach them every new cooking technique; you just give them a short recipe card. That card contains only a few key instructions: the spice blend, the simmer time, and the garnish. The chef uses this tiny set of cues to adjust their general cooking style for that one dish.

In machine‑learning terms, the prompt card is a small trainable vector added to the model’s input embeddings. It nudges the pre‑trained model toward the desired output without retraining all its internal weights. This “prompt tuning” lets you specialize a huge, generic model (like GPT) for a narrow task—such as answering questions about a specific graph database—while keeping training cheap and fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
