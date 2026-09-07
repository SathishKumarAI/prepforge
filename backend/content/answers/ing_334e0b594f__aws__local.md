---
qid: ing_334e0b594f__aws__local
question: 'Explain: Medical Insurance — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 559
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:21:18-05:00'
sources: []
---

**Situation / Task**  
I was hired as a Machine‑Learning Engineer at a health‑tech startup that wanted to launch a *Medical Insurance Recommendation Engine* for its “Join Us” partnership program. The goal was to predict the best policy mix for each customer and reduce churn by 15 % within six months.

**Action (Design & Execution)**  
- **Data ingestion**: Used **AWS Glue** + **Amazon S3** to crawl CRM, claims, and external health‑datasets; automated ETL with *Glue Jobs* that ran nightly.  
- **Feature store**: Deployed **Amazon SageMaker Feature Store** to centralize high‑velocity features (age, pre‑existing conditions, claim history) and ensure freshness within 10 minutes.  
- **Model training**: Trained a Gradient‑Boosted Decision Tree on **SageMaker Autopilot**, then fine‑tuned with **AWS SageMaker Pipelines** to incorporate business constraints (premium caps).  
- **Inference & scaling**: Deployed the model as a **SageMaker Endpoint** behind an **Application Load Balancer**; auto‑scales by CPU utilization, guaranteeing <200 ms latency.  
- **Monitoring**: Integrated **Amazon CloudWatch** and **AWS SageMaker Model Monitor** to flag drift (accuracy fell 3 % → retraining triggered).  

**Result**  
- Achieved **92 % precision / 88 % recall** on policy‑fit predictions, up from a baseline of 68 %.  
- Churn dropped by **17 %** in the first quarter after launch.  
- Cost per inference stayed under **$0.005**, saving $120k annually versus an on‑prem GPU cluster.

---

### Leadership Principles Highlighted
| Principle | How it Shines |
|-----------|---------------|
| **Ownership** | Took full ownership of data pipeline, model lifecycle, and cost control. |
| **Dive Deep** | Built custom feature store, performed error analysis to surface root causes. |
| **Deliver Results** | Exceeded churn‑reduction target by 2 % while cutting inference costs. |
| **Bias for Action** | Deployed a production endpoint within 4 weeks of requirement gathering. |

> *Bar‑raiser focus*: Did I own the end‑to‑end system? Did I dive into data/model metrics to drive improvements? What was the quantified business impact, and what did I learn from the first iteration that informed the next version?

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
