---
qid: ing_5f9946b4e2__aws__local
question: 'Q: How do you design for high availability in LLM systems?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 476
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:08-05:00'
sources: []
---

**Situation & Task**  
I led the rollout of a customer‑facing LLM inference platform for an e‑commerce recommendation engine. The requirement was 99.9 % uptime while serving ~10k concurrent requests per minute, with latency <200 ms.

**Action**  
1. **Design for fault isolation** – Deployed each model version in separate ECS task definitions behind an Application Load Balancer (ALB). ALB’s *sticky sessions* were disabled to allow any healthy task to serve a request.  
2. **Stateless inference workers** – Containers pulled the latest checkpoint from S3 and cached it locally. If a task crashed, ECS automatically spun up a replacement in the same Availability Zone; cross‑AZ load balancing ensured rapid failover.  
3. **Auto‑Scaling & Circuit Breaker** – Used CloudWatch alarms on CPU/Memory to trigger ECS Service Auto Scaling (min = 2, max = 20). Implemented a simple circuit breaker that temporarily routed traffic to a “fallback” smaller model when latency spiked >250 ms.  
4. **Monitoring & Alerts** – Integrated Prometheus + Grafana dashboards; set alerts for 5‑minute error rates >1%.  
5. **Cost/Trade‑off** – Storing checkpoints in S3 (free tier) avoided EBS costs but added ~30 ms cold‑start latency, mitigated by pre‑warming scheduled Lambda “warm‑up” tasks.

**Result**  
Uptime hit 99.95 % over six months, and average latency dropped from 210 ms to 175 ms after scaling adjustments—saving ~$12k/month in compute costs.  

**Bar‑raiser cues** – Ownership (owning the entire pipeline), Dive Deep (analyzing cold‑start vs. warm‑start trade‑offs), Quantified Impact (99.95% uptime, cost savings), and learning from early failures (adding circuit breaker after a latency spike).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
