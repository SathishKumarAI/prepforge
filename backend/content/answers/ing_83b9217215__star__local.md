---
qid: ing_83b9217215__star__local
question: 'Q32: How do you handle rate limits and quotas?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 311
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:56:42-05:00'
sources: []
---

**Situation** – While building a recommendation engine for an e‑commerce platform, we integrated the OpenAI GPT‑4 API to generate personalized product descriptions. In production, our traffic spiked during flash sales and we hit the daily token quota of 3 M tokens, causing service interruptions.

**Task** – I had to design a system that respected the rate limits and quotas while maintaining user experience and keeping costs predictable.

**Action** – First, I instrumented per‑user request counters in Redis with a sliding window. Next, I implemented an exponential back‑off retry strategy for API calls that exceeded the per‑second limit (set at 20 req/s). For quota management, I added a token‑budget allocator: before each request, the system checks remaining tokens; if below threshold, it switches to a cached “lite” prompt or falls back to an internal summarization model. I also introduced a nightly job that aggregates usage data and triggers alerts when approaching 80 % of the monthly quota.

**Result** – Within two weeks, API errors dropped from 18 % to <1 %. We avoided over‑quota charges by keeping spend below $200/month (vs. an estimated $450 without controls). I learned how proactive monitoring combined with graceful degradation can turn a fragile AI integration into a resilient service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
