---
qid: ing_5abd4e99cb__eli5__local
question: 'Explain: Your offline evals improved but the online metric dropped after
  launch. Walk me through the investigation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 360
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:00:16-05:00'
sources: []
---

Imagine you’re a chef who’s perfected a new sauce in the kitchen (offline tests). The sauce tastes great on paper—flavor scores are high. But when you serve it at a busy restaurant (online launch), customers start complaining that it tastes bland. You need to find out why the taste changed.

**Step 1: Check the recipe vs. what’s actually cooked.**  
Your offline “tests” used a small batch of ingredients under controlled conditions. In the real kitchen, the stove is hotter and the pot size different. The sauce might be cooking too fast or too slow, altering its flavor.

**Step 2: Look at how customers taste it.**  
In online metrics you measure clicks or sales—like how many people finish a meal. That’s not the same as tasting notes. Maybe the sauce is fine but paired with the wrong dish, so people don’t notice it.

**Step 3: Inspect the “pipeline.”**  
From ingredient delivery to plating, each step can change the sauce. A leak in the supply line (data drift) or a new mixer (model update) might introduce a subtle flaw that offline tests didn’t catch.

**Step 4: Re‑run offline tests with real‑world data.**  
Feed your model the same “ingredients” (user inputs) it sees online and see if the scores drop again. If they do, the issue is in the model itself; if not, the problem lies outside the algorithm.

By tracing from recipe to plate—checking conditions, customer perception, and the entire process—you can pinpoint why a great offline result didn’t translate into online success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
