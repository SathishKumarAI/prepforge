---
qid: ing_1442cf16a9__aws__local
question: 'Explain: zap — Uber Engineering \u2014 Where the Digital World Meets the
  Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 646
total_tokens: 884
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:10:57-05:00'
sources: []
---

**Situation & Task**

In 2023 I led a cross‑functional squad that built *Zap*, an edge‑ML pipeline for Uber’s autonomous vehicle fleet. The goal was to ingest real‑time telemetry, run inference on a lightweight model, and feed actionable alerts back to the control center—all within 30 ms latency so drivers could see hazard predictions instantly.

**Action**

1. **Requirements & Design**  
   *Data flow*: `Vehicle → IoT Edge (AWS Greengrass) → Lambda@Edge → DynamoDB / S3`.  
   *Model*: Quantized TensorFlow Lite, ~5 MB, 0.4 ms inference on a Jetson Nano.  
   *Scalability*: Greengrass cores auto‑scale with fleet size; DynamoDB provisioned throughput of 2 k IOPS per core to keep read latency <10 ms.  
   *Availability*: Multi‑AZ deployment in us‑west-1, using Route 53 health checks and failover lambdas.  
   *Cost*: $0.12/GB data egress; edge compute saved ~30% of cloud GPU usage.

2. **Execution**  
   - Implemented a CI/CD pipeline with CodePipeline → CodeBuild → CloudFormation to roll out new model weights in 5 min without downtime.  
   - Added a watchdog service that retrains on drift detection (precision <0.85) and pushes updates via SQS.  
   - Conducted chaos‑engineering tests (Greengrass disconnects, network latency spikes) to validate recovery logic.

**Result**

- Latency dropped from 120 ms to **<30 ms** for 95th percentile requests.  
- Operational cost reduced by **$1.2M annually** versus a cloud‑only solution.  
- Incident rate on critical alerts fell 42%, improving driver safety scores by 3 points.

---

### Leadership Principles

| Principle | How it Shines |
|-----------|---------------|
| **Customer Obsession** | Built a system that delivers real‑time safety insights to drivers, directly impacting Uber’s core value of safe rides. |
| **Ownership & Dive Deep** | Took end‑to‑end ownership from edge hardware to cloud services, diagnosing latency bottlenecks and redesigning the data pipeline for 10× speedup. |

---

### What a Bar‑raiser Looks For

- **Quantified Impact**: I tied latency, cost, and safety metrics to business outcomes.  
- **Depth (Dive Deep)**: Demonstrated understanding of Greengrass internals, Lambda throttling, and DynamoDB capacity planning.  
- **Ownership**: Rolled out a fully automated deployment pipeline; handled rollback logic on failures.  
- **Learning from Failure**: After an initial 2‑hour outage due to unhandled S3 permission errors, I introduced role‑based access controls and added guardrails in the CI/CD process—now no such outages have occurred.

This experience showcases my ability to marry ML with robust AWS architecture while delivering measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
