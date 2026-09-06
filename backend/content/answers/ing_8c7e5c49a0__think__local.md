---
qid: ing_8c7e5c49a0__think__local
question: Your churn model has 0.9 AUC. Product wants to send retention discounts
  to the top 5%. Why might that be a bad plan?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 623
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:21:00-05:00'
sources: []
---

We need to explain thinking process. Use numbered list, 150-220 words. Provide points: clarify assumptions (definition of churn, discount impact, evaluation metric). Mental model: precision/recall tradeoff, cost-benefit analysis, bias in AUC vs threshold. Step reasoning: high AUC but top5% may include false positives, cost of discount, revenue loss, missing true churners. Traps: overreliance on AUC, ignoring calibration, assuming discount triggers retention. Sanity-check: compute lift, net benefit, consider alternative targeting. Communicate: explain to product that AUC high but threshold selection critical, need precision at top 5%. Provide final answer in meta format.**1. Clarify the problem & state assumptions**  
   • What “top 5 %” means (score percentile or fixed‑size cohort).  
   • How churn is defined and measured (e.g., 3‑month attrition).  
   • The cost of a discount versus the revenue you’d recover if a churner stays.  

**2. Adopt a mental model: precision–recall & cost–benefit trade‑off**  
   AUC tells you how well scores rank positives overall, but it says nothing about *precision* at a specific threshold or the economic impact of acting on that subset.

**3. Reason step by step toward the answer**  

| Step | What to compute/consider |
|------|--------------------------|
| 1 | Estimate the prevalence of churn in your population (e.g., 10 %). |
| 2 | From the model’s ROC, find precision at the top 5 % threshold. |
| 3 | Calculate expected revenue loss per discount vs. expected gain if a true churner is retained. |
| 4 | Multiply by the number of customers in the cohort to get net benefit or cost. |

If precision ≪ prevalence, most discounts go to non‑churners → wasted spend and possible alienation.

**4. Common traps to avoid**  
   • Assuming AUC = 0.9 guarantees high accuracy at any cutoff.  
   • Ignoring that discounting a loyal customer may reduce lifetime value.  
   • Overlooking model calibration; scores may be poorly calibrated, so the “top 5 %” may not correspond to highest true risk.

**5. Sanity‑check & communicate clearly**  

1. Show the lift curve or precision–recall curve at 5 %.  
2. Run a simple cost‑benefit simulation (discount cost × cohort size vs. revenue retained).  
3. Explain that the model’s high AUC is encouraging, but without sufficient precision at the chosen threshold, the retention strategy could backfire.  

In short: **A high AUC does not guarantee that the top 5 % of scores are enriched for churners enough to make blanket discounts profitable.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
