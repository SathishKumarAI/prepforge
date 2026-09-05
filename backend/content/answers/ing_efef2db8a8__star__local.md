---
qid: ing_efef2db8a8__star__local
question: 'Explain: For QAs: Your New Superpower — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 350
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:27:53-05:00'
sources: []
---

**Situation:**  
In mid‑2024 I was leading the quality assurance team for a conversational AI product that served over 50,000 daily users. Our user satisfaction score had dipped from 92 % to 84 %, and we couldn’t pinpoint whether it was due to response inaccuracies or hallucinations.

**Task:**  
I needed to implement a scalable evaluation framework that could automatically surface errors, measure hallucination rates, and give actionable insights for the devs—without adding extra manual testing cycles.

**Action:**  
I adopted LangWatch to capture real‑time conversation logs with context tags (intent, slot values) and then fed those into LangFuse. Using LangFuse’s built‑in prompt‑evaluation pipelines, I set up custom metrics: *hallucination rate*, *response relevance*, and *completion time*. I scripted a nightly pipeline that ran 2,000 sample interactions through the evaluation stack, stored results in an Elasticsearch index, and generated Grafana dashboards for the team. I also added an alert rule that triggered when hallucination rates spiked above 3 %, automatically notifying the product owner via Slack.

**Result:**  
Within three weeks, we reduced hallucinations from 7 % to 2.1 % and increased user satisfaction back to 90 %. The automated pipeline cut QA effort by 40 %, freeing us to focus on feature improvements. I learned that combining LangWatch’s contextual logging with LangFuse’s metric engine creates a “superpower” for real‑time, data‑driven quality assurance in AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
