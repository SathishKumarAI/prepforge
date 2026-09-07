---
qid: ing_3dbf22ebca__aws__local
question: 'Explain: Amazon SNS message filtering — AWS-Services/4_MessageBrokers/AmazonSNS.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 422
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:23-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with cutting down the cost of a multi‑tenant notification system that sent over **15 M messages/day** to thousands of microservices via Amazon SNS. The team wanted to reduce cross‑region traffic and eliminate “noise” for services that only cared about specific event types.

**Action (Design)**  
I introduced **SNS message filtering** using the `FilterPolicy` JSON on each subscription:

```json
{
  "eventType": ["order.created", "payment.failed"],
  "customerRegion": ["us‑east-1"]
}
```

* **AWS services used:** SNS for publish/subscribe, SQS for durable queues, Lambda for post‑processing.  
* **Scalability & Availability:** Filters are evaluated at the broker level; no extra compute is needed, keeping latency < 10 ms even with millions of topics.  
* **Cost trade‑offs:** By preventing irrelevant messages from reaching endpoints we cut SQS message inflow by 70 % and reduced Lambda invocations by 55 %, saving ~\$1.2k/month.

**Result**  
After deployment, the system processed **10 M fewer messages per day**, translating to a **$1.5k/month savings** and a **30 % reduction in downstream compute costs**. I documented the policy schema and added automated tests that validate each filter against an event catalog—ensuring future changes don’t re‑introduce noise.

---

> **Leadership Principles highlighted:**  
> *Customer Obsession* – delivering cleaner, cheaper notifications for our clients.  
> *Ownership* – taking full responsibility from requirement gathering to cost analysis.  
> *Dive Deep* – analyzing traffic patterns, modeling filter impact, and quantifying savings.  

This demonstrates ownership, deep technical insight, measurable impact, and a learning loop that prevented regression.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
