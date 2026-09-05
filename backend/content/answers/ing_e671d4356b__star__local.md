---
qid: ing_e671d4356b__star__local
question: 'Explain: Communications — Jobs \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 346
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:08:50-05:00'
sources: []
---

**Situation**  
At my previous role I was tasked with improving the internal knowledge‑base search at a large AI startup that had just begun using Anthropic’s Claude models to generate concise answers for engineering queries.

**Task**  
Create an end‑to‑end pipeline that could ingest our documentation, fine‑tune a Claude model on it, and expose a conversational API so developers could ask questions in plain English and get instant, accurate responses—reducing search time from 3 minutes to under 30 seconds.

**Action**  
I first scraped the docs into JSONL format, then used Anthropic’s “Claude-2” fine‑tuning endpoint with a custom prompt template that preserved context hierarchy. I added a retrieval‑augmented generation layer: the model first queried ElasticSearch for relevant snippets and fed them back into Claude as “context”. For safety I wrapped responses in a policy filter (Anthropic’s Safety API) to block disallowed content. The API was built with FastAPI, deployed on Kubernetes, and monitored via Grafana dashboards tracking latency and error rates.

**Result**  
The new system cut average answer time by 78 % and increased user satisfaction scores from 3.2/5 to 4.6/5 in our quarterly survey. I learned how fine‑tuning with Anthropic’s safety controls can be combined with retrieval augmentation to deliver reliable, fast communication tools for ML teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
