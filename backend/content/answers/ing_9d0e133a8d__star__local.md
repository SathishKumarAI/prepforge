---
qid: ing_9d0e133a8d__star__local
question: Your service consumes structured JSON from an LLM. How do you make that
  reliable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 354
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:46:14-05:00'
sources: []
---

**Situation** – In my last role I built a recommendation micro‑service that fetched user preferences from an LLM via HTTP. The first few weeks we saw a 30 % error rate: the JSON was malformed or missing required keys, breaking downstream pipelines and causing service outages during peak traffic.

**Task** – My goal was to reduce the failure rate below 2 % while keeping latency under 200 ms for 95 % of requests. I also needed to make the system self‑healing so that a bad LLM response wouldn’t cascade into production errors.

**Action** – I introduced a two‑layer validation strategy:  
1) A **JSON schema validator (Ajv)** ran on every response, instantly rejecting malformed payloads and logging the exact mismatch.  
2) For missing or unexpected fields, a lightweight **fallback cache** populated defaults from historical data, and an **exponential backoff retry** with jitter was added to re‑query the LLM if the schema failed.  
I also instrumented Prometheus metrics for “validation failures” and set up Alertmanager alerts. Finally, I automated a nightly replay of recent requests against a sandbox LLM instance to surface regressions before deployment.

**Result** – Within two weeks the failure rate dropped from 30 % to 0.8 %. Latency stayed at ~180 ms average, with 99 % under 250 ms. The system now self‑corrects, and I learned that coupling schema validation with graceful fallbacks dramatically improves reliability when consuming AI outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
