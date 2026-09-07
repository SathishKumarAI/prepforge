---
qid: ing_5b835a1dd1__aws__local
question: 'Explain: Likelihood and Maximum Likelihood Estimation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 406
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:06-05:00'
sources: []
---

**Situation / Task**  
I led a data‑science sprint to build an automated fraud‑detector for a payment gateway that processes ~3 M transactions/day. The team needed a statistical baseline to flag anomalies before the ML model ran.

**Action (Technical)**  
1. **Define likelihood**: For each transaction feature vector \(x\), compute \(p(x|\theta)\) under a Gaussian mixture fit to historical “clean” data using EM on Amazon SageMaker.  
2. **Maximum Likelihood Estimation (MLE)**: Run EM until convergence; store the parameter set \(\hat{\theta}\).  
3. Deploy the inference pipeline as a stateless Lambda function triggered by Kinesis Data Streams, scaling to 10 k concurrent invocations.  
4. Persist \(\hat{\theta}\) in DynamoDB for zero‑downtime updates and use SQS for retry logic.

**Result (Quantified)**  
- Reduced false positives from 8% to 3.2% within 48 h, cutting manual review cost by $120k/month.  
- Latency <5 ms per transaction, meeting SLA for real‑time fraud blocking.  

**Leadership Principles Anchored**  
- **Customer Obsession**: Delivered a smoother user experience with fewer false alerts.  
- **Ownership**: Took end‑to‑end responsibility from data ingestion to deployment and monitoring.

**Bar‑raiser Signals**  
- Demonstrated *dive deep* into probabilistic modeling, explaining the trade‑off between model complexity (Gaussian mixtures) and inference speed.  
- Quantified impact with concrete metrics.  
- Learned from an initial mis‑specification of feature scaling that caused a 12 % spike in false positives; corrected by adding a preprocessing Lambda step.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
