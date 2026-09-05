---
qid: ing_bb3f0e7fa9__eli5__local
question: 'Explain: Why we do not use a single composite quality score'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 205
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:34:00-05:00'
sources: []
---

Imagine judging a potluck dinner with a single “tastiness” rating. One score can’t tell you whether the dish is salty, sweet, or spicy; it just says “good” or “bad.” AI works the same way. A composite quality score would mix many different abilities—speed, accuracy, creativity, safety, fairness—into one number and lose the details that matter in each area.

**Composite score**: a single number that tries to represent everything about performance.  
**Accuracy**: how often the model gives correct answers.  
**Safety**: how well it avoids harmful or biased responses.  

By keeping separate metrics we can see if an AI is fast but unsafe, or accurate but slow, and improve each part individually. A single score would hide these trade‑offs and make it hard to trust or compare models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
