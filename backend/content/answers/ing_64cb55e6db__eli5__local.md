---
qid: ing_64cb55e6db__eli5__local
question: 'Explain: Your eval suite is green, ship velocity is good, and users are
  complaining that quality got worse. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 256
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:15:45-05:00'
sources: []
---

Imagine you’re a chef who just opened a new restaurant. All the tests (your “eval suite”) say the recipes taste great, the kitchen staff can cook fast (“ship velocity is good”), yet diners keep saying the food feels off. The problem isn’t with the ingredients or the speed; it’s that the dish changed in subtle ways that your tests didn’t catch.

First, check what the tests actually measure: they only look at a few flavor notes (code coverage) and how quickly a new menu item appears (deployment time). They miss the texture, presentation, and real‑world seasoning that diners notice. Second, review the “pipeline” between recipe creation and plate delivery—perhaps a new kitchen gadget (a library update) altered the cooking process without you noticing.

So debug by:  
1️⃣ Expanding tests to include user‑focused checks (taste tests, feedback loops).  
2️⃣ Monitoring the full workflow from ingredient prep to service.  
3️⃣ Comparing recent changes with past versions that diners loved.  

By widening what you measure and watching the whole journey, you’ll spot where quality slipped and fix it before more complaints pile up.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
