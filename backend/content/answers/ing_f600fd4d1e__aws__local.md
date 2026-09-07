---
qid: ing_f600fd4d1e__aws__local
question: A stakeholder wants to send sensitive customer data (PII) to a third-party
  model API. They say the business need justifies it. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 405
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:10-05:00'
sources: []
---

**Situation**  
A product owner requested that we forward PII‑rich customer logs to an external ML service for sentiment analysis, claiming it would unlock a $2 M revenue stream.

**Task**  
I had to decide whether the data transfer was compliant with AWS’s privacy policies and our internal security posture while preserving business value.

**Action**  
1. **Ownership & Customer Obsession** – I convened a cross‑functional task force (Security, Legal, Data Governance).  
2. **Dive Deep** – Reviewed the third‑party SLA, performed a threat model, and quantified risk: 3 × 10⁴ PII records per day, 0.1% chance of exposure → ~$500k potential loss.  
3. **Design** – Proposed a *confidential computing* path:
   - Encrypt data with customer‑managed CMK (AWS KMS) before sending.
   - Use an intermediary “Data Lake” on Amazon S3 with bucket policies + object lock.
   - Route traffic through AWS PrivateLink to the API endpoint, ensuring no public Internet exposure.  
4. **Bias for Action** – Delivered a proof‑of‑concept in 2 weeks; the model returned predictions without decrypting raw PII.

**Result**  
The solution reduced potential data loss risk from $500k to <$10k (encryption overhead negligible). Compliance audit passed, and we signed an additional Data Processing Addendum with the vendor. The feature launched on schedule, generating a projected $1.8 M in incremental revenue while keeping customer trust intact.  

**Bar‑raiser takeaway** – I owned the risk assessment, dove deep into technical controls, quantified impact, and learned that encrypt‑then‑process can satisfy both compliance and business objectives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
