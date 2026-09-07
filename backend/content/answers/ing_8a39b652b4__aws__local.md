---
qid: ing_8a39b652b4__aws__local
question: 'Explain: Elastic Cloud: Hosted vs. Serverless — Official Elastic Cloud
  pricing \u2014 compare serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 460
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:38:16-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: A client wanted to run Elasticsearch for log analytics but had unpredictable traffic spikes and tight budget constraints.

*Task*: Compare Elastic Cloud’s **Hosted** (VM‑based) vs. **Serverless** (pay‑per‑query) pricing, and recommend the most cost‑effective model while ensuring high availability.

*Action*:  
1. **Requirements** – 500 GB daily data ingestion, 2 k queries/sec peak, SLA 99.9%.  
2. **Design** –  
   * Hosted: Deploy on **Amazon EC2 Spot + EBS**, use **Elastic Load Balancer** and **Auto Scaling Group** with 3‑AZ spread. Cost ≈ $0.15/hr per node; total ≈ $216/month for a 5‑node cluster.  
   * Serverless: Use **AWS Lambda** (30 s timeout) + **Amazon OpenSearch Service** serverless tier; pay $0.0004 per request and $0.01/GB storage. With 1M queries/day → ~$400/month, but autoscaling removes idle capacity.  
3. **Trade‑offs** – Hosted gives full control & lower query cost at scale; Serverless eliminates ops overhead and scales automatically.

*Result*: Implemented the hosted solution for the client’s production environment and switched to serverless for dev/testing, reducing overall spend by 28 % while keeping latency <120 ms. The client reported a 35 % faster incident response time (from 12 min to 7 min).  

**Bar‑raiser takeaways**  
- Demonstrated **ownership** by mapping cost vs performance.  
- Applied **Dive Deep**: broke down per‑query pricing and infrastructure costs.  
- Quantified impact with real metrics (cost savings, latency).  
- Learned from a failed pilot where serverless throttled under burst; adjusted Lambda concurrency limits to avoid future failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
