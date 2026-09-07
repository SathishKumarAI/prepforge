---
qid: ing_edee22f383__aws__local
question: Walk me through continuous batching in an LLM inference server. Why does
  it beat static batching?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 664
total_tokens: 902
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:16:19-05:00'
sources: []
---

**Context – AWS AI/ML Ops Engineer**

During my last role I led the redesign of our LLM inference pipeline for a global recommendation engine. The goal was to reduce per‑request latency while keeping GPU utilization above 80 % without inflating cost.

---

### **Situation & Task**
Our static batching (fixed size = 32) caused either *under‑utilization* (short queues, high idle time) or *excess queueing* (latency >120 ms). I had to prove that a *continuous batching* strategy would outperform it in both latency and cost.

---

### **Action – Technical Design**
1. **Requirements**  
   - Target SLA: <90 ms average latency, 99.9 % availability.  
   - Cost target: ≤$0.08 per inference on spot‑GPU instances.

2. **Architecture**  
   *AWS Lambda* (Python) receives HTTP requests → pushes to a *Kinesis Data Stream* (`InferenceQueue`).  
   A *Step Functions* state machine orchestrates:
   - **Batch Collector** (`EventBridge` rule every 5 ms): aggregates records into a dynamic batch up to max size or time‑out.  
   - **Inference Lambda** (runs on `g4dn.xlarge` spot instances) calls the model via *SageMaker Runtime* endpoint.  
   Results stream back through Kinesis → stored in DynamoDB for caching.

3. **Scalability & Availability**  
   - Auto‑scaling of Lambda concurrency + Spot Fleet keeps cost low.  
   - Multiple Kinesis shards (≥4) guarantee 99.9 % throughput.  
   - Redundant SageMaker endpoint (multi‑AZ) ensures zero single point of failure.

4. **Cost & Trade‑offs**  
   - Continuous batching reduces GPU idle time from 55 % to 20 %.  
   - Spot cost savings: 35 % vs on‑demand.  
   - Trade‑off: slight increase in batch formation latency (~2 ms) – acceptable within SLA.

---

### **Result**
- **Latency** dropped from 115 ms (static) to **78 ms** average.  
- **GPU utilization** rose from 45 % to **82 %**.  
- **Cost per inference** fell by **$0.03** (~40 %).  

---

### **Leadership Principles Highlighted**
- **Customer Obsession** – delivering sub‑100 ms latency for millions of users worldwide.  
- **Ownership & Dive Deep** – I architected the end‑to‑end flow, tuned every component, and validated with real metrics.

---

> *Bar‑raiser note:* Look for evidence that you *owned* the problem, *dove deep* into AWS services (Kinesis, Lambda, Step Functions), quantified impact, and learned from early trials where we tweaked batch size thresholds after observing queue patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
