---
qid: ing_27a9b541d4__aws__local
question: Tell me about a technical disagreement over model choice - how was it resolved?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 404
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:27-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a fraud‑detection pipeline to SageMaker on AWS. The data science team preferred a deep neural net (DNN) for its higher accuracy, while the engineering squad argued for an XGBoost model because it was easier to deploy and interpret.  

**Action**  
I organized a *model‑battle* sprint: both teams built prototypes using the same 5 M transaction dataset. I set up an A/B test in **SageMaker Processing** that fed 1 M live transactions over two weeks, capturing true positives/negatives. We also benchmarked inference latency on **ECS Fargate** vs. **Lambda** and cost via **Cost Explorer**.  

The DNN achieved 0.93 AUC but required 300 ms per inference and $0.12 per month for a single *ml.m5.large* instance, while XGBoost hit 0.91 AUC with <30 ms latency and <$0.03/month on **ECS Fargate**.  

**Result**  
We chose XGBoost—meeting the SLA of 50 ms with a 4× cost reduction—and added an optional “high‑risk” flag to trigger the DNN for edge cases, improving overall fraud detection by 2.5% (≈12K additional blocked fraudulent orders). The experiment validated the *Bias for Action* and *Ownership* principles; it also taught us that trade‑offs between accuracy, latency, and cost can be quantified with real traffic.  

**Reflection**  
The bar‑raiser would note my ownership of cross‑functional alignment, deep dive into data/metrics, and learning loop: we now run quarterly model reviews to keep the balance optimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
