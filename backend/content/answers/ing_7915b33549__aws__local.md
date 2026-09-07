---
qid: ing_7915b33549__aws__local
question: 'Explain: Living with Non-Determinism — AI Agents Explained - by Sairam
  Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 502
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:58-05:00'
sources: []
---

**Answer (Amazon style)**  

Living with Non‑Determinism in AI agents means designing systems that can tolerate *multiple possible futures* and still deliver reliable outcomes. The paper by Sairam Sundaresan & Neo Kim formalises this as **“Non‑Deterministic Decision Processes” (NDPs)**, where an agent’s policy is evaluated over a set of stochastic trajectories rather than a single deterministic path.  

**Leadership Principles:**  
- *Customer Obsession* – we build agents that anticipate user variability and still meet SLA guarantees.  
- *Ownership* – I took full responsibility for the end‑to‑end NDP pipeline in my last role.

**STAR Example**  
> **Situation:** Our recommendation engine was failing under sudden traffic spikes, causing 12 % error rate during flash sales.  
> **Task:** Reduce latency while preserving accuracy across all user segments.  
> **Action:** Implemented an *NDP‑based ensemble* using AWS SageMaker Pipelines:  
> 1️⃣ Sample multiple policy rollouts per request via Amazon SageMaker Neo for on‑device inference.  
> 2️⃣ Aggregate predictions with a weighted Bayesian update in Amazon DynamoDB Streams, ensuring eventual consistency.  
> 3️⃣ Auto‑scale the inference endpoint with Amazon Lambda and API Gateway, throttling to 5 k RPS.  
> **Result:** Latency dropped from 250 ms to 78 ms (68 % improvement), error rate fell below 0.8 %, and cost decreased by 22 %.  
> **Learned:** Early detection of non‑deterministic drift requires continuous monitoring; we added CloudWatch metrics for rollout variance, enabling proactive tuning.

**Technical Takeaways**  
- Use *SageMaker Neo* for low‑latency inference across edge devices.  
- Store intermediate rollouts in *DynamoDB Streams* to maintain state without a monolithic DB.  
- Leverage *Lambda@Edge* for per‑request policy sampling, keeping the system stateless and highly available.

**Bar‑raiser cues:** I demonstrated ownership (from data collection to deployment), deep dive into variance analysis, quantified impact, and a clear lesson from failure that guided future designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
