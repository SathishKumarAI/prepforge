---
qid: ing_715d546ce9__aws__local
question: 'Explain: GPU Scaling for Self-Hosted — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 427
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:48-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to build a self‑hosted LLM platform for an on‑prem data‑center client who needed 4× faster inference than their existing GPU pool while staying within a $1M annual cap.

**Action**  
*Customer Obsession & Ownership*: I mapped the user’s latency goal (≤30 ms per token) and cost limit.  
*Dive Deep & Bias for Action*: I benchmarked NVIDIA A100 vs. H100, measured 10× higher FLOPs on H100 but 3× more power draw.  
I chose **AWS Nitro Enclaves + AWS Outposts** to keep data local, added **SageMaker Neo** to compile the model into a lightweight runtime, and deployed it in a **K8s autoscaler** that spins up H100 instances only during peak slots (2 ×/day).  
*Invent & Simplify*: I introduced a **GPU‑pooling layer** using NVIDIA Multi‑Instance GPU (MIG) to run 4 separate inference workloads per card, cutting idle capacity by 60%.  

**Result**  
- Latency dropped from 90 ms to 25 ms (36% improvement).  
- Cost fell to $850k/yr, a 15% savings vs the baseline.  
- The solution is 99.95% available due to dual‑zone Outpost deployment and automated failover.

**Learnings**  
Bar‑raisers probe for ownership—did I own the end‑to‑end ROI? Depth—did I quantify power vs. throughput trade‑offs? Impact—are my metrics realistic? Failure—what if MIG fails, how do we rollback? I iterated on a quick “canary” rollout to capture those scenarios before full scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
