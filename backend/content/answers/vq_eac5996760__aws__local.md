---
qid: vq_eac5996760__aws__local
question: Can one only retrieve rows X to Y from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 458
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:20:48-05:00'
sources: []
---

**Situation** – I was asked to build a reporting API that could return rows *X* to *Y* from a large analytics table (≈ 10 M rows) while keeping latency under 100 ms.

**Task** – Design a scalable, cost‑effective solution that obeys AWS best practices and satisfies the “Customer Obsession” & “Deliver Results” principles.

**Action**  
1. **Schema & Indexing** – Store data in DynamoDB with a composite key (`partitionKey = date`, `sortKey = eventID`). Add a Global Secondary Index (GSI) on `userID` for user‑specific ranges.  
2. **Pagination Logic** – Use the GSI to `Query` with `Limit = Y-X+1` and `ExclusiveStartKey` set to the key of row *X–1*. DynamoDB returns exactly the slice, no full table scan.  
3. **Cost & Availability** – Provisioned throughput (or on‑demand for burst) keeps read capacity predictable; Auto Scaling adjusts based on traffic spikes. Data is automatically replicated across 3 AZs, ensuring high availability.  
4. **Fallback** – For legacy RDS tables, switch to a `SELECT … ORDER BY … LIMIT … OFFSET …` query only when the data set is < 1 M rows; otherwise fall back to DynamoDB.

**Result** – Implemented within two sprints; API latency dropped from 2 s (full scan) to **< 50 ms**. Cost reduced by **35 %** due to efficient reads and elimination of expensive OFFSET queries. Learned that careful key design + AWS native pagination can turn an “impossible” request into a high‑performance feature.

> *Bar‑raiser check:* ownership in choosing DynamoDB, deep dive into indexing, quantified latency & cost impact, and iterative learning from the RDS fallback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
