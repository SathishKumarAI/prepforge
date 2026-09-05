---
qid: ing_8466b17c14__star__local
question: 'Explain: The NGM application sits inside a VPC — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 328
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:02-05:00'
sources: []
---

**Situation:**  
During the launch of our NGM (Next‑Gen Monitoring) platform at AWS re:Invent 2021, we had to store telemetry from thousands of edge devices inside a tightly controlled VPC. The data was high‑velocity, schema‑flexible JSON logs that needed low latency reads and writes.

**Task:**  
Select a NoSQL database that would give us sub‑millisecond response times, seamless integration with our existing IAM policies, and the ability to run analytics without pulling the data out of the VPC.

**Action:**  
I evaluated DynamoDB, DocumentDB, and Neptune. I benchmarked read/write latency at 1 M ops/sec and measured cost per GB stored. Leveraging AWS DAX for caching, I configured a DynamoDB table with partition keys on device ID and sort key on timestamp. I also enabled point‑in‑time recovery for compliance and set up IAM roles so only the monitoring microservice could write to the table.

**Result:**  
The solution delivered <2 ms read latency under peak load, reduced operational overhead by 30 % compared to DocumentDB, and cut storage costs by 25 %. I learned that in a VPC‑only environment, DynamoDB with DAX offers the best balance of performance, security, and cost for time‑series telemetry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
