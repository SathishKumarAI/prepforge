---
qid: ing_bce85e58fc__star__local
question: 'Explain: VPC Endpoint (Gateway) — Typical AWS Network Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 318
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:48:55-05:00'
sources: []
---

**Situation** – While leading a migration of our data‑science platform from on‑premise to AWS, we had to keep all S3 traffic private and compliant with GDPR. The team was worried about exposing the bucket to the public internet while still allowing fast access for training jobs.

**Task** – I needed to design an internal network architecture that let EMR clusters and SageMaker notebooks reach the S3 bucket without traversing the Internet, ensuring zero egress costs and audit‑ready logs.

**Action** – I introduced a VPC endpoint of type *Gateway* attached to our VPC. First, I created a dedicated subnet for data workers and set up route tables that pointed all traffic destined for the S3 prefix list (com.amazonaws.us-east-1.s3) through the gateway endpoint. I then enabled *endpoint policies* restricting access to only the necessary bucket prefixes. Finally, I configured CloudTrail to log all API calls via the endpoint and used AWS Config to enforce the policy.

**Result** – The architecture cut S3 egress charges by 0 % (no public traffic) while improving latency by ~30 %. Audit logs showed no external IPs accessing S3, satisfying compliance. I learned how gateway endpoints can replace NAT or IGW for object storage access, simplifying security posture and cost control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
