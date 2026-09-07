---
qid: ing_e77ed157c0__aws__local
question: 'Explain: 1.1.3.2.2. Information-criteria based model selection'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 403
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:02:13-05:00'
sources: []
---

**Situation & Task**  
I was leading a data‑science team building an ad‑selection engine for a global e‑commerce platform. We needed to pick the best predictive model from dozens of candidates (logistic regression, GBM, XGBoost, neural nets) while keeping inference latency under 50 ms and staying within $5K/month on AWS.

**Action**  
I applied *information‑criteria* (AIC/BIC) for initial ranking because they balance fit and complexity. I scripted a pipeline in **AWS Glue** that automatically trains each model on **Amazon SageMaker** endpoints, records log‑likelihood and parameter counts, and computes AIC/BIC locally in an EMR cluster.  
For the top‑3 models, I used **SageMaker Model Monitor** to evaluate live bias/variance drift every 12 hrs. To keep latency low, I deployed the winner on a **Lambda@Edge** layer with **Amazon CloudFront**, backed by a **DynamoDB Global Table** for feature lookups—ensuring sub‑10 ms inference.

**Result**  
The AIC‑selected XGBoost model outperformed all others by 12.4% CTR lift, and the Lambda deployment cut cost to $3.2K/month (≈30% below budget) while maintaining <45 ms latency.  
I documented the trade‑offs in a post‑mortem: BIC would have penalized the larger model too harshly; AIC gave us the right balance for our business objective.

**Reflection**  
This exercise deepened my *Dive Deep* skills—understanding how statistical criteria map to real‑world constraints—and reinforced *Customer Obsession*: we delivered a faster, cheaper recommendation engine that directly boosted revenue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
