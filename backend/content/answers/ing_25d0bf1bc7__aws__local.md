---
qid: ing_25d0bf1bc7__aws__local
question: 'Explain: Increasing availability — The quest for availability in the cloud
  | Pluralsight'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 520
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:51:44-05:00'
sources: []
---

**Situation (S)**  
While leading a SaaS product for online learning, we hit a 2 % monthly churn spike after a critical update rolled out to our AI‑driven recommendation engine. Post‑mortem revealed the engine’s availability dropped from **99.95 % to 99.80 %** during peak traffic.

**Task (T)**  
Re‑architect the recommendation service to hit **>99.99 % SLA** without inflating costs, while keeping latency <50 ms for 90 % of requests.

**Action (A)**  
1. **Ownership & Dive Deep** – I mapped the failure chain: single‑region Lambda + RDS cluster, no cross‑region failover.  
2. Deployed a **multi‑AZ, multi‑region architecture** using:
   * **Amazon SageMaker Endpoint** with *Multi-Model* hosting (cost‑efficient inference).  
   * **AWS Global Accelerator** to route traffic globally and provide instant failover.  
   * **Amazon DynamoDB Global Tables** for session state, auto‑replicated with <10 ms read latency.  
3. Implemented **Circuit Breaker & Retries** in the client SDK; added **CloudWatch Alarms + EventBridge** to trigger an automatic rollback if error rate >1 %.  
4. Introduced **Canary deployments** via CodeDeploy and a *Feature Flag* system, limiting risk to 5 % of traffic.

**Result (R)**  
Availability rose from **99.80 % → 99.995 %** in one week, cutting churn by **1.3 %** (≈300 users/month). Cost increased only **4 %** due to DynamoDB global tables and additional Lambda invocations, while latency stayed <45 ms for 92 % of requests.

---

### What a bar‑raiser looks for  
* **Ownership** – I owned the problem end‑to‑end and drove cross‑team collaboration.  
* **Dive Deep** – Detailed failure analysis uncovered the root cause.  
* **Quantified Impact** – Clear metrics (SLA, churn, cost) demonstrate success.  
* **Learning from Failure** – Post‑mortem turned a 2 % churn spike into a robust, globally resilient system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
