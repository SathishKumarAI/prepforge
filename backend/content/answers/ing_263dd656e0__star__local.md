---
qid: ing_263dd656e0__star__local
question: 'Explain: Glean Users — Glean Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 377
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:20-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had a growing user base of 120 k active customers but our onboarding funnel was stuck: only 18 % completed the KYC flow within 48 hours, hurting revenue and compliance scores.

**Task** – I needed to build an ML‑driven “Glean Users” engine that automatically surfaced the most relevant onboarding prompts from our documentation library for each user segment, so we could push targeted help content and lift completion rates above 35 % in three months.

**Action** – First, I extracted raw interaction logs (clicks, scroll depth, time‑on‑page) from Mixpanel and parsed our Confluence docs into a vector index using Sentence‑Transformers. I trained a multi‑label classification model with XGBoost to predict the top 3 document snippets per user based on their profile features (region, device, prior completion history). Then I built an API layer in FastAPI that served these snippets via A/B‑tested webhooks integrated into our onboarding UI. I also set up a feedback loop: every time a user clicked or closed a snippet, the event fed back to retrain the model nightly.

**Result** – Within eight weeks we saw onboarding completion jump from 18 % to 38 %, a 111 % lift, and a 12‑point reduction in support tickets. The project also cut our documentation search time by 70 %. I learned that blending behavioral signals with semantic document embeddings can drastically personalize user help at scale, and that continuous retraining is essential for maintaining relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
