---
qid: ing_8c7e5c49a0__star__local
question: Your churn model has 0.9 AUC. Product wants to send retention discounts
  to the top 5%. Why might that be a bad plan?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 405
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:48-05:00'
sources: []
---

**Situation** – In a subscription‑based SaaS platform I was working on a churn prediction model that achieved an AUC of 0.90 during validation. The product team wanted to launch a retention campaign offering a 30 % discount to the top 5 % of customers flagged by the model.

**Task** – My job was to evaluate whether targeting those customers would actually reduce churn profitably and to recommend a smarter allocation strategy.

**Action** – I first calculated the precision at the 5 % threshold using the validation set: only about 45 % of those selected were true positives, meaning more than half would receive an unnecessary discount. I then ran a cost‑benefit simulation that factored in discount revenue loss, expected churn lift (≈15 % for true positives), and the probability of misclassification. The model’s 0.90 AUC meant the top decile still had a substantial false‑positive rate; applying a blanket discount would burn $150k of margin while only saving about $80k in churned revenue. I proposed a hybrid rule: use the model score but also require an engagement metric (e.g., logins in last 30 days) before offering a discount, and cap the discount budget to the top 1 % of high‑value customers.

**Result** – The revised plan cut the expected cost by 60 %, reduced unnecessary discounts from 10 k to 2.5 k users, and increased retention lift for high‑value accounts by 12 %. I learned that a high AUC doesn’t guarantee perfect precision at any cutoff; business constraints and downstream costs must always shape how we operationalize ML models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
