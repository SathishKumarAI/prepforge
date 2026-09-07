---
qid: ing_d7dfda3cc1__aws__local
question: 'Explain: Push Notification Processor — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 563
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:36-05:00'
sources: []
---

**Situation / Task**  
While leading a mobile‑app team at my last startup, we saw push‑notification latency spike to 4 s during peak (12–14 k req/min). Customers complained; churn rose 3 %. I was tasked with redesigning the **Push Notification Processor** so that delivery stayed <200 ms and could scale to millions of users.

**Action**  
1. **Requirements & Architecture** –  
   * **High throughput, low latency** → event‑driven pipeline.  
   * **Multi‑tenant isolation** for 10 k apps.  
   * **Cost control**: pay only for what we use.  

2. **Design** –  
   * **API Gateway + Lambda** to ingest notification requests (stateless, auto‑scaling).  
   * **SNS Topic per tenant** → fan‑out to **SQS FIFO queues** (deduplication, ordering).  
   * **Lambda workers** poll SQS, batch 10 k messages, call **Amazon Pinpoint** for delivery.  
   * **DynamoDB** holds message metadata; TTL deletes processed items.  

3. **Scalability / Availability** –  
   * Lambda concurrency auto‑scales to >50 k req/s with provisioned concurrency during known peaks.  
   * SQS FIFO guarantees at‑least‑once delivery, backed by dead‑letter queues for failures.  
   * Multi‑AZ deployment of API Gateway and Pinpoint ensures 99.9 % availability.  

4. **Cost & Trade‑offs** –  
   * Pay‑as‑you‑go: ~\$0.20 per 1 000 notifications vs fixed‑price on‑prem servers (~\$10k/month).  
   * Trade‑off: Lambda cold starts (≈100 ms) mitigated by provisioned concurrency; acceptable for our latency SLA.  

**Result**  
Latency dropped from 4 s to **<200 ms** during peak, 99.8 % successful deliveries, and churn fell 2.5 %. Cost was reduced by **70 %** annually.

---

### Leadership Principles

* **Customer Obsession** – focused on end‑user latency & reliability.  
* **Ownership** – drove the redesign from concept to production, monitoring, and cost optimization.  

**Bar‑raiser cues**: deep dive into Lambda concurrency logic, quantifying cost savings, learning loop (cold starts → provisioned concurrency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
