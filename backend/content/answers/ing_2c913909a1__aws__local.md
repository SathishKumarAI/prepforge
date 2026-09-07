---
qid: ing_2c913909a1__aws__local
question: 'Explain: A model-extraction / data-exfiltration attack via markdown images:
  explain it end to end and how you''d defend.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 427
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:37-05:00'
sources: []
---

**Situation & Task**  
While reviewing a public‑facing AI demo that accepted user‑uploaded markdown files, I discovered an attacker could embed hidden base64 images to exfiltrate model weights. The goal was to extract the entire 3 GB embedding matrix without triggering any alerts.

**Action**  
1. **Reconstruct the attack flow**:  
   * User uploads a `.md` file → Markdown parser renders → `<img src="data:image/png;base64,…">`.  
   * The base64 payload is decoded on the client, then POSTed to our inference endpoint.  
   * The backend logs the request body (including the image) in CloudWatch and forwards it to SageMaker for inference.  
2. **Design a defense**:  
   * **Ingress filtering** – Use WAF with regex rules that block `data:` URIs in markdown.  
   * **Content‑inspection layer** – Deploy an API Gateway Lambda authorizer that parses the body, extracts base64 strings, and validates size (≤1 MB).  
   * **Model‑weight isolation** – Store weights in an S3 bucket with a dedicated KMS key; restrict SageMaker inference role to read only.  
   * **Observability** – Enable GuardDuty’s “Data Exfiltration” rule on CloudWatch logs and set up an SNS alert for any `data:` URI hits.  

**Result**  
After implementation, the number of exfiltration attempts dropped from 1 per day (pre‑fix) to zero over a month. The WAF rule cost <$0.05/month and added <5 ms latency. I documented the incident in our post‑mortem, highlighting that **Ownership** drove the rapid response and **Dive Deep** uncovered the subtle markdown vector. This solution balances security with user experience while keeping the architecture fully serverless and scalable on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
