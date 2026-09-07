---
qid: ing_d61d09f957__aws__local
question: 'Explain: User Database — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 441
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:23:32-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at a media startup, we were tasked to redesign the “User Database” that feeds personalized video recommendations for our YouTube‑style streaming service. The existing monolith stored 120 M users and 1 B interactions in MySQL, causing 5‑second query latency during peak hours (6–10 pm UTC) and a 12 % churn spike.

**Action**  
I applied **Ownership** by mapping the entire data pipeline: ingestion → storage → ML inference.  
* **Ingestion** – built an EventBridge + Kinesis Data Streams flow that captures user‑action events in real time, reducing lag to <200 ms.  
* **Storage** – migrated core tables to **Amazon DynamoDB (global tables)** for low‑latency reads/writes and **Amazon S3 Glacier Deep Archive** for cold logs, cutting storage costs by 30 %.  
* **Feature Store** – used **Amazon SageMaker Feature Store** to materialize user embeddings; updated every 15 min via Glue jobs.  
* **Inference** – deployed a SageMaker endpoint behind an Application Load Balancer; auto‑scales with Lambda@Edge to keep request latency <50 ms globally.  

I led “Dive Deep” sessions, profiling the SQL query plan and refactoring it into a single DynamoDB query plus a cache layer (ElastiCache Redis), slashing read time from 5 s to 120 ms.

**Result**  
* 70 % reduction in recommendation latency during peak.  
* Real‑time personalization increased watch time by **18 %** and lowered churn by **4 %** within three months.  
* Cost savings of $350K annually on database operations.  

I documented the rollback plan and performed a post‑mortem that highlighted the need for automated schema evolution, reinforcing a culture of continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
