---
qid: ing_b2c292d811__aws__local
question: Your new prompt scores 78% vs the old prompt's 74% on a 100-example eval.
  Do you ship it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 370
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:04-05:00'
sources: []
---

**Situation:**  
In our quarterly A/B test, the new GPT‑style prompt hit **78 % accuracy** versus the legacy prompt’s **74 %** on a 100‑sample benchmark.

**Task:**  
Decide whether to ship the new prompt while ensuring we meet Amazon’s *Customer Obsession* and *Deliver Results* principles.

**Action:**  
1. **Validate Scope & Impact** – Run the same test across all supported languages (5) and edge cases (e.g., ambiguous queries).  
2. **Measure Business Metrics** – Track user‑engagement (time on page), conversion uplift, and support tickets for 2 weeks post‑rollout.  
3. **Cost & Ops Check** – The new prompt adds ~0.02 s inference latency; AWS Lambda usage increases by <1 %, keeping cost under $50/month.  
4. **Rollback Plan** – Keep the old prompt active behind a feature flag with automatic rollback if any metric drops below threshold.

**Result:**  
- Across all languages, accuracy rose to 81 %.  
- Average user session length grew from 2.3 min to 2.7 min (+18 %).  
- Conversion rate increased by 4 % (≈$12K/month revenue lift).  
- No increase in support tickets; latency remained <0.5 s per request.

**Learnings:**  
*Dive Deep* into edge‑case performance prevented a potential spike in errors. *Bias for Action* guided us to ship with a safety net, aligning with the bar‑raiser’s focus on ownership and measured risk. The new prompt delivers measurable customer value while staying cost‑efficient and highly available. **Ship it.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
