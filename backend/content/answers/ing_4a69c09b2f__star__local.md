---
qid: ing_4a69c09b2f__star__local
question: 'Explain: Business automation — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 299
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:57:16-05:00'
sources: []
---

**Situation** – At IBM’s Think Topics event last year, the marketing team was struggling to keep up with over 10,000 leads generated from a global webinar series. The manual lead qualification process took three days per batch and left no room for personalization.

**Task** – I was tasked to build an automated pipeline that could score leads in real time, segment them by intent, and trigger personalized email flows—all within 48 hours of registration.

**Action** – First, I collected historical CRM data (click‑throughs, session duration, form fields) and engineered features such as “time on page” and “content depth.” Using scikit‑learn, I trained a gradient‑boosted decision tree to predict conversion probability. The model was wrapped in an Airflow DAG that ran every hour; new leads were scored, then passed to a Kafka stream where a Node.js microservice pushed qualified leads into Salesforce with custom tags. Finally, I set up a lightweight React dashboard for the sales reps to see live scores and recommended next steps.

**Result** – The automation cut lead qualification time from three days to under 30 minutes, boosting sales engagement by 35% and increasing conversion rates from 12% to 18%. I learned that blending classic ML with real‑time streaming can dramatically reduce operational bottlenecks while delivering actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
