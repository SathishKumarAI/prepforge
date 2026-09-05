---
qid: ing_8f02bdacd0__eli5__local
question: Eval suites are slow, cost real money, and are noisy. How do you put one
  in CI without making everyone hate you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 243
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:23:37-05:00'
sources: []
---

Think of an evaluation suite like a big, expensive kitchen that cooks many dishes (tests) for a restaurant’s menu. Running it every time someone tweaks the recipe (code change) is slow and burns money—just as CI shouldn’t eat up all your resources or make developers scream.

The trick is to let the kitchen work only when it really matters.  
1️⃣ **Cook in batches** – run the heavy tests nightly or on a dedicated “test day” server, not after every small tweak.  
2️⃣ **Use a quick appetizer test** – before the big kitchen runs, first fire a tiny, fast “sanity” check that catches obvious problems. If that passes, only then do you trigger the full meal.  
3️⃣ **Share the cost** – give everyone a slice of the budget by limiting how many tests each developer can queue; this keeps the kitchen from overworking.

By treating the suite as a shared appliance that runs on a schedule and after a quick warm‑up, CI stays friendly: fast feedback for most changes, and deep evaluation only when necessary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
