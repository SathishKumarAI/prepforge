---
qid: ing_eea2636e02__eli5__local
question: What is training-serving skew? How do you detect it and how do you design
  it out?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 265
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:52:51-05:00'
sources: []
---

Imagine a chef who trains a recipe by tasting dishes in the kitchen (training) but then serves them on a restaurant menu (serving). If the kitchen’s ingredients are different from what customers get—say the chef uses fresh, high‑quality tomatoes for training but only gets canned ones to serve—customers will taste a dish that feels off. That mismatch is **training‑serving skew**: the data or conditions used to train an AI model differ from those it faces when deployed.

**Detecting it:**  
1. Compare the statistics of the training set (e.g., average brightness, class distribution) with the live input stream.  
2. Watch for sudden drops in accuracy on real‑world samples.  

**Designing it out:**  
- Keep training data as close as possible to production conditions (same sensors, same noise).  
- Periodically refresh or “retrain” the model with recent serving data.  
- Use a feedback loop that flags when new inputs diverge from the training distribution and triggers retraining.

By treating the kitchen and restaurant as one continuous process, you keep the AI’s performance steady and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
