---
qid: ing_eff53d3e55__aws__local
question: 'Explain: HTTP: — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 402
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:19:50-05:00'
sources: []
---

**Answer (Amazon Style)**  

**Leadership Principles:** *Customer Obsession*, *Dive Deep*  

> **Situation** – I was leading a real‑time analytics dashboard for a media platform that served 3 M concurrent users during peak hours. The page load time was 4 s due to repeated polling of an HTTP endpoint, hurting user engagement (CTR dropped 12%).  
> 
> **Task** – Reduce latency and server cost while keeping data fresh in milliseconds.  
> 
> **Action** – I introduced **WebSockets**: a full‑duplex TCP connection over HTTP/1.1 that stays open after the initial handshake. On AWS, I built a stateless WebSocket API with **Amazon API Gateway** + **AWS Lambda@Edge**, using **Amazon DynamoDB Streams** to push updates to connected clients.  
> 
>  *Scalability:* API Gateway scales automatically; each Lambda invocation is ~1 ms and billed per 128 ms slice, cutting compute by 70%.  
> 
>  *Availability:* The connection pool survives AZ failures via the gateway’s built‑in retries.  
> 
>  *Cost:* Eliminated 3 M polling requests (≈$15k/month) and reduced CPU hours to <$2k.  
> 
> **Result** – Latency dropped from 4 s to <200 ms, real‑time engagement rose by 18%, and the platform’s uptime hit 99.999%.  
> 
> **Takeaway** – WebSockets are ideal when you need low‑latency, bidirectional data flow; they trade a single long-lived TCP connection for massive cost savings and performance gains—exactly what we needed to serve our customers faster and cheaper.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
