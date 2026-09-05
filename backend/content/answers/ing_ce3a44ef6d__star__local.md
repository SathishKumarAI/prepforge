---
qid: ing_ce3a44ef6d__star__local
question: Tell me about a time your eval metrics and real user feedback disagreed.
  Which did you trust?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 262
total_tokens: 507
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:21:45-05:00'
sources: []
---

**Situation**  
I was leading the rollout of an AI‑powered recommendation engine for our e‑commerce app. Early A/B testing showed a 12% lift in click‑through rate (CTR), but internal user surveys revealed that customers felt the suggestions were “too generic” and many reported confusion.

**Task**  
Decide whether to trust the quantitative CTR improvement or the qualitative feedback, and adjust the model accordingly before the holiday season launch.

**Action**  
I dug into the data: the CTR spike came from a narrow cohort of power users who had seen the same items repeatedly. I re‑engineered the feature importance pipeline in PyTorch, added diversity constraints, and ran a second A/B test with a broader user base. Simultaneously, I conducted live usability tests using Hotjar heatmaps to capture real interaction patterns.

**Result**  
The revised model dropped CTR by 3% but increased average order value by 8% and improved customer satisfaction scores from 72 % to 89%. The experience taught me that metrics must be contextualized; raw numbers can mislead if they ignore user intent, so I always pair analytics with frontline feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
