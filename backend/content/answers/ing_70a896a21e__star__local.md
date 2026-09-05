---
qid: ing_70a896a21e__star__local
question: 'Explain: Recency-Weighted Ranking — Knowledge Management'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 282
total_tokens: 517
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:43-05:00'
sources: []
---

**Situation**  
At my previous company we maintained a corporate wiki that grew to over 30 000 pages. Search clicks dropped 18% year‑over‑year because users were still finding outdated troubleshooting guides buried under newer content.

**Task**  
I was tasked with redesigning the search ranking so that fresher, more relevant documents surfaced first without sacrificing topical relevance.

**Action**  
I implemented a recency‑weighted scoring model on top of our ElasticSearch backend. Each document’s base TF‑IDF score was multiplied by an exponential decay factor: `weight = e^(–λ * age_in_days)`. I tuned λ via A/B testing, using Click‑Through Rate (CTR) as the primary metric. To keep latency low, I cached the decay weights in Redis and updated them nightly. We also added a “knowledge freshness” flag for documents that required manual review.

**Result**  
After deployment, CTR on search results rose 27%, and user satisfaction scores improved by 4 points on our quarterly survey. The model also reduced the time to surface critical policy updates from days to minutes, teaching me how to balance algorithmic sophistication with operational simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
