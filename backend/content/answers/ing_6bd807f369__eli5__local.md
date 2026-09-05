---
qid: ing_6bd807f369__eli5__local
question: 'Explain: Semantic Similarity — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 266
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:26:40-05:00'
sources: []
---

**Semantic similarity** is a way to see how close two pieces of text are in meaning, not just in word‑choice.  
Imagine you’re at a bakery and someone says “I’d like a croissant.” Another person replies “Sure, one of those buttery pastries.” Even though the words differ, we understand they refer to the same item. In the same way, an LLM (large language model) can compare two sentences and score how much their ideas overlap.

When evaluating an LLM, developers give it pairs of responses—one from the model, one that’s considered “perfect.” The semantic‑similarity test measures how well the model’s answer captures the meaning of the perfect one. It’s like having a judge taste two cakes: even if they look different, the judge notes whether their flavors are essentially the same.

*Unavoidable terms:*  
- **LLM (Large Language Model)** – a computer program trained on huge text collections to generate or understand language.  
- **Evaluation** – checking how well something performs against a standard.  

This approach tells us whether the model truly grasps concepts, not just repeats memorized phrases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
