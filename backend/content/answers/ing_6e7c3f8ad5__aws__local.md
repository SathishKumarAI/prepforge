---
qid: ing_6e7c3f8ad5__aws__local
question: 'Explain: Data Transfer — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 474
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:54-05:00'
sources: []
---

**Answer – “WebSockets & Their Role in ML Pipelines”**

> *Leadership Principles: Customer Obsession & Dive Deep.*

**Situation (S)**  
While building a real‑time fraud‑detection model for a payment gateway, I needed to stream streaming sensor data from thousands of IoT devices to an inference service with sub‑50 ms latency. The existing REST/HTTP polling approach added ~200 ms overhead per request and hit the API quota.

**Task (T)**  
Design a transport that keeps connections alive, reduces round‑trip time, and scales to 100k concurrent streams without increasing operational cost.

**Action (A)**  
I introduced **WebSockets**: a bidirectional TCP connection that stays open after the handshake. I built a stateless WebSocket API on **Amazon API Gateway**, backed by **AWS Lambda** for message routing, and used **Amazon Kinesis Data Streams** to buffer events before feeding them into an **SageMaker Endpoint**.

- *Scalability*: API Gateway supports 100k concurrent connections; Lambda scales automatically.  
- *Availability*: 99.99 % SLA via multi‑AZ deployment; WebSocket health checks keep stale sockets closed.  
- *Cost*: $0.0035 per 1 000 connected minutes vs ~$0.015 for HTTP polling at same load.

**Result (R)**  
Latency dropped from 250 ms to **45 ms** average, throughput rose by **3×**, and cost decreased by **30%** in the first month. The model’s real‑time alerts improved fraud detection rate by **12%**.

---

### What a Bar‑raiser looks for

- **Ownership**: I took full responsibility for end‑to‑end latency.  
- **Dive Deep**: Chose WebSockets after profiling TCP vs HTTP, measured connection churn, and benchmarked Lambda concurrency limits.  
- **Quantified Impact**: Provided concrete latency, throughput, cost, and business metrics.  
- **Learning from Failure**: Initially used long‑polling; the failure to meet SLA taught me to evaluate transport protocols first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
