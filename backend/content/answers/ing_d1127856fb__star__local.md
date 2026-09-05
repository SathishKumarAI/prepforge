---
qid: ing_d1127856fb__star__local
question: 'Explain: What Worked — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 296
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:27:35-05:00'
sources: []
---

**Situation** – In late 2023 I led a cross‑functional sprint to launch an internal knowledge‑base chatbot for our SaaS product, aimed at reducing support tickets by 30%. The team had a tight two‑month deadline and limited budget.

**Task** – My goal was to design and deploy a conversational agent that could understand user intent from ambiguous queries, retrieve the correct documentation snippet, and hand off to a human if needed—all while keeping latency under 800 ms.

**Action** – I chose Rasa Open Source for rapid prototyping, integrating it with our existing ElasticSearch index. I implemented intent classification using a BERT‑based fine‑tuned model on 10k labeled tickets, and added slot filling to capture product version and error codes. To keep response times low, I pre‑cached the top 50 FAQ answers in Redis and used asynchronous callbacks for database lookups. For handoff, I set up an escalation rule that triggers a Slack notification to the support queue when confidence falls below 0.65.

**Result** – Within two weeks of launch, we saw a 42% drop in support tickets related to product documentation, cutting response time from 4 hrs to under 30 min for most queries. The project taught me how balancing NLP accuracy with system latency can deliver real business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
