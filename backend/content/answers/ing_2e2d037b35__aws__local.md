---
qid: ing_2e2d037b35__aws__local
question: 'Explain: Clarifying Requirements — ChatGPT System Design - by Neo Kim and
  Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 532
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:09:47-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was asked to build a conversational AI platform for a global retailer that could answer product questions in real‑time across 12 languages. The stakeholders expected < 200 ms latency, > 99.9 % availability, and the ability to scale to 5 M concurrent users during peak holiday traffic.

**Action (Technical)**  
I scoped the solution by first clarifying ambiguous requirements:  
1️⃣ **What constitutes “answer quality”** – we defined a 4‑point rubric (accuracy, relevance, politeness, brevity).  
2️⃣ **Latency budget per region** – we set 180 ms in North America and 250 ms elsewhere.  
3️⃣ **Cost ceiling** – $0.05 per thousand requests during peak periods.

With that foundation I designed a *serverless micro‑service* architecture:  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Ingestion & routing | API Gateway + Lambda@Edge | Global edge caching cuts round‑trip latency to < 100 ms. |
| Model inference | SageMaker Endpoint (GPU‑inf1) behind Application Load Balancer | Auto‑scaling per traffic pattern, 99.9% SLA with Multi‑AZ deployment. |
| Language processing | Amazon Translate + Comprehend | Offloads heavy NLP; reduces cost by 30 %. |
| Monitoring & A/B testing | CloudWatch + SageMaker Experiments | Real‑time metrics to iterate quickly. |

I introduced *canary releases* for new model versions, and used Lambda’s provisioned concurrency to guarantee the latency SLA during traffic spikes.

**Result**  
Within two months we hit a 95 % success rate against the quality rubric, reduced average response time from 350 ms to 190 ms, and cut inference cost by 28 % compared with the legacy monolith. The platform handled 6 M concurrent users during Black Friday without any outage.

**Reflection (Bar‑raiser)**  
The key takeaway: **Ownership** – I drove the requirement clarification myself; **Dive Deep** – I dissected latency, cost, and quality trade‑offs; **Bias for Action** – deployed a minimal viable solution quickly and iterated. The experience reinforced that asking “What do you really need?” is often cheaper than guessing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
