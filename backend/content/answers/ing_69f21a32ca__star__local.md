---
qid: ing_69f21a32ca__star__local
question: 'Q71: How do you build a production LLM evaluation pipeline using LLM-as-a-Judge?
  What are the failure modes?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 369
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:59:15-05:00'
sources: []
---

**Situation:**  
At my last role, we launched a chatbot that needed to meet an SLA of 95 % “human‑like” responses. The QA team discovered a drift in the model’s style—users reported it sounding too formal and lacking empathy.

**Task:**  
I was tasked with building a production evaluation pipeline that could automatically flag such drift, benchmark against baseline metrics, and trigger retraining cycles—all while keeping latency under 200 ms for live traffic.

**Action:**  
I set up an LLM‑as‑a‑Judge framework using OpenAI’s GPT‑4o. First, I curated a diverse prompt library (sentiment, tone, factual accuracy) and wrapped each in a scoring rubric that the judge would output as JSON scores. The pipeline ingests live chat logs, runs them through the judge via an async worker pool, aggregates metrics every 30 s, and feeds results into Grafana dashboards. I added circuit breakers to throttle judge calls when API quotas spike and implemented a fallback rule‑based scorer for 10 % of traffic during outages. Failure modes—prompt leakage, judge bias, and high latency—were mitigated by rotating prompts, calibrating with a held‑out human benchmark, and caching recent judgments.

**Result:**  
Within two weeks, the pipeline caught a 12 % drop in empathy scores, prompting an immediate fine‑tuning run. Post‑deployment, user satisfaction rose from 78 % to 93 %, and we reduced manual review hours by 70 %. I learned that LLM‑as‑a‑Judge is powerful but must be guarded with prompt hygiene, latency budgets, and human oversight to avoid cascading failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
