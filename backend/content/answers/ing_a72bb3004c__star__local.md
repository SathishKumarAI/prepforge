---
qid: ing_a72bb3004c__star__local
question: The VP saw a flawless demo and now expects 100% accuracy in production.
  How do you manage that expectation without killing the deal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 334
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:07:07-05:00'
sources: []
---

**Situation** – Last month we showcased an NLP model for intent detection to the VP during a product‑launch demo. The demo ran on a small, curated dataset and hit 99.5 % accuracy. After the presentation, the VP expected the same performance in the live environment with millions of user interactions.

**Task** – I needed to align expectations with realistic delivery timelines while keeping the deal alive, ensuring we didn’t under‑promise or over‑promise on performance.

**Action** – First, I organized a quick data‑drift audit: sampled 5 % of real traffic from our staging environment and ran the model. Accuracy dropped to 86 %. I presented these findings in a concise slide deck that compared demo vs. production metrics. Next, I outlined a phased rollout plan: (1) deploy with an A/B test on 10 % of users, (2) collect feedback, retrain with domain‑specific data, and (3) incrementally increase exposure while monitoring key KPIs (precision > 90 %, latency < 200 ms). I also set up a real‑time dashboard so stakeholders could see live metrics.

**Result** – The VP agreed to the phased approach, approving a $1.2M contract with a 6‑month pilot period. Within three weeks of deployment we increased accuracy from 86 % to 92 %, and by month two we reached 94 %. I learned that transparent data validation and incremental delivery are essential for maintaining trust while delivering high‑quality AI solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
