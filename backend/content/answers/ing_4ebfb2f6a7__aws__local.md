---
qid: ing_4ebfb2f6a7__aws__local
question: What is a denial-of-wallet attack, and how do you defend against it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 547
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:23:21-05:00'
sources: []
---

**Denial‑of‑Wallet Attack – What It Is**

A denial‑of‑wallet attack occurs when an adversary floods a wallet’s transaction endpoint (e.g., `/send`) with malformed or excessive requests, exhausting compute or network resources and preventing legitimate users from sending funds.

---

## 1️⃣ Behavioral (Amazon Way)

**Situation:** While leading the payment microservice for *FinPay*, we observed a 30 % spike in failed transactions during peak hours.  
**Task:** Identify the root cause and eliminate the outage risk.  
**Action:**  
- Conducted a **root‑cause analysis** (Dive Deep) using CloudWatch logs and X-Ray traces.  
- Discovered that an external partner’s bot sent 1 M malformed requests per minute, saturating our API gateway.  
- Implemented **rate limiting** with AWS WAF + API Gateway throttling (5 req/s per IP), added a **captcha‑challenge** for suspicious patterns, and moved the transaction endpoint behind an **Elastic Load Balancer** with Auto Scaling.  
- Updated the SDK to validate payloads early and return `400 Bad Request` for malformed data.

**Result:** 99.9 % uptime during peak, reduced malicious traffic by 97 %, and cut incident‑response time from 45 min to <5 min (Deliver Results).  

---

## 2️⃣ Technical / System Design

| Requirement | Solution | AWS Services | Trade‑offs |
|-------------|----------|--------------|------------|
| **Scalability** | Auto‑scaling API Gateway + Lambda | API Gateway, Lambda, ALB, EC2 Auto Scaling | Cold starts vs. cost |
| **Availability** | Multi‑AZ deployment; health checks | ELB, Route 53 latency routing | Slightly higher DNS lookup time |
| **Cost** | On‑demand only for traffic spikes | Spot Instances for worker nodes | Risk of interruption if spot bid drops |
| **Defense** | Rate limiting + payload validation | WAF, CloudFront, SQS (buffer) | Extra latency for queued requests |

---

### Bar‑Raiser Takeaway

- **Ownership:** Took full responsibility for the outage and drove cross‑team collaboration.  
- **Dive Deep:** Leveraged detailed telemetry to pinpoint malicious traffic patterns.  
- **Quantified Impact:** Delivered measurable uptime improvement and cost savings.  
- **Learning from Failure:** Implemented automated anomaly detection to catch future attacks early.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
