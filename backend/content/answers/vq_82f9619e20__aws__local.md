---
qid: vq_82f9619e20__aws__local
question: Multiples of Three from a Series?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 755
total_tokens: 982
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:00:59-05:00'
sources: []
---

**Situation (S)**  
I was asked to build an API that returns all multiples of 3 in a user‑supplied series of 10 million integers. The data had to be processed within 2 seconds and cost less than $0.50 per request.

**Task (T)**  
Design a scalable, serverless solution that meets the latency, cost, and reliability constraints while keeping the code simple and maintainable.

**Action (A)**  

1. **Requirements & Constraints** –  
   * Input size: 10 M integers → ~80 MB raw payload.  
   * Latency target: ≤ 2 s end‑to‑end.  
   * Cost target: < $0.50 per invocation.

2. **Design** –  
   * **API Gateway + Lambda** (Python 3.11) as the entry point.  
   * Payload is streamed to **Amazon S3** in a temporary bucket (`s3://tmp-multiples/`).  
   * A **Step Function** orchestrates two parallel Map tasks:  
     - `FilterMultiples` – uses AWS Lambda with provisioned concurrency (5 GB memory) to scan chunks and emit multiples of 3.  
     - `CountResults` – aggregates the counts using a DynamoDB table (`multiples_count`) with atomic counters.  
   * Final results are written back to S3, then returned via API Gateway.  

3. **Scalability & Availability** –  
   * Lambda Map tasks run in parallel across partitions → O(n) time with linear scaling.  
   * Step Functions automatically retries failed branches (retry policy: 2× exponential back‑off).  
   * Using S3 + DynamoDB provides high durability (> 99.9999 %) and low latency.

4. **Cost & Trade‑offs** –  
   * Estimated Lambda runtime: ~1.5 s × $0.00001667 per GB‑second → ~$0.04.  
   * S3 PUT/GET ~ $0.005, DynamoDB reads/writes < $0.01.  
   * Total ≈ $0.10 per request – well below the target.

5. **Testing & Metrics** –  
   * Simulated 10 M integers → returned 3,333,333 multiples in 1.8 s, cost $0.09.  

**Result (R)**  
The solution achieved a 90 % reduction in latency compared to a monolithic Lambda and cut the cost by 80 %. It also earned an internal “Best Practices” badge for clean separation of concerns.

---

### Leadership Principles

* **Ownership** – I led the end‑to‑end design, from requirements gathering to deployment, ensuring every component met SLAs.  
* **Dive Deep** – By profiling Lambda memory usage and Step Function retries, I pinpointed bottlenecks and tuned concurrency for optimal cost/latency trade‑offs.

### What a Bar‑Raiser Listens For

| Signal | Why It Matters |
|--------|----------------|
| Quantified impact (3.3 M results, 1.8 s latency, $0.09 cost) | Demonstrates business value |
| Deep architectural reasoning (Lambda map + Step Functions) | Shows technical depth |
| Learning from failure (retry policy, memory tuning) | Reflects resilience and continuous improvement |

This answer showcases how I blend customer obsession with ownership to deliver a robust, cost‑effective solution on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
