---
qid: ing_f8b9d271eb__star__local
question: 'Explain: Scale the metrics that matter to your application'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 354
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:46:08-05:00'
sources: []
---

**Situation:**  
At my last job I was leading a fraud‑detection model for an online marketplace with 12 million monthly users. The business KPI was the false‑positive rate (FPR) because every incorrectly flagged transaction cost us average $3 in customer goodwill and $0.50 in processing.

**Task:**  
I had to reduce the FPR from 8% to below 4% while keeping the true‑positive rate above 95%, all within a two‑month sprint before the holiday season surge.

**Action:**  
First, I built an A/B test framework that let us run live experiments on 5% of traffic and capture real‑time metrics. I then introduced a cost‑sensitive loss function in our XGBoost model so misclassifying fraud was penalised five times more than missing a legitimate transaction. Next, I implemented a sliding‑window ensemble: each week’s top‑3 models were weighted by their recent precision/recall on the validation set, and I used SHAP values to prune features that added noise. Finally, I automated daily dashboards in Grafana that plotted FPR, recall, and revenue impact, so stakeholders could see trade‑offs instantly.

**Result:**  
Within six weeks we cut the FPR from 8% to 3.6%, increased true positives by 2.4%, and saved roughly $1.5 million in avoided goodwill costs during peak traffic. I learned that scaling metrics means treating them as part of a feedback loop—continuous monitoring, cost‑aware training, and data‑driven feature pruning are key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
