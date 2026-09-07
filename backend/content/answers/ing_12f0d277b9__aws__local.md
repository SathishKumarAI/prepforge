---
qid: ing_12f0d277b9__aws__local
question: 'Explain: a parking garage type system so i — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 877
total_tokens: 1115
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:08:27-05:00'
sources: []
---

**Leadership Principles:**  
- **Ownership** – I take full responsibility for the end‑to‑end customer experience and operational health.  
- **Dive Deep** – I dig into metrics, failure modes, and cost models to surface real trade‑offs.

---

## 1️⃣ Behavioral (STAR)

**Situation:**  
When my previous company rolled out a multi‑level parking system in a downtown mall, we hit a 12 % customer churn after the first month because drivers kept missing entry/exit gates.  

**Task:**  
Own the redesign to reduce missed entries/exits by 90 % and cut operational costs by 15 %.  

**Action:**  
- Built an end‑to‑end monitoring pipeline in **AWS CloudWatch + S3** that logged every sensor hit, gate status, and camera frame.  
- Deployed a **Lambda** function (Python) to correlate sensor data with video analytics (Amazon Rekognition) and flag anomalies.  
- Introduced **IoT Greengrass** on each gate for low‑latency local validation, falling back to the cloud when connectivity drops.  
- Implemented an **Auto Scaling Group** of EC2 instances behind an Application Load Balancer to serve real‑time driver alerts via WebSocket (API Gateway).  

**Result:**  
Within 3 months: missed entries/exits dropped from 12 % → 1 %, customer satisfaction rose from 78 % → 92 %. Operational cost fell by 13 % due to reduced manual inspections and fewer gate malfunctions.

---

## 2️⃣ System Design (Technical)

### High‑Level Architecture
```
[Drivers] → [Entry Gate Sensors + Cameras] → 
    ├─ IoT Greengrass (local edge) → CloudWatch Logs
    └─ Rekognition Video Stream → S3 → Lambda → DynamoDB
         ▲
   API Gateway/WebSocket ↘
    EC2 Auto‑Scaling Group (Web UI & Mobile)
```

### Key AWS Services
| Service | Purpose |
|---------|---------|
| **IoT Greengrass** | Edge inference, sensor validation, low‑latency status push. |
| **Amazon Rekognition Video** | Real‑time license plate & face detection for audit trails. |
| **AWS Lambda** | Correlate events, trigger alerts, update DynamoDB. |
| **DynamoDB** | Low‑latency storage of gate state + driver history. |
| **API Gateway (WebSocket)** | Push real‑time alerts to drivers' mobile/web clients. |
| **Application Load Balancer + Auto Scaling Group** | Scale UI layer horizontally; ensure 99.95 % availability. |
| **CloudWatch & S3** | Operational logs, metrics retention, compliance audit. |

### Scalability
- Edge Greengrass keeps critical validation local (≤50 ms latency).  
- Lambda scales automatically with event volume; each function processes ~1 k events/s.  
- Auto‑Scaling Group adjusts EC2 instances based on WebSocket connection count (target 70% CPU).

### Availability
- Multi‑AZ deployment for Greengrass cores and EC2 fleet.  
- DynamoDB global tables enable read/write across regions if needed.  

### Cost & Trade‑offs
| Choice | Cost | Trade‑off |
|--------|------|-----------|
| Use **Rekognition** instead of custom model | $0.10/GB video | Higher accuracy vs. 30 % higher compute cost |
| Edge Greengrass + CloudWatch Logs | $0.02/device/month | Near‑real‑time alerts, but requires firmware updates |

### Failure Learning
- First iteration had a single point failure in the central gate controller; after adding local validation we eliminated that risk.  
- We observed cold starts in Lambda during traffic spikes; moving to provisioned concurrency reduced latency by 35 %.

---

**Bottom line:** By owning the full stack, diving deep into sensor data, and leveraging AWS edge + cloud services, I engineered a parking garage system that delivers instant, reliable service at scale while keeping costs under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
