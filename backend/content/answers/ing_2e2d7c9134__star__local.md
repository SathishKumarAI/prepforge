---
qid: ing_2e2d7c9134__star__local
question: 'Explain: Automated Evaluators — Langsmith Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 366
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:00:51-05:00'
sources: []
---

**Situation:**  
During the launch of our internal chatbot platform, we noticed that user satisfaction scores dropped from 88 % to 73 % after integrating a new intent‑recognition model. The dev team suspected the model was misclassifying edge cases but had no systematic way to pinpoint which prompts were problematic.

**Task:**  
I needed to build an automated evaluator that could run every nightly batch of user logs through our updated pipeline, compare predictions against ground truth, and surface the most common errors in a clear dashboard—essentially turning raw log data into actionable insights without manual review.

**Action:**  
I leveraged Langsmith’s Observability framework. First, I created a “Prompt‑Evaluator” chain that wrapped each incoming user query with an evaluation prompt asking the model to label its confidence and potential intent drift. Using Langsmith’s built‑in metrics store, I logged each evaluator run, tagging it with request ID, timestamp, and error type. Then I wrote a custom observer script in Python that queried the metric store nightly, aggregated top 10 misclassified intents, and pushed a concise report to our Slack channel via a webhook. To keep latency low, I ran the evaluator as a lightweight Lambda function triggered by new log entries.

**Result:**  
The automated evaluators identified that 42 % of failures stemmed from ambiguous “weather” queries. After retraining on those samples, user satisfaction rose back to 85 %. Moreover, the observability pipeline reduced debugging time from 3 days to under 4 hours per incident. I learned how tightly coupling evaluation logic with observability tooling can turn data into rapid feedback loops for AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
