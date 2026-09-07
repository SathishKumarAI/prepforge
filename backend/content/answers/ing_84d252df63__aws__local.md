---
qid: ing_84d252df63__aws__local
question: Who Presents the QR Code? — 4 Ways of QR Code Payment
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 443
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:25:27-05:00'
sources: []
---

**Situation & Task**

When I joined the Payments team at Amazon, we were asked to launch a new QR‑code payment flow for our grocery app. The challenge was to decide *who* would generate and present the QR code—customers’ devices, merchant kiosks, or an in‑app server—while keeping latency < 200 ms, cost <$0.01 per transaction, and maintaining PCI compliance.

**Approach**

1. **Customer Obsession + Bias for Action** – I ran a quick A/B test (3 weeks) across all three options on 2M active users.
2. **Dive Deep** – Collected metrics: latency, error rate, fraud incidents, and server CPU usage.  
   *Customer‑device*: Avg. 120 ms, no server load, but ~15 % QR‑scan failures in low‑light conditions.  
   *Merchant kiosk*: 350 ms (exceeds SLA), $0.05 per QR due to on‑prem hardware licensing.  
   *Server‑generated (S3 signed URL + CloudFront)*: 85 ms, $0.006/QR, 0% scan failures, PCI‑compliant via KMS encryption.
3. **Design Decision** – Adopted server‑generated QR with S3+CloudFront, signed URLs stored in DynamoDB for audit. Used Lambda@Edge to rotate keys every 24 h (cost $0.0004/λ).  

**Result**

- Latency reduced from 350 ms to 85 ms (77% improvement).  
- Cost per transaction dropped from $0.05 to $0.006 (87% savings).  
- Scan success rate improved from 85 % to 99%.  
- No new fraud incidents in the first 6 months post‑launch.

**Reflection**

I learned that *ownership* means validating assumptions with data, not just intuition. The bar‑raiser expects this depth—clear metrics, trade‑off analysis, and a cost‑benefit matrix—to demonstrate impact beyond surface logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
