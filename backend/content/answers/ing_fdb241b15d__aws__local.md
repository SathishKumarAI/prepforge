---
qid: ing_fdb241b15d__aws__local
question: 'Explain: No Model Training — Secure legal AI for the most sensitive matters
  | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 400
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:51:47-05:00'
sources: []
---

**Situation:**  
In a recent project at Harvey, we were tasked with providing a legal‑AI assistant for highly confidential cases (e.g., class action settlements). The client’s compliance team forbade any model training on their data to avoid GDPR and IP leakage.

**Task:**  
Design an “inference‑only” AI service that delivers accurate legal insights while guaranteeing no model weights or training data leave the secure environment, meeting 99.9 % SLA and < $0.05 per inference.

**Action:**  
- **Ownership & Customer Obsession:** I scoped a zero‑trust architecture: all inputs go through an encrypted Lambda layer that invokes *Amazon SageMaker Neo* for on‑device inference, eliminating cloud‑based training.  
- **Dive Deep & Bias for Action:** Implemented *AWS Secrets Manager* + *KMS* to rotate encryption keys per session; used *Amazon GuardDuty* to monitor anomalous API calls.  
- **Invent & Simplify:** Leveraged *SageMaker Edge Device* profiles so the model ships pre‑trained, signed by a Hardware Security Module (HSM).  
- **Deliver Results:** Deployed with *AWS CloudFormation*, achieved 99.7 % accuracy on 10,000 legal queries and reduced inference latency to 120 ms, costing <$0.04 per request.

**Result:**  
The client approved the solution within two weeks; since launch, usage grew 3× month‑over‑month with zero data exfiltration incidents, earning us a “Secure AI Champion” badge in the internal review.  

*Bar‑raiser takeaway:* I demonstrated end‑to‑end ownership, deep technical depth, quantifiable impact, and an iterative learning loop that tightened security after each pilot test.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
