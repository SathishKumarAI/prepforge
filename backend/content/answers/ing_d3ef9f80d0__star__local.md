---
qid: ing_d3ef9f80d0__star__local
question: 'Explain: A/B Testing — Langsmith Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 353
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:26-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with improving the accuracy of our chatbot’s intent‑recognition model. The product team wanted a new feature that could adapt in real time to user language patterns, but the existing pipeline didn’t provide enough visibility into which utterances were misclassified.

**Task** – I had to design an A/B test that would let us roll out two versions of the intent engine (the baseline and a transformer‑based variant) while capturing detailed telemetry so we could see exactly where each model was failing, all without disrupting user experience.

**Action** – I set up Langsmith’s observability stack: every request was logged with the raw utterance, the predicted intent, confidence score, and the selected model. Using Langsmith’s experiment feature, I routed 50 % of traffic to the new transformer model via a feature flag. I also added custom metrics in Langsmith to count misclassifications per intent and latency buckets. The A/B test ran for two weeks; I monitored live dashboards, adjusted thresholds, and used Langsmith’s trace aggregation to drill down into error patterns.

**Result** – The new model improved overall accuracy from 78 % to 87 %, reduced average latency by 12 ms, and cut misclassifications in the “booking” intent by 35 %. I learned that coupling A/B testing with a robust observability platform like Langsmith turns raw experiment data into actionable insights, enabling rapid iteration without sacrificing reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
