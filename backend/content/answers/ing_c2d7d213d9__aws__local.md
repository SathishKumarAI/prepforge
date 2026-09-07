---
qid: ing_c2d7d213d9__aws__local
question: 'Explain: Measuring Latency — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 626
total_tokens: 863
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:43:33-05:00'
sources: []
---

**Measuring Latency – Latency vs Throughput vs Bandwidth (System Design)**  
*Leadership Principles: Ownership & Dive Deep*

---

### **Situation**
While leading a data‑science team at my previous company, we built an inference service for real‑time fraud detection. The product required sub‑200 ms latency to meet compliance and user experience SLAs, yet our batch pipeline was bottlenecked by high throughput demands.

### **Task**
I owned the redesign of the model serving layer so that it could deliver *low latency* without sacrificing *throughput* or *bandwidth*, while keeping costs predictable.

### **Action**

| Metric | Definition | Design Decision |
|--------|------------|-----------------|
| **Latency** | Time from request to response. | Deployed a **Model Registry** in **Amazon SageMaker Endpoint** with multi‑container Docker; used **CPU + GPU autoscaling** (1–4 instances) and **Elastic Load Balancer** for 99th percentile < 200 ms. |
| **Throughput** | Number of requests per second the system can handle. | Configured **SageMaker Batch Transform** jobs to pre‑warm 10 inference containers; set **Target Tracking Scaling Policy** (max 50 RPS) to maintain headroom during spikes. |
| **Bandwidth** | Amount of data transmitted per unit time. | Enabled **Amazon CloudFront** edge caching for static model artifacts, reducing Egress by 35 %. Employed **Kinesis Data Streams** for telemetry, throttling at 5 Mbps to avoid saturating the network. |

- Adopted **AWS X-Ray** for fine‑grained tracing and identified a serialization bottleneck in the data pre‑processor.
- Implemented **SageMaker Model Monitor** to auto‑retrain on drift, ensuring sustained throughput.

### **Result**
*Latency*: 97th percentile dropped from 350 ms to **162 ms**.  
*Throughput*: Sustained 60 RPS during peak without degradation.  
*Bandwidth*: Reduced egress costs by **$1,200/month** (35 % cut).  

The service now meets regulatory SLAs and scales cost‑effectively.

---

### **Bar‑raiser Takeaways**

| Cue | Why It Matters |
|-----|----------------|
| **Ownership** | I drove the end‑to‑end redesign, not just a component. |
| **Dive Deep** | Traced latency to container init; quantified impact of each AWS service. |
| **Quantified Impact** | Clear metrics (162 ms, 60 RPS, $1,200 savings). |
| **Learning from Failure** | Initial design caused GPU thrashing; pivoted to autoscaling + pre‑warm strategy. |

This showcases my ability to own complex systems, dive into details, and deliver measurable results—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
