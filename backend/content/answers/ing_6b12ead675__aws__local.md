---
qid: ing_6b12ead675__aws__local
question: 'Explain: Pitfall 1: Small Test Set — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 409
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:26:11-05:00'
sources: []
---

**Pitfall 1 – “Small Test Set” in AI Capability Assessment**

> *Leadership Principles:* **Customer Obsession**, **Dive Deep**  

**Situation:**  
At a mid‑size fintech, I led an ML model that predicted fraud risk. The team used only 200 labeled cases for validation, hoping quick insights would drive product releases.

**Task:**  
Show the business impact of this limited test set and redesign the evaluation pipeline to reflect real customer traffic.

**Action:**  
1. **Data‑driven audit:** Ran a *confusion matrix* on the 200‑case set – precision 0.73, recall 0.45.  
2. **Expanded sampling:** Leveraged AWS Glue to crawl 1 M production logs over 30 days, applying stratified sampling (10× larger test set).  
3. **Automated pipeline:** Built a CI/CD workflow in AWS CodePipeline that triggers every night: S3 → Lambda → SageMaker Ground Truth for labeling → SageMaker Evaluation jobs.  
4. **Metrics:** Updated precision to 0.84, recall to 0.68, and computed lift vs baseline (12% reduction in false positives).  

**Result:**  
The new test set revealed a 20 % over‑optimistic performance estimate, preventing a costly 3‑month product delay. The automated pipeline cut model retraining time from 2 weeks to 48 hours and reduced evaluation cost by 35 % (SageMaker endpoints on spot instances).  

**Bar‑raiser check:**  
- Demonstrated ownership of the end‑to‑end ML lifecycle.  
- Dived deep into data quality, not just accuracy numbers.  
- Quantified impact (cost savings, time reduction).  
- Learned: “Always validate with a representative sample; small sets can mislead.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
