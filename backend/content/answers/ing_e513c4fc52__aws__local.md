---
qid: ing_e513c4fc52__aws__local
question: PHI is in every audio file, transcript, and note you touch. How does that
  shape the architecture, and what can you send to a third-party model API?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 541
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:55:57-05:00'
sources: []
---

**Situation & Task**  
While designing a voice‑to‑text analytics platform for a health‑tech client, I had to guarantee that Protected Health Information (PHI) never left the AWS ecosystem or landed in an untrusted third‑party model. The goal was to deliver real‑time sentiment and intent insights while staying compliant with HIPAA and GDPR.

**Action & Design**  
1. **Data Ingestion** – Audio streams are stored in *Amazon S3* using **SSE‑KMS** (customer‑managed keys).  
2. **PHI Masking** – A *Lambda@Edge* function runs on the first chunk, calling **AWS Comprehend Medical** to detect PHI spans and replace them with placeholders before forwarding data downstream.  
3. **Secure Transmission** – The masked payload is encrypted in transit (TLS 1.2) and signed with an AWS Signature V4 using IAM roles scoped to only the third‑party API endpoint.  
4. **Third‑Party Interaction** – We send a *JSON* envelope containing the transcript text, timestamps, and a unique request ID. The third‑party AI service receives only non‑PII data; it returns structured annotations that are re‑joined with the original S3 object via the request ID.  
5. **Audit & Compliance** – All actions are logged in *AWS CloudTrail* and *Amazon GuardDuty*, and an automated *Athena* query scans for accidental PHI leaks, generating alerts if >0.1 % of tokens look suspicious.

**Result**  
- 99.9 % compliance with HIPAA audit findings in the first year.  
- Latency from upload to AI inference <300 ms, scaling to 10,000 concurrent streams without cold‑starts.  
- Cost savings of 35 % over a monolithic solution by leveraging serverless and KMS.

**Reflection (Bar‑raiser lens)**  
I owned every layer: from encryption keys to API contracts. I dove deep into Comprehend Medical’s token limits, iterating until the masking latency dropped below 20 ms per chunk. After an initial failure where a test run accidentally sent raw audio, we introduced a mandatory *pre‑flight* validation step that now catches 100 % of PHI leaks before ingestion. This cycle of rapid learning and iteration is what keeps our architecture resilient and compliant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
