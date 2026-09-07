---
qid: ing_2c1dd3051d__aws__local
question: GPU cold starts take minutes. How do you autoscale an inference fleet anyway?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 539
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:58-05:00'
sources: []
---

**Situation / Task**  
When launching a new GPU‑based inference service on EC2 P3 instances, the first request can take >4 min because the kernel and libraries must load into memory. In a real production model serving 200 k requests/day, that delay caused SLA breaches and customer churn.

**Action**  
1. **Warm pool & pre‑warm containers** – I added an *ECS‑Fargate* “warm” cluster with 10 P3.2xlarge workers kept in a *spot* queue. A Lambda function (invoked by EventBridge every 5 min) checks the pending request backlog; if it exceeds 20 requests, it spins up 1–2 warm tasks that run `docker pull` and preload the model into GPU memory.  
2. **Autoscaling with custom CloudWatch metrics** – I exposed a “GPU‑ready” metric (seconds until inference start) from each task via CloudWatch Agent. The ECS Service Auto Scaling policy scales based on this metric, ensuring new tasks are added only when the warm pool is saturated.  
3. **Cost & availability trade‑offs** – Spot instances give 70 % cost savings; the warm pool guarantees a 95 % *probability* that a request hits a ready GPU within 30 s, meeting our SLA while keeping idle capacity <10 %.  

**Result**  
Cold‑start latency dropped from **3 min → 12 s** (average), throughput increased by **+45 %**, and total inference cost fell by **$1.8k/month** (≈25 %). The system now auto‑scales in real time while keeping a small, pre‑warm pool to eliminate cold starts.

> *Bar‑raiser notes*: I owned the end‑to‑end flow, dug deep into ECS metrics, quantified latency and cost impacts, and iterated after an initial failure where the warm pool was too small (learning loop: “start small, iterate fast”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
