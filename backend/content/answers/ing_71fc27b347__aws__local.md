---
qid: ing_71fc27b347__aws__local
question: 'Explain: How to build your first AI agent — How Do AI Agents Work - by
  Neo Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 600
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:43:12-05:00'
sources: []
---

**Answer (Amazon Interview Style)**  

> *“How do you build your first AI agent?”*  

### **Situation**
When I joined a fintech startup, we needed an autonomous chatbot to triage customer queries 24/7. The goal was to reduce manual ticket volume by **70 %** within six months.

### **Task**
Design and launch a production‑ready AI agent that could understand intent, retrieve relevant policy data, and hand off unresolved cases to humans—all while staying compliant with GDPR.

### **Action**

| Step | Technical Design | AWS Services |
|------|------------------|--------------|
| 1. Data ingestion | Scrape FAQ & support logs → preprocess, label intents (NLP) | Amazon S3, Glue |
| 2. Model training | Fine‑tune BERT on labeled data; evaluate F1 > 0.88 | SageMaker, EC2 Spot |
| 3. Runtime | Deploy as a serverless Lambda + API Gateway endpoint; autoscale via CloudWatch | Lambda, API Gateway |
| 4. Knowledge base | Store policy documents in DynamoDB with GSI for quick intent lookup | DynamoDB |
| 5. Human handoff | Trigger AWS Step Functions to route tickets to Zendesk | Step Functions, SNS |
| 6. Monitoring | CloudWatch metrics + Athena on logs → daily SLA reports | CloudWatch, Athena |

*Scalability*: Lambda scales to thousands of concurrent requests; DynamoDB’s auto‑scaling keeps latency < 200 ms.  
*Availability*: 99.9 % SLA via multiple AZs; backup model in another region.  
*Cost*: Spot training (≈ $0.05/hr) + Lambda ($0.20/1M invocations) → <$3k/month.

### **Result**
- *Customer impact*: Ticket volume dropped 73 %, freeing 12 FTEs.  
- *Revenue*: Upsell rate increased by 15 % due to faster responses.  
- *Compliance*: Zero GDPR violations after 12 months.

---

**Leadership Principles Highlighted**

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility from data prep to deployment, iterating until SLA met. |
| **Dive Deep** | Analyzed log patterns to pinpoint latency bottlenecks; tuned DynamoDB indexes accordingly. |
| **Deliver Results** | Met the 70 % reduction target in 5 months with measurable metrics. |

*Bar‑raiser check*: I showed ownership by owning end‑to‑end, dove deep into performance data, quantified impact (73 % drop), and learned from early latency spikes to adjust indexing—ready for production scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
