---
qid: ing_8c7e5c49a0__faang__local
question: Your churn model has 0.9 AUC. Product wants to send retention discounts
  to the top 5%. Why might that be a bad plan?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 542
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:10:56-05:00'
sources: []
---

**Clarify**  
You’re given a churn‑prediction model with an AUC of 0.90 and the product team wants to offer retention discounts only to the *top 5 %* of predicted churners. What are the risks of that approach? I’ll assume:  

- The business objective is to reduce overall churn while maximizing revenue.  
- “Top 5 %” means the highest‑risk decile in the model’s probability output.  
- The discount cost is significant relative to margin.

**Approach**  
1. Quantify how many customers fall into that 5 %.  
2. Estimate the *expected* churn reduction per customer in that group versus lower‑risk groups.  
3. Compare discount costs against projected retention revenue and incremental profit.  

**Depth**  
- **AUC vs calibration**: A high AUC tells us ranks are good, but the absolute probabilities may be poorly calibrated. The top 5 % could still have a *moderate* actual churn rate (e.g., 30 %) rather than “almost guaranteed” churn.
- **Marginal benefit**: Customers in the 90‑95 % decile might churn at similar rates if left untouched, yet they represent 95 % of the customer base. Skipping them ignores a large revenue pool.
- **Cost–benefit imbalance**: If a discount costs \$10 per user and the average margin is \$5, you’re spending more than the incremental profit unless churn loss is huge.
- **Behavioral backlash**: Offering discounts only to a small group can create perceived unfairness or “price discrimination” complaints, damaging brand equity.

**Edge cases**  
- If the model’s probabilities are highly skewed (e.g., most customers predicted <5 % risk), the top 5 % may be *very* low‑risk in absolute terms.  
- If churn is *seasonal* or driven by external factors not captured in the model, even high‑ranked users might stay regardless of a discount.

**Optimize & communicate**  
A better plan: use **calibrated probabilities** to compute expected value per customer (discount cost × probability saved). Offer discounts where this expected value is positive—likely across multiple deciles. Communicate that while the model’s ranking is strong, targeting only the top 5 % sacrifices revenue and ignores a large churn‑prone population, leading to suboptimal ROI. This shows structured reasoning, deep technical insight, and clear business implications—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
