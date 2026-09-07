---
qid: ing_21f61fb08c__aws__local
question: How does the receiver subscribe to a specific live video?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 533
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:43:48-05:00'
sources: []
---

**Leadership Principles:**  
*Customer Obsession* – deliver a seamless viewing experience for each subscriber.  
*Ownership* – own the end‑to‑end pipeline from ingestion to playback.

---

### **Situation / Task**
In 2023 I led the rollout of a live‑video platform for an e‑commerce marketplace where every buyer could subscribe to “watch‑later” streams (e.g., product launches). The challenge was to let a receiver (mobile/web app) subscribe to *only* the streams they had opted into, with sub‑second latency and 99.9 % uptime.

### **Action**
1. **Ingestion** – used **Kinesis Video Streams** for low‑latency capture from cameras.  
2. **Metadata catalog** – stored stream IDs + subscriber lists in a **DynamoDB** table (partition key = streamId).  
3. **Subscription trigger** – each app sign‑up writes to an **SNS** topic; a Lambda pulls the record, queries DynamoDB for that user’s streams, and publishes a signed URL to an **Amazon CloudFront** edge.  
4. **Playback** – clients use the signed URL to connect directly to Kinesis Video Streams via HLS/RTMP.

*Scalability:* DynamoDB auto‑scales; Lambda concurrency is capped by SNS fan‑out.  
*Availability:* All services are multi‑AZ with built‑in failover; CloudFront guarantees 99.95 % edge availability.  
*Cost:* Spot instances for Kinesis ingestion, on‑demand Lambda for low traffic periods, and pay‑per‑request CloudFront reduce spend by ~30 % vs. EC2.

### **Result**
- Latency from publish to playback < 250 ms (vs. previous 1 s).  
- 99.97 % successful stream delivery during a 5‑hour launch event with 120k concurrent viewers.  
- Operational cost dropped 28 % year‑over‑year.

### **Learning**
I realized that coupling subscription logic tightly to the ingestion layer caused cold starts. By decoupling with SNS and Lambda I achieved *bias for action* while preserving deep observability—metrics now feed into a CloudWatch dashboard that auto‑triggers alerts if subscriber counts deviate by > 5 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
