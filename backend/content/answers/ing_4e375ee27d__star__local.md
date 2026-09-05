---
qid: ing_4e375ee27d__star__local
question: 'Explain: Complete the check below to continue to OpenReview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 408
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:04:55-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching an academic paper submission system that integrated with OpenReview. Just two weeks before the beta launch our legal team flagged that every dataset used for model training must be verified by a checksum check—otherwise we risked leaking confidential reviewer data.

**Task:**  
I was tasked to design and implement a lightweight, automated checksum verification pipeline that would run on all incoming review files, flag any mismatches, and block the upload until resolution. The goal was to finish within 5 days without disrupting user flow.

**Action:**  
First, I mapped the file flow: users upload PDFs and metadata → our ingestion service stores them in S3 → a Lambda triggers a checksum job. I chose SHA‑256 for its collision resistance and wrote a Python script that streamed each object from S3, computed the hash on the fly (to avoid loading large files into memory), and compared it against a pre‑computed value stored in DynamoDB. If mismatched, the Lambda sent an SNS notification to the ops team and returned a 400 error to the client with a retry link. I also added a small UI badge that showed “Verified” once the checksum passed, giving reviewers confidence.

**Result:**  
The pipeline was deployed in four days, catching 12 out of 87 uploads with corrupted files before they ever hit OpenReview. User complaints dropped by 35%, and we avoided potential GDPR violations entirely. I learned how to balance security checks with user experience and that streaming hashes is far more efficient than downloading whole files for validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
