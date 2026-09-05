---
qid: ing_42efd3c882__eli5__local
question: 'Q: How do you test prompt changes before production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 216
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:22:33-05:00'
sources: []
---

Think of a prompt as a recipe you’ll serve to an AI chef. Before you put the dish on a big banquet table (production), you want to taste it in a small kitchen (testing environment). First, you give the same ingredients to two identical chefs: one uses the old recipe, the other the new one. You let them cook and then compare the dishes side‑by‑side—do they look similar? Do they have the right flavor balance? This is **unit testing** for prompts.

Next, bring a few guests (a small group of users) to taste both versions in a tasting room. Their feedback tells you if the new recipe feels better or has hidden flaws—this is **A/B testing**. If most guests prefer the new dish, you’re ready to serve it at the banquet. By keeping the test kitchens isolated and using real‑world diners, you catch problems early and avoid serving a bad prompt in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
