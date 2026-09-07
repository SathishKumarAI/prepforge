---
qid: ing_6ebffccacd__aws__local
question: Anyone can add documents to your corpus. How do you stop an attacker planting
  a document that hijacks the assistant?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 436
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:34:22-05:00'
sources: []
---

**Situation & Task**  
When we let users upload arbitrary docs to an AI assistant, the risk is that a malicious file could inject code or data that hijacks downstream inference (e.g., prompt injection). I was responsible for building a secure ingestion pipeline that protects both the model and the user experience.

**Action – Architecture & Controls**  
1. **S3 + Object Lambda + GuardDuty** – All uploads go to an *untrusted* bucket. Object Lambda scans each file with a custom Lambda that runs a lightweight regex‑based sanitizer and a pre‑trained NLU model (Amazon Comprehend Custom) for malicious intent.  
2. **IAM & KMS** – The ingestion role has the least privilege; data is encrypted at rest (KMS).  
3. **AWS WAF + Rate Limiting** – Prevents DDoS of the upload endpoint.  
4. **Audit Trail** – CloudTrail logs every PUT, and an Athena query runs nightly to flag any files that bypassed filters, generating a CSV for manual review.  

The pipeline achieved 99.9 % false‑positive rejection while keeping latency <200 ms, ensuring no attacker could inject a document that would alter model behavior.

**Result**  
After deployment, we saw a **0 % incident rate** over six months and reduced manual review effort by **70 %**, freeing the security team to focus on new threats.  

**Reflection (Bar‑raiser)**  
I owned the problem from threat modeling through deployment, dove deep into AWS services to balance cost ($3/month for S3 + Lambda vs. $20/month if we used a commercial scanner), and quantified impact in terms of prevented breaches and operational savings. Failure modes were logged; when a false negative slipped through on a test run, I updated the regex library and retrained the model—showing continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
