---
qid: ing_e70bed7f8d__aws__local
question: 'Explain: Rider - Book Cab — Driverallocationubergojek'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 567
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:00:40-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of Uber‑style “Book Cab” flow for a mid‑size ride‑sharing startup that had a 25 % surge in riders during peak hours and an average driver wait time of 8 min.

**Action (Technical)**  
* **API Layer** – API Gateway + Lambda (Node.js) to expose `/book`.  
* **State & Queue** – DynamoDB “RiderRequests” (partition key `rideId`) plus SQS FIFO “DriverAllocation”.  
* **Matching Engine** – AWS Step Functions orchestrate:  
  1. *Nearest‑driver query* via Amazon Location Service (geo‑index).  
  2. *SageMaker inference* to predict driver acceptance probability based on past behavior, reducing false positives by 30 %.  
  3. If no match in 5 s, fallback to “pool” mode.  
* **Notifications** – SNS + Lambda push to driver app; CloudWatch alerts for SLA breaches.  
* **Scalability/Cost** – On‑demand Lambdas keep latency <200 ms; DynamoDB auto‑scales; SQS ensures decoupling. Monthly cost reduced from $1.2M to $0.8M.

**Result (Quantified)**  
* Driver wait time dropped 40 % (from 8 min to 4.8 min).  
* Rider satisfaction score rose 18 pts (NPS +12 → +30).  
* Operational overhead fell 25 % by automating allocation logic.

---

**Leadership Principles Highlighted**

| Principle | How it Shines |
|-----------|---------------|
| **Customer Obsession** | Reduced wait times & boosted NPS. |
| **Ownership** | Took end‑to‑end ownership: from API design to cost optimisation. |
| **Dive Deep** | Built a data‑driven matching model, analysed geo‑data and acceptance patterns. |

**Bar‑raiser takeaways**

* Demonstrated *ownership* by owning both business KPIs and technical stack.  
* Showed *deep dive* with metric‑based trade‑offs (SageMaker accuracy vs latency).  
* Quantified impact (wait time, NPS, cost).  
* Reflected on a failed pilot where naive nearest‑driver logic increased cancellations; pivoted to predictive matching—learning from failure and iterating.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
