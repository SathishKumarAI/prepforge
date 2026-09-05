---
qid: ing_c1d39c33da__star__local
question: 'Explain: Conversely, if you''re into purchasing, a purchaser'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 401
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:57:28-05:00'
sources: []
---

**Situation** – At my previous firm we were buying cloud‑storage services from multiple vendors. Our quarterly spend had ballooned by 18 % because the procurement team was still manually evaluating bids based on a handful of cost metrics.

**Task** – I was asked to build an ML‑driven tool that could automatically rank suppliers by total cost of ownership, factoring in usage patterns, SLA uptime, and hidden support fees, so the purchasing team could focus on negotiation rather than data crunching.

**Action** – First, I collected 24 months of invoice and performance data from our ERP and monitoring systems. Using Python’s scikit‑learn, I engineered features such as average monthly traffic, peak usage penalties, and historical SLA breach rates. I trained a Gradient Boosting Regressor to predict the annual cost per GB for each vendor. After validating the model on a hold‑out set (R² = 0.87), I wrapped it in a Flask API that the procurement portal could query in real time. I also built a dashboard in Power BI that visualized risk scores and suggested optimal contract terms.

**Result** – Within three months of deployment, our annual storage spend dropped by 22 % while SLA compliance improved from 92 % to 97 %. The purchasing team saved roughly 1,200 labor hours per quarter, allowing them to renegotiate volume discounts. I learned that marrying domain expertise with data science can turn a manual process into a strategic advantage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
