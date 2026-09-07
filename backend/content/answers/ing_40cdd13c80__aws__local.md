---
qid: ing_40cdd13c80__aws__local
question: 'Explain: System Design Mock Interview: Design a Vending Machine'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 477
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:52:30-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
I was asked to redesign an in‑office vending system that served 4 000 employees. The existing setup had a 30 % error rate (expired items, payment failures) and lagged user feedback: “It takes forever to get my snack.” I owned the project from concept through rollout.

**Action (Dive Deep & Bias for Action)**  
1. **Requirements & Data** – Collected usage logs, payment failure rates, and inventory turnover. Goal: < 2 % error rate, 95 % user satisfaction, < $5 /transaction cost.  
2. **Architecture** – Serverless micro‑service stack on AWS:  
   * **API Gateway + Lambda** for order placement (stateless, auto‑scales).  
   * **DynamoDB** for inventory & transaction logs (single‑region with on‑demand capacity → instant reads/writes, < 1 ms latency).  
   * **SQS** queues to decouple payment and dispensing logic.  
   * **IoT Core + Greengrass** on the vending hardware to stream sensor data (temperature, weight) to AWS IoT Analytics for real‑time anomaly detection.  
3. **Scalability & Availability** – Global Accelerator + Multi‑AZ deployment gives 99.99 % uptime; Lambda concurrency limits prevent hot‑spots during peak lunch hours.  
4. **Cost & Trade‑offs** – Serverless eliminates idle servers (≈ 70 % cost savings). Trade‑off: higher cold‑start latency, mitigated by Provisioned Concurrency on peak days.

**Result (Deliver Results)**  
After 3 months:  
* Error rate dropped to **1.4 %**.  
* User satisfaction rose from **68 %** to **92 %** (NPS +20).  
* Transaction cost decreased by **$0.45** per order, saving ~$2.7 k/month.  

I learned that continuous sensor telemetry and event‑driven architecture dramatically improve reliability—an insight I’ll apply to future IoT‑centric ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
