---
qid: ing_00397eaf19__aws__local
question: 'Explain: Popular Messaging Systems — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 442
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:25:03-05:00'
sources: []
---

**Situation / Task**  
In a recent e‑commerce platform we needed to decouple real‑time order processing from downstream ML pipelines that generate recommendation scores. The existing monolith caused latency spikes and made it impossible to scale the inference service independently.

**Action**  
I led a cross‑functional squad to redesign the data flow using **Amazon SQS** for durable queuing, **SNS** for fan‑out to multiple consumers, and **AWS Lambda** coupled with **Amazon SageMaker endpoints** for inference.  
*Design decisions:*  
- *Message size ≤ 256 KB* → SQS FIFO queues for ordering guarantees;  
- *Batching of 100 messages per Lambda invocation* → cost reduction (≈ 30 % fewer invocations).  
- *Dead‑letter queue* for failed predictions to avoid data loss.  
We added **CloudWatch metrics** and an automated retry policy, ensuring **99.9 % availability** with < 50 ms latency for the user‑visible order API.

**Result**  
Post‑deployment:  
- Order API latency dropped from 350 ms to 120 ms (–65 %).  
- Inference throughput increased from 2 k/s to 15 k/s without additional hardware.  
- Operational costs fell by **22 %** due to reduced EC2 usage and efficient Lambda batching.

**Learning**  
I realized the importance of *data‑driven monitoring*—the CloudWatch alarms revealed a subtle burst in failed messages that we preemptively mitigated by scaling the SageMaker endpoint. This experience reinforced the **Ownership** principle: owning the end‑to‑end system, and **Dive Deep**: inspecting metrics to uncover hidden bottlenecks.

---

> *Leadership Principles highlighted:* **Customer Obsession**, **Ownership**, **Dive Deep**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
