---
qid: vq_bfbf0e8d2d__aws__local
question: What’s the last creative project you worked on?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 369
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:12:05-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
Last month I led a cross‑functional “AI‑powered FAQ bot” for our e‑commerce site, aimed at reducing the 30% of support tickets that come from repetitive product questions.

**Action (Dive Deep & Bias for Action)**  
1. **Data dive:** Extracted 2 M ticket logs → identified 12 high‑frequency intents.  
2. **Design:** Built a stateless Lambda pipeline:  
   * **API Gateway** → **Lambda** (Python) → **Amazon Comprehend** (intent classification) → **RDS Aurora** cache for FAQs, fallback to **ChatGPT API** via **SageMaker Endpoint**.  
3. **Scalability:** Autoscaling on Lambda + provisioned concurrency of 500 to handle peak 10k QPS; RDS read replicas for high availability.  
4. **Cost control:** Used Spot Instances for SageMaker training (‑40% vs On‑Demand) and reserved RDS instances, keeping monthly spend <$3 K.

**Result (Deliver Results)**  
- Deployed in 2 weeks (vs the planned 6).  
- Cut support tickets by 18% within first month; projected annual savings of $1.2 M.  
- Customer satisfaction score for FAQ interactions rose from 78% to 92%.

**Reflection (Learnings & Ownership)**  
I initially underestimated latency in SageMaker inference, leading to a brief outage. I added a circuit‑breaker and re‑architected the fallback logic—an example of rapid iteration and accountability. This project reinforced my belief that *small, data‑driven changes* can deliver outsized customer value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
