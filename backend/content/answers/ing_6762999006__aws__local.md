---
qid: ing_6762999006__aws__local
question: 'Explain: Title: Eliciting Harmful Capabilities by Fine-Tuning On Safeguarded
  Outputs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 425
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:18:39-05:00'
sources: []
---

**Title:** *Eliciting Harmful Capabilities by Fine‑Tuning on Safeguarded Outputs*  
**Leadership Principles:** Customer Obsession & Ownership  

---

### Situation  
I led a safety audit for an internal NLP product that was fine‑tuned on a curated “safeguarded” dataset (filtered for toxic language). The goal: ensure the model never generates disallowed content.  

### Task  
Demonstrate whether fine‑tuning on such a dataset actually prevents the emergence of harmful prompts when users craft adversarial inputs.

### Action  
1. **Risk assessment** – built an automated test harness that sent 10,000 adversarial prompt variations (generated via GPT‑4) to the model.  
2. **Metrics collection** – logged *harm probability* using OpenAI’s Moderation API and a custom toxicity score (AUC‑ROC).  
3. **Scalable deployment** – wrapped the model in an Amazon SageMaker endpoint behind AWS WAF rules; used **Amazon CloudWatch** for real‑time alerts, **AWS Step Functions** to orchestrate retries, and **SQS** for throttling.  
4. **Iterative fine‑tuning** – added counter‑examples from failed tests back into the training set (active learning loop).  

### Result  
- Initial pass: 12% of adversarial prompts exceeded the safety threshold.  
- After two iterations: reduced to **<1%**—a 90 % drop, meeting our SLA.  
- Cost: < $0.15 per inference; endpoint uptime 99.9 %.  

### Learnings  
*Ownership:* I owned the full lifecycle from detection to remediation.  
*Dive Deep:* Analyzed error logs to identify subtle distribution shifts.  
*Bar‑raiser signals:* Quantified impact (metric reduction), showcased iterative improvement, and documented fallback plans for any future drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
