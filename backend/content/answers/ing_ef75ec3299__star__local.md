---
qid: ing_ef75ec3299__star__local
question: 'Explain: Using LLMs as Rerankers — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 333
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:26:45-05:00'
sources: []
---

**Situation:** At my last company we built a knowledge‑base search for our enterprise support portal. User query results were pulled from ElasticSearch, but click‑through rates on the top five hits were only 12%, far below our target of 25%.

**Task:** I was tasked with improving relevance by implementing an LLM‑based reranker that could reorder those initial candidates without breaking our latency SLA of 200 ms per request.

**Action:** I chose OpenAI’s GPT‑4o as the backbone, feeding it a prompt that combined the original query, each document’s title and snippet, and a short “importance” score from Elastic. To keep inference fast, I first distilled the model with LoRA adapters trained on 10k labeled relevance pairs we had collected. I then integrated the reranker into our microservice stack: the search service returns the top‑5 hits, which are batched to a single LLM call via OpenAI’s batch API, and the reordered list is sent back to the UI. We monitored latency with Prometheus and added a fallback rule that bypasses the LLM if the request time exceeds 180 ms.

**Result:** Within two weeks of deployment, click‑through rose from 12% to 23%, just shy of our goal but with no measurable increase in page load time (average stayed at 198 ms). I learned how prompt engineering and model compression can make powerful LLM rerankers production‑ready while respecting strict latency constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
