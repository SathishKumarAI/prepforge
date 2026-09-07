---
qid: vq_4a54c9a976__aws__local
question: Q20- When should you use classification over regression?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 484
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:50:13-05:00'
sources: []
---

**When to pick classification vs. regression – a data‑driven decision**

*Leadership Principles:* **Customer Obsession** (understand what the customer actually needs) & **Dive Deep** (analyze metrics to justify the choice).

---

### Situation  
I was building an email‑spam filter for a SaaS client. The product team wanted a *binary “spam / not spam”* label so that downstream workflows could route messages automatically.

### Task  
Decide whether to treat it as a classification problem or a regression problem that outputs a probability score, then design the pipeline.

### Action  
1. **Requirements dive** – Customer wanted a crisp flag; any uncertainty would trigger manual review, incurring cost per false positive/negative.  
2. **Metric analysis** – Calculated cost matrix:  
   - False positive (legitimate → spam): \$0.50 per email.  
   - False negative (spam → legit): \$5.00 per email.  
3. **Model choice** – A *binary classifier* (e.g., XGBoost) directly optimizes a threshold on the probability to minimize expected cost, while a regression model would need an extra post‑processing step and still risk miscalibration.  
4. **AWS implementation** –  
   - Train on Amazon SageMaker with built‑in XGBoost.  
   - Deploy as a real‑time endpoint (SageMaker RealTimeInference).  
   - Use Amazon CloudWatch to monitor prediction latency (<50 ms) and error rates, auto‑scaling via Lambda triggers.  

### Result  
The classifier achieved **95% precision** and **92% recall**, reducing the overall cost by **$12,300/month** compared to a regression baseline that required manual threshold tuning and incurred higher false‑negative penalties.

---

**What a bar‑raiser looks for:** I showed ownership of the business impact (cost savings), dove deep into metrics (cost matrix, precision/recall trade‑off), quantified results, and learned from an earlier pilot where we mistakenly used regression and paid $8k in wasted manual reviews. This reinforces that choosing classification was the right, data‑driven decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
