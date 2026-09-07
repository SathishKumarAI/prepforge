---
qid: ing_8eb0bb1765__aws__local
question: 'Explain: Cross-Vendor Agent Orchestration via A2A'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 414
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:48:43-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a cross‑vendor AI platform that needed to orchestrate agents from Salesforce, SAP and Azure in real time for a Fortune 500 retailer. The goal was to reduce manual data stitching by 80% and cut end‑to‑end latency below 200 ms.

**Action**  
I built an *Agent‑as‑a‑Service* (A2A) hub using **Amazon EventBridge** as the event bus, with **Step Functions** coordinating vendor SDK calls. Each vendor agent ran in a **Fargate** container behind an **Application Load Balancer**; I exposed them via **API Gateway** for fine‑grained throttling. For state persistence I used **DynamoDB** (eventual consistency) and **SQS** for retry queues. To keep costs low I enabled **Auto Scaling** on Fargate and leveraged Spot Instances, saving ~35% vs on‑demand.

**Result**  
The orchestration pipeline processed 12 M events/day with <200 ms latency, dropping manual effort by 82%. We achieved 99.95% availability across three AZs while keeping the monthly cost at $18K versus an estimated $32K for a monolithic solution.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Delivered instant insights to business users.  
- **Ownership & Dive Deep** – Designed end‑to‑end, tuned performance and cost.  

### Bar‑raiser cues I’d listen for  
- Evidence of *ownership* (owning metrics, troubleshooting).  
- Depth in *dive deep* (explain choice of services, trade‑offs).  
- Quantified impact (exact numbers).  
- Learning from failure (how retries & idempotency were handled).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
