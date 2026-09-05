---
qid: ing_5e8979c5a4__star__local
question: 'Explain: Evaluation plan — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 368
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:04-05:00'
sources: []
---

**Situation** – At my previous company we launched a chatbot to triage incoming support tickets. Within two weeks we saw the average first‑response time (FRT) rise from 3 minutes to 12 minutes because agents were overwhelmed by low‑priority queries.

**Task** – I was asked to design an evaluation plan that would objectively measure the AI’s impact on agent workload, ticket quality, and customer satisfaction while keeping costs under budget.

**Action** – First, I defined key metrics: FRT, resolution rate, CSAT score, and agent sentiment from post‑shift surveys. I set up a A/B test where 60 % of tickets were routed through the AI and 40 % went directly to agents. Using Python’s pandas I extracted logs from our ticketing system, applied time‑series analysis in Prophet to forecast baseline trends, and built dashboards in Grafana for real‑time monitoring. I also implemented a “confidence score” threshold; tickets above 80 % confidence were auto‑resolved, below that they triggered an agent handoff with contextual notes. Finally, I scheduled weekly retrospectives with the support team to capture qualitative feedback.

**Result** – After three weeks the AI handled 35 % of tickets, cutting FRT from 12 to 5 minutes and improving CSAT by 8 points (from 78 % to 86 %). Agent sentiment scores rose by 15 %, and we saved roughly $18K in labor costs. I learned that a data‑driven, iterative evaluation plan is crucial for balancing automation benefits with human experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
