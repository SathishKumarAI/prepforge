---
qid: ing_6344e2dceb__aws__local
question: 'Explain: Software and Game Downloads — Content Delivery Network (CDN) |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 425
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:09:35-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of our global game‑download service that shipped 1 B+ downloads per month. The latency on the edge was >200 ms for users in Asia, causing a 12 % churn spike during new releases.

**Action – Design**  
I built a multi‑region CDN architecture using **Amazon CloudFront + S3** for origin storage and **AWS Global Accelerator** to steer traffic to the nearest healthy region.  
* *Edge caching*: Configured cache‑behaviour rules with 30 day TTL for static assets, and dynamic tiering (short TTL) for patch bundles.  
* *Versioning & integrity*: Leveraged S3 object versioning + SHA‑256 checksums stored in DynamoDB to prevent stale or corrupted downloads.  
* *Scalability*: CloudFront automatically scales to 10 k requests/sec per edge; Global Accelerator uses Anycast to absorb sudden traffic spikes (e.g., post‑launch).  
* *Cost*: We achieved a 35 % reduction in egress costs by moving from direct S3 transfers (~$0.09/GB) to CloudFront’s tiered pricing (~$0.07/GB).  

**Result**  
Latency dropped from 200 ms to <70 ms globally; download completion rate rose from 84 % to 96 %. The churn during releases fell by **18 %**, translating to ~$4M annual revenue retention.

**Learning & Ownership**  
I instituted a “Post‑mortem Sprint” after each release, quantifying cache hit ratios and edge health metrics. This practice surfaced an under‑utilized edge in Brazil, leading to a 7 % performance lift. I also championed automated CloudWatch alerts for cache miss spikes, ensuring proactive scaling—demonstrating true ownership and bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
