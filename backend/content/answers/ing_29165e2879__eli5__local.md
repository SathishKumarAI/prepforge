---
qid: ing_29165e2879__eli5__local
question: Explain GRPO. Why did DeepSeek drop the value network that PPO uses?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 212
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:40:52-05:00'
sources: []
---

**Imagine a chef learning to cook a new dish.**  
In the classic “PPO” recipe, the chef first estimates how tasty each step will be (the *value network*), then uses that taste score to decide which ingredients to tweak.  
GRPO is like a chef who skips guessing the final taste in advance; instead, she looks at many possible outcomes of her current cooking plan and chooses the one with the highest expected flavor. She still evaluates each outcome but only once, so she doesn’t need a separate “taste predictor.”  

DeepSeek dropped the value network because it can slow learning and make the model brittle when the environment (the internet) changes fast. By using GRPO’s single‑step evaluation, the system stays leaner and adapts quicker to new data while still optimizing for overall reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
