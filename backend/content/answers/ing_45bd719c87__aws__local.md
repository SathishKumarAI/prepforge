---
qid: ing_45bd719c87__aws__local
question: 'Explain: When to Use Vertical Scaling — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 601
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:03:15-05:00'
sources: []
---

**When to Use Vertical Scaling (AWS) – A Customer‑Obsessed Lens**

**Situation**  
I led a fraud‑detection ML service that ingested 5 M events/sec from credit‑card terminals. Our initial architecture used dozens of small EC2 instances, each running an inference container on **Amazon SageMaker Neo**. Latency spiked to 120 ms during peak hours, violating our SLA (≤80 ms) and causing a 12 % lift in false positives.

**Task**  
Determine whether vertical scaling could restore performance while keeping cost predictable, without sacrificing resilience or data‑privacy compliance.

**Action**  
1. **Dive Deep into Metrics** – I profiled CPU, memory, and GPU utilization. Each instance hit >95 % CPU but <40 % memory; the bottleneck was compute, not storage.  
2. **Design Decision** – Shift to a *single* **p3dn.24xlarge** (8 NVIDIA V100 GPUs) with **SageMaker Runtime**.  
   - *AWS services*: EC2 Auto Scaling for graceful failover, **Elastic Load Balancing** (ALB) for traffic routing, **Amazon CloudWatch** for fine‑grained metrics, and **AWS Cost Explorer** to track ROI.  
3. **Cost & Availability Trade‑offs** –  
   - **Cost**: $4,800/hr vs $1,200/hr for 10 x m5.large (≈ 300 % increase).  
   - **Availability**: Single instance risk mitigated by launching a *warm standby* in a second AZ and using **Elastic IP** + **Route 53 health checks** to failover automatically.  
4. **Implementation & Validation** – Deployed the model on the new instance, re‑ran latency tests: 60 ms average (−50 % vs baseline). False positives dropped from 12 % to 3 %.  

**Result**  
Within two weeks, we met SLA with a 30 % improvement in throughput and a 5 % reduction in operational overhead. The vertical scaling move was justified because compute bound workloads benefit most from larger single‑node resources; horizontal scaling would have added network latency and higher total cost.

---

### Bar‑raiser Checklist  
- **Ownership**: Took full responsibility for SLA breach, led cross‑team investigation.  
- **Dive Deep**: Used CloudWatch & SageMaker profiling to isolate the bottleneck.  
- **Quantified Impact**: Latency ↓ 50 %, false positives ↓ 75 %.  
- **Learning from Failure**: Recognized that horizontal scaling alone cannot solve compute‑bound inference latency; future designs will pre‑emptively model workload profiles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
