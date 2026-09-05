---
qid: ing_c5b4a8a0f9__star__local
question: 'Q66: When would you use Claude''s extended or adaptive thinking vs. standard
  mode, and how do you control costs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 324
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:05:24-05:00'
sources: []
---

**Situation:** At my last company we were building a recommendation engine that had to process user queries in real time. Our latency SLA was 150 ms, but when the model started handling complex multi‑step reasoning—like cross‑referencing user history with trending content—the standard Claude mode began hitting 250 ms and cost per token doubled.

**Task:** I needed a way to keep the high‑quality responses for those heavy queries while staying under our $5k/month inference budget and not breaking the SLA.

**Action:** I switched to Claude’s Extended Thinking only for requests flagged as “high complexity” by an internal heuristic (query length > 200 words or containing multiple intent markers). For the rest, standard mode ran. I also set a token cap of 1,000 per extended run and used the new cost‑control API that throttles usage after 80% of the monthly quota. I logged latency and cost per session in Grafana to spot any drift.

**Result:** Latency for complex queries dropped back to 140 ms on average, overall inference cost stayed within $4.2k/month (a 16% savings), and user engagement metrics improved by 12%. I learned that selective mode switching plus real‑time monitoring is key to balancing quality with budget in large‑scale AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
