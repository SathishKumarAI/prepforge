---
qid: ing_1411299df4__aws__local
question: 'Explain: Enforceable Commitments — Secure legal AI for the most sensitive
  matters | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 457
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:10:21-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team at AWS, we were asked by a large financial institution to build an *AI‑powered contract‑review engine* that could generate enforceable commitments for highly regulated legal documents (e.g., derivatives agreements). The client required 99.9 % accuracy on clause extraction and real‑time compliance checks, all under strict data‑privacy regulations.

**Action**  
- **Ownership & Customer Obsession:** I set up a dedicated “Legal AI” squad, defined success metrics (precision/recall > 0.97, latency < 200 ms), and created a shared backlog with the client’s legal experts.  
- **Dive Deep & Bias for Action:** We built a custom transformer model fine‑tuned on 120 k annotated clauses, then wrapped it in a stateless Lambda layer behind an API Gateway to achieve sub‑50 ms inference.  
- **Design & AWS Services:**  
  - *Amazon SageMaker* for training and incremental retraining.  
  - *AWS Glue* to ingest and clean the legal corpus.  
  - *KMS* + *Cognito* for end‑to‑end encryption and user authentication.  
  - *DynamoDB* with conditional writes to enforce immutable commitment records (audit trail).  
- **Scalability & Cost:** Autoscaling Lambda handled peak loads (up to 10 k concurrent requests) while keeping the average cost <$0.01 per request, versus $0.05 for a traditional server‑based solution.

**Result**  
The deployed engine achieved **99.95 % accuracy** on a blind test set and reduced legal review time by **70 %**, saving the client ~$1.2 M annually. We received an internal “Customer Obsession” award, and the architecture was later adopted as a reference for AWS’s Legal AI portfolio.

*Bar‑raiser note:* I demonstrated deep ownership, quantified impact, and iterated quickly from pilot failures to a production‑ready system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
