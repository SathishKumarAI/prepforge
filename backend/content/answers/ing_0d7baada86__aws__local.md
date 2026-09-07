---
qid: ing_0d7baada86__aws__local
question: 'Explain: Preserve Client Address Carefully — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 487
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:56:16-05:00'
sources: []
---

**Situation & Task (S)**  
I led a feature in the company’s B2C analytics platform that required us to log every user request IP for fraud detection while staying GDPR‑compliant. The challenge was preserving the true client IP across multiple edge layers (CloudFront, ALB, Lambda) without exposing it internally or losing accuracy under heavy traffic (~200 k req/s).

**Action (A)**  
1. **Architecture** – Placed a CloudFront distribution in front of an Application Load Balancer (ALB). Enabled *X‑Forwarded‑For* on the ALB and set `preserve_client_ip` in Lambda@Edge to copy the header into a custom `Client-IP` field.  
2. **Security** – Used AWS WAF with IP reputation lists, encrypted the header at rest using KMS keys, and stored it only in a dedicated DynamoDB table (partition key: request_id).  
3. **Cost/Scale** – Leveraged DynamoDB’s on‑demand mode to auto‑scale; integrated CloudWatch Alarms for any anomalous latency (> 200 ms) and triggered an SNS alert to the ops team.  

**Result (R)**  
- Achieved <0.01% loss of IP data accuracy across all edge nodes.  
- Reduced compliance audit time by **70%** compared to manual log aggregation.  
- Maintained 99.999% availability during peak traffic, with cost under $1k/month for the logging infrastructure.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Ensured precise fraud‑detection data without compromising user privacy.  
- **Dive Deep & Ownership** – Designed a fault‑tolerant, auditable pipeline and owned post‑deployment monitoring to catch edge cases early.  

Bar‑raisers look for deep technical justification (why CloudFront + ALB + Lambda@Edge), quantified impact (accuracy %, cost, latency), and evidence of learning from a previous misstep (we previously lost ~5% IP data when using only ALB).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
