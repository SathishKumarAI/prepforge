---
qid: ing_48eed4a278__aws__local
question: 'Explain: Introduction — Sendsmsmessageapitwillo'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 491
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:25-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
At my previous role I was tasked with building a lightweight “SendSMSMessageAPI” that would let our marketing team push time‑sensitive alerts to millions of users without blowing up the backend or incurring prohibitive costs.

**Action (Dive Deep, Bias for Action)**  
1. **Requirements & Trade‑offs**  
   * Latency < 200 ms per request  
   * Throughput 10k msgs/s during peak windows  
   * 99.9 % delivery success  
2. **Design**  
   * **API Gateway + Lambda** – stateless, auto‑scales; each request queues a message to SNS.  
   * **Amazon SNS (SMS)** – native SMS provider with built‑in retry logic and throttling controls.  
   * **DynamoDB** – idempotency table to dedupe duplicate requests (PK=Phone# + Timestamp).  
   * **CloudWatch Alarms** – trigger alerts if delivery rate drops below 95 %.  
3. **Cost & Availability**  
   * Lambda pay‑as‑you‑go, ~0.2 $ per million invocations → <$1/month for 10M messages.  
   * SNS SMS pricing $0.0075/recipient (US) – cost‑effective at scale.  
   * Multi‑AZ deployment; API Gateway + Lambda are inherently highly available.

**Result (Deliver Results)**  
Within two weeks of launch, we achieved:  

| Metric | Target | Actual |
|--------|--------|--------|
| Avg latency | <200 ms | 145 ms |
| Peak throughput | 10k msgs/s | 12.3k msgs/s |
| Delivery success | ≥99.9% | 99.95% |
| Cost per message | <$0.01 | $0.008 |

**Reflection (Learn from Failure)**  
Early tests revealed a 5 % delivery drop in Mexico due to carrier restrictions. I added a regional fallback to AWS Pinpoint for those markets, increasing overall success to 100 %. This iteration taught me the value of **continuous monitoring and rapid rollback**—a key bar‑raiser expectation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
