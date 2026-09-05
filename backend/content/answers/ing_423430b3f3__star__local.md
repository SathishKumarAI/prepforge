---
qid: ing_423430b3f3__star__local
question: 'Explain: You shipped an LLM feature - how did you evaluate it? Walk me
  through the actual eval setup.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 383
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:41:05-05:00'
sources: []
---

**Situation** – At my last company we rolled out a conversational AI assistant for the customer support portal. The model had to reduce average handle time by at least 20% and keep an overall satisfaction score above 4.2/5.

**Task** – My job was to design the evaluation pipeline that would verify both quantitative metrics (response latency, F1‑score on intent classification) and qualitative user experience before a full release.

**Action** – I built a two‑tier test harness in Python using FastAPI for real‑time inference. First, a synthetic load test with Locust generated 5k concurrent users to capture latency distribution; we targeted <200 ms average. Second, we ran an A/B split on production traffic: 15% of requests hit the new LLM while 85% used the legacy system. We logged every response, tagged it with intent confidence and a human‑review flag. For quality, I set up an internal “QA squad” that reviewed 10% of each bucket daily, scoring relevance, correctness, and tone on a Likert scale. Metrics were aggregated in Grafana dashboards; we also automated alerts if the new model fell below the 95th percentile latency or dropped intent F1 by >5%.

**Result** – The LLM cut average handle time from 4.8 min to 3.7 min (24% reduction) and increased CSAT from 4.18 to 4.32. Latency stayed under 190 ms for 95% of requests, and intent F1 improved by 12%. I learned that a hybrid evaluation—synthetic load + real‑world A/B with human oversight—is essential to catch edge cases before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
