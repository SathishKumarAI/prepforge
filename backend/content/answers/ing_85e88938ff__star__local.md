---
qid: ing_85e88938ff__star__local
question: 'Explain: AI Harms are Societal, Not Just Individual'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 318
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:55-05:00'
sources: []
---

**Situation:**  
During my last internship at a fintech startup, we were building an automated credit‑scoring model that used user browsing data to predict loan repayment risk. The team celebrated the model’s high accuracy—AUC of .87—but I noticed it was disproportionately flagging applicants from certain zip codes.

**Task:**  
I needed to investigate whether the algorithm was introducing bias and propose a solution that could be deployed without scrapping the entire system or losing its predictive power.

**Action:**  
First, I ran fairness diagnostics (demographic parity, equal opportunity) using AI Fairness 360. The results showed a 12 % higher false‑positive rate for minority‑served areas. I then redesigned the feature set to remove location‑dependent variables and applied reweighting during training. After retraining, the AUC dropped only 1.3 %, while fairness metrics improved dramatically—false‑positive rates were now within 2 % across groups. I documented the changes in a whitepaper for compliance and presented it to product leadership.

**Result:**  
The updated model was approved for production; over the first quarter, we processed 15 k new loans with a 4 % reduction in default rate and no evidence of disparate impact. This exercise taught me that AI harms are systemic—small data quirks can amplify societal inequities—and that responsible engineering requires both technical rigor and ethical vigilance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
