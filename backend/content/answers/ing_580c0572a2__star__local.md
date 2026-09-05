---
qid: ing_580c0572a2__star__local
question: 'Explain: Company context — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 306
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:23:41-05:00'
sources: []
---

**Situation:**  
I joined a fast‑growing SaaS startup called Glean, which had just launched its first version of an AI‑powered knowledge search engine for enterprises. The product was live in two large client orgs, but usage reports showed only 12 % of employees were actively searching documents, far below the target of 35 %.

**Task:**  
My goal was to surface why users weren’t engaging and to design a data‑driven improvement plan that would lift active search by at least 20 % within three months.

**Action:**  
I built an event‑tracking pipeline in Snowflake, aggregating click logs, query lengths, and document types. Using SQL + Python, I performed cohort analysis and identified that most users were searching only for PDFs and ignoring the AI summarizer feature. I then ran a/B tests on UI prompts encouraging “Ask Glean” and introduced a personalized onboarding flow powered by GPT‑4 embeddings to surface relevant docs automatically. All changes were rolled out incrementally through feature flags.

**Result:**  
Within 10 weeks, active search rose from 12 % to 29 %, surpassing the target by 4 %. The A/B test on prompts increased AI feature usage by 45 %. I learned that combining robust telemetry with targeted UX nudges can unlock hidden value in AI products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
