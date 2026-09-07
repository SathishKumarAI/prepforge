---
qid: ing_9d505bcc3b__aws__local
question: 'Explain: You ship a policy to 300 robots. It works in the lab and degrades
  in the field. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 380
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:20:38-05:00'
sources: []
---

**Situation / Task**  
I was responsible for shipping a motion‑planning policy to 300 autonomous warehouse robots. In the lab the latency hit <20 ms and success rate >99.9 %, but field trials revealed a 12 % drop in path accuracy and an average of 35 ms extra processing time.

**Action**  
1. **Own the problem (Ownership)** – I set up a cross‑team “Field‑Failure Task Force” with firmware, sensor, and ops leads.  
2. **Dive deep into telemetry (Dive Deep)** – Using CloudWatch Logs + X-Ray traces we identified that the policy’s neural‑network inference was running on edge GPUs whose memory bandwidth throttled under real‑time sensor noise.  
3. **Prototype a lightweight inference path** – Switched to TensorRT on an AWS Graviton2‑based EC2 instance for rapid prototyping, then deployed the optimized model via SageMaker Edge Manager on the robots.  
4. **Bias for action** – Rollout was staged: 20 robots first, monitored with CloudWatch metrics (latency, error rate), and a rollback policy in place if error >5 %.  
5. **Deliver results** – After deployment latency fell to 18 ms and accuracy rose to 99.7 % (≈10 % improvement). Cost per robot dropped from $0.15/operation to $0.09.

**Result**  
Field performance matched lab benchmarks, uptime increased by 8 %, and the team learned that sensor‑noise profiling must precede model training. This reinforced our culture of ownership, rapid learning, and data‑driven iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
