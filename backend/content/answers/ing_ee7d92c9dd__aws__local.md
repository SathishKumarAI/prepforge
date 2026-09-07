---
qid: ing_ee7d92c9dd__aws__local
question: 'Explain: FAQs — MyWeb2.com is for sale | HugeDomains'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 471
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:17:11-05:00'
sources: []
---

**Situation & Task**  
When I joined the “HugeDomains” team, our flagship product *MyWeb2.com* was going to be listed for sale on a global marketplace. Customers were flooding support with the same questions: “What does it mean that MyWeb2.com is for sale?”, “Will my traffic be affected?” and “How do I transfer ownership?”. My goal was to design an automated FAQ experience that reduced inbound tickets by 70% while keeping customers confident.

**Action (AWS‑centric)**  
I scoped the requirements, then built a **Serverless FAQ Service**:  
* **API Gateway + Lambda** – handles user queries in <200 ms.  
* **Amazon DynamoDB** – stores 1,000+ FAQ intents and associated answers; auto‑scales with traffic spikes.  
* **Amazon Kendra** – indexes all domain‑sale documents for semantic search, ensuring 95% precision on intent detection.  
* **CloudFront + WAF** – global edge caching (latency <30 ms) and protection against abusive bots.  

I used **AWS Step Functions** to orchestrate fallback flows: if Kendra confidence <0.8, Lambda retrieves a canned response from DynamoDB. I added **Amazon CloudWatch** dashboards for hit‑rate, latency, and error metrics; alerts trigger when the SLA drops below 99.9%.

**Result**  
Within three weeks of launch:  
* Ticket volume dropped from 1,200/day to 360/day (70% reduction).  
* Customer satisfaction scores rose from 78 % to 92 %.  
* Cost per FAQ served was $0.0003, under budget.

**Reflection**  
Ownership drove me to own the entire stack; I *dive deep* into Kendra’s tuning and Lambda memory sizing, learning that a 512 MB allocation yielded the best cost‑performance trade‑off. The bar‑raiser would note my data‑driven impact, rapid iteration, and post‑mortem of an early latency spike that led to a better caching strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
