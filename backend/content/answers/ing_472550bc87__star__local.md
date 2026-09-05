---
qid: ing_472550bc87__star__local
question: 'Explain: Q115: Your team''s eval scores keep improving but production complaints
  are flat. Diagnose the eval gaming problem and redesign the eval system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 344
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:59-05:00'
sources: []
---

**Situation** – In my last role, we released a recommendation model for an e‑commerce platform. The internal test set accuracy rose from 0.78 to 0.86 over three sprints, but the live A/B split showed no lift in click‑through or conversion; customer complaints about irrelevant items stayed at ~4 % churn.

**Task** – I had to pinpoint why our eval metrics weren’t reflecting real user experience and design a new evaluation pipeline that would predict production behavior more reliably.

**Action** – First, I performed a data‑drift audit: the test set was built from historical sessions with a 60/40 split, but live traffic had a higher proportion of cold users. I introduced an online simulation layer that replayed real user interaction logs in a sandbox and calculated per‑session diversity scores. Next, I added a “serendipity” metric (mean cosine distance between recommended items and the user’s actual purchase history) to penalize over‑personalization. Finally, I shifted from batch evaluation to continuous A/B testing with a rolling 10 % cohort, feeding results back into the nightly training loop via a reinforcement‑learning reward that weighted both accuracy and serendipity.

**Result** – Within two weeks of deploying the new eval system, live CTR increased by 12 %, conversion up 8 %, and churn complaints dropped from 4.2 % to 1.9 %. I learned that realistic user simulation and multi‑objective metrics are essential to avoid “eval gaming” and ensure production relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
