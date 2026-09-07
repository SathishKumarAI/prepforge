---
qid: ing_095e9dc042__aws__local
question: How does the load balancer choose the backend server?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 444
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:47:12-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When I joined a fintech startup, our real‑time fraud‑detection ML service was hitting 30 % request‑to‑response latency during peak hours. The load balancer was routing traffic to back‑ends in a round‑robin way, but the model inference nodes had very uneven CPU loads because some were running larger models than others. I owned the performance degradation issue and needed to redesign how the Application Load Balancer (ALB) chose targets.

**Action (Dive Deep + Bias for Action)**  
1. **Metric collection:** Instrumented each EC2 instance with CloudWatch custom metrics (`ml_inference_cpu_util`, `model_size_gb`).  
2. **Dynamic weight calculation:** Implemented a Lambda that, every 30 s, queried CloudWatch and updated the ALB target group weights proportional to inverse CPU utilization per GB of model size.  
3. **Health‑check refinement:** Added a lightweight “warm‑up” health check that returned success only after the model was fully loaded into memory.  
4. **Auto‑scaling integration:** Configured Target Tracking Scaling Policy on the ALB target group using the weighted metric, so new instances were launched when average weight dropped below 70 %.  

**Result (Deliver Results + Quantified Impact)**  
- Average latency fell from **250 ms to 90 ms** during peak (40 % improvement).  
- CPU utilization balanced across nodes (mean ±σ: 48 % ± 5 %) versus previous 68 % ± 15 %.  
- Cost decreased by **12 %** because the system now spun up fewer oversized instances.

**Bar‑raiser takeaways**  
*Ownership*: I led from discovery to production rollout.  
*Dive Deep*: I quantified the root cause and engineered a metric‑driven solution rather than applying a blanket round‑robin rule.  
*Learning from failure*: The first iteration over‑scaled on CPU alone; adding model size normalized load and prevented cold starts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
