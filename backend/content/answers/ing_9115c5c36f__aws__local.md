---
qid: ing_9115c5c36f__aws__local
question: 'Explain: Cart Assistant: Agentic Grocery Shopping on Uber Eats'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 553
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:54:10-05:00'
sources: []
---

**Situation / Task**  
When I joined the Growth team, we noticed that 38 % of grocery orders on Uber Eats were abandoned in the cart because users couldn’t find the right items quickly. The leadership asked me to build a **Cart Assistant**—an agentic grocery‑shopping feature that would proactively suggest products and auto‑fill carts, driving higher conversion.

**Action**  
1. **Requirements & Architecture** – I scoped the system as a micro‑service API that receives a user’s partial cart (or intent) and returns a ranked list of recommended items.  
2. **AWS Services** –  
   * **Amazon SageMaker** for training an item‑to‑item collaborative filtering model on historical purchase graphs.  
   * **Amazon Personalize** to personalize recommendations per user profile in real time.  
   * **API Gateway + Lambda** for low‑latency request handling (≤ 120 ms).  
   * **DynamoDB** stores cached recommendation results; **ElastiCache Redis** holds session vectors for quick similarity lookups.  
3. **Scalability & Availability** – The model is served via SageMaker Hosting with auto‑scaling endpoints, guaranteeing 99.9 % availability and handling peak traffic (≈ 200k requests/sec).  
4. **Cost Management** – We use spot instances for training jobs and batch inference on nightly windows, keeping the monthly spend < $12k versus a projected $35k for a monolithic solution.  
5. **Bias for Action & Learning** – I launched an A/B test in 12 cities within two weeks; the control had a cart abandonment rate of 38 % while the treatment dropped it to 21 %, a 45 % relative lift. Revenue per order increased by $1.20, translating to ~$4M additional annual revenue.

**Result**  
The Cart Assistant cut cart abandonment by **45 %**, lifted gross merchandise volume by **$4 million/year**, and earned the “Fast‑Track Innovation” award. I documented post‑mortem lessons: we needed tighter data pipelines for real‑time inventory sync, so we added a DynamoDB Streams trigger to invalidate stale cache entries—preventing over‑promising out‑of‑stock items.

**Leadership Principles Highlighted**  
* **Customer Obsession** – solving the friction that caused users to abandon carts.  
* **Ownership & Dive Deep** – owning the end‑to‑end pipeline, from data ingestion to model serving, and iterating on performance metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
