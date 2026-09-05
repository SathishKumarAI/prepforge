---
qid: ing_d2992c99c3__star__local
question: 'Explain: Evaluation plan — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 362
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:30:41-05:00'
sources: []
---

**Situation:**  
At my last company we launched a real‑time customer support voice bot that handled up to 1,500 concurrent calls per day. Early feedback from the quality assurance team showed that average call completion time was 15 % longer than with human agents, and sentiment analysis flagged frustration in 12 % of interactions.

**Task:**  
I had to design an evaluation plan that would objectively measure the bot’s performance, identify bottlenecks, and guide iterative improvements while keeping latency below 200 ms for any user‑initiated intent.

**Action:**  
I built a dual‑track monitoring pipeline: (1) real‑time telemetry in Prometheus exposed metrics such as intent match confidence, NLU inference latency, and fallback rate; (2) post‑call analytics in ELK stack parsed transcriptions for sentiment, keyword gaps, and user satisfaction scores. I set up A/B tests with a control group using the legacy IVR to capture baseline metrics. For each iteration I ran load simulations with Locust to hit peak concurrency, then used statistical hypothesis testing (t‑tests) to confirm significant improvements before rolling out changes.

**Result:**  
After three sprints of targeted tuning—improving intent routing rules and adding a fallback confidence threshold—the average call completion time dropped by 22 %, and user frustration fell from 12 % to 4 %. Latency stayed under the 200 ms target. The evaluation framework became part of our continuous deployment pipeline, reducing post‑deployment incidents by 35 % and giving us clear data‑driven confidence in every rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
