---
qid: ing_0f8482fd82__aws__local
question: 'Explain: HTTP Versions — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 436
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:00:31-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the redesign of a global media‑delivery platform that served 1 billion requests/day. The legacy stack only supported HTTP/1.1, causing latency spikes during peak traffic and exposing us to security risks.

**Action**  
I scoped the problem with **Customer Obsession** and **Ownership**: we needed a system that automatically negotiated the best protocol (HTTP/2 or QUIC) while guaranteeing end‑to‑end encryption. I proposed a two‑tier architecture:

1. **Edge Layer** – Amazon CloudFront + ALB with TLS termination, enabling HTTP/2/3 via AWS Global Accelerator.  
2. **Origin Layer** – EC2 Auto Scaling Group running Nginx 1.21+ configured for *h2* and *quic*, behind an Application Load Balancer that only accepts HTTPS.

We used Amazon S3 for static assets and DynamoDB for session metadata, all protected by IAM roles. To monitor protocol usage I added CloudWatch metrics (`HTTP/2_Requests`, `QUIC_Requests`) and set alerts for any drop below 95% of total traffic.

**Result**  
Within three months we achieved:

- **30 % reduction in average latency** (from 350 ms to 245 ms) during flash sales.  
- **99.999 % availability** across all regions, validated by a multi‑region failover test.  
- **$120k/yr cost savings** from reduced bandwidth via HTTP/2’s header compression and multiplexing.

**Reflection**  
The biggest learning was that protocol upgrades can be “silent” if we don’t expose the metrics; I instituted a quarterly “Protocol Health Review” to catch regressions early. This approach satisfies **Dive Deep** (metrics‑driven) while delivering measurable business value, which is exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
