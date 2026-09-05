---
qid: ing_2aac26561b__eli5__local
question: 'Q: Your LLM bill doubled month over month with flat traffic. How do you
  find and fix it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 253
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:43:08-05:00'
sources: []
---

Imagine your AI is a smart vending machine that charges for each “drink” (a model call) it serves. The bill doubled even though the number of drinks stayed the same—so something inside the machine has become more expensive per drink.

**Step 1 – Find the culprit.**  
Check the *model’s internal settings* (like a recipe). A recent change might have made the AI “think harder” for each request, using more CPU or memory. Look at the *resource usage logs*: high GPU time, long queue waits, or frequent retries are red flags.

**Step 2 – Fix it.**  
If the model is over‑parameterized, trim its size or switch to a lighter version. If it’s running too many background tasks, turn those off. Also set a *cost cap* that stops the machine from spending beyond a threshold—just like putting a limit on how many drinks you can buy.

In short: audit usage logs → pinpoint where resources balloon → adjust model size or configuration → add budget limits to keep costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
