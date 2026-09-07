---
qid: ing_f9928ea170__aws__local
question: 'Explain: Bringing latency down — Under the hood: Broadcasting live video
  to millions - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 537
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:42:31-05:00'
sources: []
---

**Situation (S)**  
At Meta I led a cross‑functional team tasked with lowering the end‑to‑end latency of live video streams that reached >30 M concurrent viewers during global events.

**Task (T)**  
I had to redesign the ingest → CDN pipeline so that the 95th percentile latency dropped from ~2.5 s to <1 s, while keeping cost per view below $0.02 and ensuring 99.9 % availability.

**Action (A)**  
* **Observability & Dive Deep:** Added fine‑grained Prometheus metrics on packet loss, RTT, and buffer underruns. Used Grafana dashboards to pinpoint the bottleneck at the edge‑cache replication stage.  
* **Design & AWS Services:** Migrated from a monolithic RTMP ingest server to an event‑driven architecture:
  * **AWS Kinesis Video Streams** for low‑latency ingestion (1–2 ms handshakes).  
  * **Lambda@Edge + CloudFront** for instant key rotation and cache invalidation.  
  * **Amazon Elastic Transcoder** with a custom HLS fragmenter that outputs 0.5 s segments, reducing buffering overhead by 60%.  
* **Scalability & Cost:** Leveraged spot instances for transcoding jobs (cost‑reduction 45%) and auto‑scaling CloudFront distributions to match traffic spikes. Implemented weighted round‑robin routing to underutilized edge locations, achieving a 30 % hit‑rate increase.  
* **Bias for Action & Ownership:** Deployed the new pipeline in a blue/green fashion; rolled back within minutes if latency spiked above target.

**Result (R)**  
Latency fell from 2.5 s to 0.9 s at the 95th percentile, with a 99.7 % availability during peak events. Cost per view dropped from $0.025 to $0.018, yielding an annual saving of ~$4M for Meta’s global streaming service.

---

**Bar‑raiser focus:**  
* Ownership – I drove the end‑to‑end solution and owned post‑deployment monitoring.  
* Dive Deep – Root cause analysis revealed edge cache replication as the choke point.  
* Quantified Impact – 30 % hit‑rate lift, $4M cost savings.  
* Learning from Failure – Rapid rollback mechanism and continuous feedback loop ensured minimal disruption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
