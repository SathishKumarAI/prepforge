---
qid: ing_3c6541fdbc__aws__local
question: Walk me through writing a finished note back into Epic. What goes wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 358
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:42:31-05:00'
sources: []
---

**Situation & Task**  
I led the migration of our AI‑generated incident notes into Epic for a 30‑day sprint. The goal was to reduce manual entry by 70 % while keeping HIPAA compliance.

**Action**  
*Ownership & Dive Deep*: I mapped the end‑to‑end flow—NLP model → JSON payload → AWS Lambda → API Gateway → Epic REST endpoint.  
1. **Lambda** parsed the note, added required headers (`X-Patient-ID`, `Authorization`), and validated against Epic’s schema.  
2. I used **AWS Secrets Manager** for secure tokens and **SQS** to buffer spikes (max 5 k notes/day).  
3. For idempotency I stored a SHA‑256 hash of the payload in **DynamoDB**; duplicates were skipped, preventing duplicate records.  
4. I added CloudWatch metrics (`NotesSubmitted`, `NotesFailed`) and alerts for >2 % failure rate.

**Result**  
- 96 % successful writes (vs. 72 % manual baseline).  
- Latency dropped from 1.8 s to 350 ms average.  
- Cost fell by 45 % due to serverless architecture.  

**Bar‑raiser cues**: I showed full ownership, deep technical detail, quantified impact, and a post‑mortem that identified token rotation as the root cause of earlier failures—leading to automated secret refresh logic. This approach aligns with **Customer Obsession**, **Ownership**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
