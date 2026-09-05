---
qid: ing_3035efdb19__eli5__local
question: What do temperature and top_p actually do, and how do you choose them per
  task?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 318
total_tokens: 483
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:52:11-05:00'
sources: []
---

Think of a recipe book that can cook any dish (the AI).  
When the chef asks for “some flavor,” the kitchen has two levers to decide how bold or subtle the taste will be.

**Temperature** is like turning up or down the stove’s heat. A low temperature (0.1–0.3) keeps the food very predictable—only the most common spices are used, so the dish stays safe and familiar. A high temperature (≈1.0+) lets the chef experiment with rare herbs; the result can be surprising but also a bit chaotic.

**Top‑p** is like setting a pantry limit: you say “use only ingredients that together make up 90 % of the most popular spices.” The model then picks from that shortlist, ignoring very unlikely options. A small top‑p (0.2–0.4) keeps choices tight; a larger one (≈0.9) lets more variety slip in.

**Choosing them:**  
- For factual or formal writing, use low temperature and moderate top‑p to stay on track.  
- For creative stories or brainstorming, raise the temperature and/or increase top‑p to get fresh ideas.  
- If you want a balance—coherent yet slightly inventive—pick medium values (temp ≈0.7, top‑p ≈0.8).  

Adjust until the output feels just right for your task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
