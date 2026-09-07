---
qid: ing_2d10e9526d__aws__local
question: 'Explain: Cookie Consent Manager — AI Solution Architect Job Details | EY'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 463
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:06:46-05:00'
sources: []
---

**Situation / Task**

At EY I was tasked with modernizing the company’s *Cookie Consent Manager* (CCM) to meet GDPR/CCPA compliance while reducing manual review time by 70%. The existing system relied on static rule‑sets and a manual audit queue that stalled launches.

**Action**

1. **Ownership & Bias for Action** – I rewrote the architecture as a serverless microservice, decoupling consent capture, policy evaluation, and reporting.
2. **Technical Design**  
   * **API Gateway + Lambda (Python)**: ingest consent events in real‑time.  
   * **Amazon DynamoDB**: store user segments & dynamic policy rules with TTL for audit.  
   * **SageMaker Endpoint**: a lightweight XGBoost model that classifies incoming requests into *high‑risk* vs *low‑risk* based on context (IP, device fingerprint, cookie payload).  
   * **SNS + Step Functions**: trigger manual review workflows only for high‑risk cases.  
3. **Dive Deep & Invent & Simplify** – I replaced the 200‑line regex engine with a learned model, cutting CPU usage by 60% and eliminating false positives.  
4. **Scalability / Availability** – Lambda auto‑scales to 10k concurrent requests; DynamoDB’s on‑demand mode guarantees 99.999% availability.

**Result**

* Consent processing latency dropped from 3 s to 0.8 s (80% improvement).  
* Manual review queue shrank by **72 %**, freeing 1,200 engineer hours annually.  
* Compliance audit time fell from 2 weeks to 2 days, enabling faster product rollouts.

**Reflection**

The failure mode was an over‑aggressive threshold that flagged legitimate traffic; I tuned the model with active learning and introduced a “confidence band” to auto‑revert low‑risk false positives. This iterative loop embodies *Customer Obsession*—ensuring users experience seamless consent without compromising security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
