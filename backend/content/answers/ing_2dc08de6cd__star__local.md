---
qid: ing_2dc08de6cd__star__local
question: 'Explain: Out of Scope — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 378
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:59:51-05:00'
sources: []
---

**Situation:**  
While leading a recommendation‑engine sprint at a fintech startup, our product manager asked me to incorporate “social media sentiment” into the model so we could better predict user churn. The team was excited, but the data set would have required crawling Facebook and Instagram profiles—platforms with strict API limits and heavy privacy regulations.

**Task:**  
I had to evaluate whether pulling social‑media signals was feasible within our 8‑week release window, a $120K budget, and compliance constraints, and decide if it belonged in scope for this sprint.

**Action:**  
First, I mapped the data pipeline: API calls → OAuth tokens → GDPR checks → feature extraction. I estimated that even with rate limits (500 requests/hour) we’d need 3 months of continuous crawling to cover our 50K users, plus a separate legal review costing $30K. I ran a quick feasibility study using public sentiment APIs and found they offered only coarse‑grained scores, which would add noise rather than value. I presented a risk–benefit matrix to stakeholders, highlighting the cost, time, regulatory hurdles, and minimal expected lift (≈2% churn reduction). I proposed an alternative: using internal user review text, which was already in our data lake, for sentiment analysis.

**Result:**  
We scoped out Facebook/Instagram integration for this sprint. The recommendation model launched on schedule, delivered a 4.8% lift in upsell conversions, and the team saved $30K in legal costs. I learned to balance ambition with realistic constraints and to advocate for data sources that align tightly with product goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
