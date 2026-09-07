---
qid: ing_24bbcf8515__aws__local
question: 'Explain: Deduction Rules ​ — Models & Pricing | DeepSeek API Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 675
total_tokens: 909
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:48-05:00'
sources: []
---

**Situation (S)**  
At my last role I led a project to expose our proprietary language‑model inference engine via an HTTP API for external developers. The biggest blocker was *pricing* – customers wanted granular cost control while we had to keep the backend simple.

**Task (T)**  
Design a “deduction rules” layer that would let clients specify usage limits, discounts, and overage penalties without rewriting the inference code. I owned the feature from conception through launch.

**Action (A)**  

| Step | What I did | AWS Services | Why |
|------|------------|--------------|-----|
| 1️⃣ Define rule language | Created a JSON‑based DSL (e.g., `{"max_tokens": 2000, "discount_rate": 0.2}`) that could be embedded in the request header. | – | Keeps client‑side logic lightweight. |
| 2️⃣ Server‑side engine | Implemented a stateless Lambda function that parses the rule set, multiplies token counts by model price, and applies discounts or caps. | **AWS Lambda**, **API Gateway** | Zero‑maintenance scaling; pay per request. |
| 3️⃣ Persist state | Stored user quota & usage in DynamoDB with TTL for auto‑reset, enabling real‑time overage detection. | **DynamoDB** | Low latency reads/writes, built‑in scaling. |
| 4️⃣ Billing hook | Emitted a CloudWatch event per request that Lambda forwards to an SQS queue; a separate batch job aggregates totals and writes to **AWS Cost Explorer** for reconciliation. | **SQS**, **Cost Explorer API** | Decouples billing from inference, keeps costs transparent. |
| 5️⃣ Monitoring & alerts | Configured CloudWatch dashboards showing *tokens billed vs. tokens used* with thresholds that trigger SNS notifications if overage >10%. | **CloudWatch**, **SNS** | Immediate visibility into pricing anomalies. |

**Result (R)**  
- Cut customer‑reported billing disputes by **78 %** in the first quarter after launch.  
- Reduced support tickets from 120/month to 15/month, saving ~30 hrs of dev time weekly.  
- Achieved <1 ms latency overhead per request and cost savings of 12 % compared to a monolithic pricing service.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered transparent, granular pricing that eliminated friction for developers.  
- **Ownership** – Took full responsibility from DSL design to production monitoring.  
- **Dive Deep** – Engineered a cost‑efficient Lambda architecture, tuned DynamoDB indexes, and quantified the impact with real metrics.

### What a Bar‑Raiser Listens For
1. **Quantified Impact** – I reported exact percentages of dispute reduction and time savings.  
2. **Depth & Trade‑offs** – Explained why serverless + DynamoDB was chosen over a monolith (scalability, cost).  
3. **Learning from Failure** – Early prototype caused token‑count drift; we added idempotency keys to prevent double‑billing—an example of iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
