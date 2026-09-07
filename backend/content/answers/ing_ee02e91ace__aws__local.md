---
qid: ing_ee02e91ace__aws__local
question: 'Explain: Cuckoo Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 422
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:16:24-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* A client’s e‑commerce platform needed to reject fraudulent orders in real time while keeping latency < 5 ms. The existing Bloom filter returned false positives that cost $200k/month in revenue loss.

*Task:* Replace the Bloom filter with a more accurate probabilistic structure and prove its scalability to 10M requests/sec.

*Action:* I designed a **Cuckoo Filter** (hash‑based cuckoo hashing) using AWS Lambda + DynamoDB for state persistence.  
- **Hashing:** Two independent hash functions map each key to two candidate buckets; if both occupied, we evict an existing entry and retry up to 500 times.  
- **AWS services:**  
  - *Lambda* (15 ms timeout) handles lookup/insert logic.  
  - *DynamoDB Global Tables* provide multi‑region consistency with < 2 ms latency.  
  - *CloudWatch Alarms* trigger auto‑scaling of Lambda concurrency when request rate > 8M/s.  
- **Scalability:** Each bucket holds 4 fingerprints (32 bits). With 1 GB of memory per Lambda, we support 10M entries with < 0.5% false positive rate—30 % better than Bloom.  
- **Cost trade‑off:** Savings on DynamoDB read capacity units ($12k/month) outweigh the modest increase in Lambda invocations ($3k/month).

*Result:* After deployment, fraud rejection accuracy improved from 92% to 99.6%, reducing revenue loss by **$350k/year** and keeping latency below 5 ms under peak load.

**Bar‑raiser focus:** I demonstrated ownership (full end‑to‑end design), deep dive into hashing mechanics, quantified impact (revenue savings), and iterated after a failed initial DynamoDB-only prototype that suffered high latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
