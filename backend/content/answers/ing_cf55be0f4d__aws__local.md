---
qid: ing_cf55be0f4d__aws__local
question: 'Explain: spread this data in the distributed system'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 424
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:09:40-05:00'
sources: []
---

**Situation & Task**  
While leading a fraud‑detection team at a fintech startup, we had a 5 TB click‑stream dataset that needed real‑time scoring. The goal was to distribute the data across a fault‑tolerant cluster so that each node could train a model without bottlenecking on I/O.

**Action – Technical Design**  
I chose **Amazon S3** as immutable object store (high durability, 99.999999999%) and used **AWS Glue** to catalog it into the AWS Data Catalog. For distribution I leveraged **Amazon EMR with Spark**; each worker read a partition of the S3 objects via **S3 Select** (cutting bandwidth by ~70 %). To guarantee availability, I enabled **EMR on Spot + On‑Demand** pools and used **Auto Scaling Groups** to spin up 2 extra nodes during peak training windows. Cost was kept below $1.20 per hour by pruning empty partitions with the Glue crawler.

For model inference I deployed a **SageMaker endpoint** behind an **Application Load Balancer**, ensuring *99.9 %* latency SLA. To satisfy the **Customer Obsession** principle, we added real‑time feedback from the front‑end to retrain models nightly—reducing false positives by 23 % over two months.

**Result**  
The distributed pipeline cut training time from 12 hrs to 1 hr (90 % reduction). The system handled a 4× traffic spike without downtime, meeting our *Deliver Results* metric.  

**Reflection**  
I learned that choosing the right storage layer (S3) and processing framework (Spark on EMR) is key for scalability; I also realized the importance of monitoring cost per node to avoid “spend‑on‑speed” traps—an insight I now share with new hires as a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
