---
qid: ing_ce3a44ef6d__aws__local
question: Tell me about a time your eval metrics and real user feedback disagreed.
  Which did you trust?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 344
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:23-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I led a recommendation engine for a subscription‑video platform. We had two key signals: internal A/B test lift (CTR +15%) and external user survey sentiment (“too many irrelevant suggestions”). The metrics conflicted, and the product team was split.

**Action (A)**  
I first dug into the data (Dive Deep). I re‑ran the CTR analysis with per‑segment granularity, added a cohort filter for churned vs. retained users, and ran an unsupervised clustering of user embeddings to see if our “irrelevant” flag correlated with low engagement. Parallelly, I deployed a lightweight feedback widget in production (AWS Amplify + API Gateway + DynamoDB) that collected real‑time “thumbs up/down” scores on the top 10% of recommendations.

**Result (R)**  
The refined CTR showed only a +3% lift for churned users—essentially noise. The new widget revealed a 27% drop in satisfaction for those same recommendations. I presented this to leadership, and we re‑trained the model with a “user‑specific relevance” loss term, reducing churn by 12% (≈$1M/yr) while keeping overall traffic up.  

**Reflection & Bar‑raiser signals**  
I owned the outcome, used data over intuition, quantified impact, and learned that user‑centric feedback can surface hidden biases in automated metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
