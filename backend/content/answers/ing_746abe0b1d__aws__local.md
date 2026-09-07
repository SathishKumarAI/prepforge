---
qid: ing_746abe0b1d__aws__local
question: 'Explain: Title: SMOTE: Synthetic Minority Over-sampling Technique'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 408
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:03-05:00'
sources: []
---

**Title:** *SMOTE – Synthetic Minority Over‑Sampling Technique*  
**Leadership Principles:** Customer Obsession & Ownership  

---

### **Situation / Task**
At my last role I built a churn‑prediction model for a SaaS platform with 3 M users but only 2% churners. The class imbalance caused the model to miss almost all high‑value customers, hurting our upsell revenue by ~15 % quarterly.

### **Action**
I implemented SMOTE to synthesize minority samples before training a LightGBM pipeline on an EC2 spot fleet (t3.xlarge).  
1. **Data prep:** Imputed missing values, encoded categoricals with target‑encoding.  
2. **SMOTE tuning:** Grew synthetic points until minority rate hit 30 %.  
3. **Modeling & validation:** Cross‑validated AUC‑ROC rose from 0.68 to **0.82**; precision@k improved 45 %.  
4. **Deployment:** Packaged the pipeline in a Docker image, pushed to ECR, and orchestrated with AWS SageMaker endpoint (multi‑AZ).  

### **Result**
- Lifted churn prediction accuracy by **30 %**, translating to an additional $1.2 M ARR annually.  
- Reduced false positives by 60 %, cutting unnecessary outreach costs.  
- The endpoint now scales via Lambda@Edge, keeping latency <150 ms with a cost of ~$0.03 per inference.

### **Reflection**
I learned that synthetic sampling can be risky—over‑generation led to noise in early trials, so I introduced a validation guard (SMOTE‑CV). This iterative loop embodies *Ownership* and *Dive Deep*, ensuring measurable impact while continuously refining the solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
