---
qid: ing_fcf8b40519__aws__local
question: 'Explain: Strategy 1: Model Routing — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 482
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:58-05:00'
sources: []
---

**Strategy 1 – Model Routing for Pricing & Cost Optimization**  
*Leadership Principles:* **Ownership**, **Dive Deep**

**Situation:**  
Our ML‑ops platform served ~200 customers, each deploying up to 10 inference models per day. Peak traffic spiked during promotions, causing over‑provisioning and monthly cost overruns of 18 % on AWS SageMaker endpoints.

**Task:**  
Build a routing layer that selects the most cost‑effective model variant (e.g., lightweight vs. heavy GPU) without compromising SLA (≤ 120 ms latency) or revenue targets.

**Action:**  
1. **Data‑Driven Profiling** – Collected 48 h of inference latency, CPU/GPU usage, and price per invocation from SageMaker endpoints.  
2. **Cost–Benefit Model** – Implemented a Lambda‑driven decision engine that maps request attributes (user tier, content type) to a cost‑model table (SageMaker RealTime vs. Batch Transform).  
3. **AWS Services:**  
   * Amazon API Gateway* → entry point;  
   * AWS Step Functions* → orchestrate routing logic;  
   * Amazon SageMaker Edge Manager* for lightweight inference on IoT devices;  
   * Amazon CloudWatch & Cost Explorer* for continuous monitoring.  
4. **Scalability:** The Lambda pool auto‑scales with concurrency, keeping cold start < 300 ms.  
5. **Availability:** Step Functions’ retry policy (exponential backoff) guarantees 99.95 % uptime.

**Result:**  
Reduced per‑inference cost by **27 %**, cut monthly spend from $350K to $260K, and maintained latency within SLA for 99.9 % of requests. Learned that fine‑grained telemetry is essential; initial rollout missed GPU utilization thresholds, so we added a feedback loop to update the decision table every 12 h.

**Bar‑raiser takeaway:**  
Demonstrated ownership by taking full responsibility from data collection to deployment, dived deep into cost metrics, quantified impact with real numbers, and iteratively improved based on failure insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
