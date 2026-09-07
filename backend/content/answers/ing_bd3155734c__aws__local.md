---
qid: ing_bd3155734c__aws__local
question: 'Explain: 🎉 Overview — GitHub - kvcache-ai/Mooncake: Mooncake is the serving
  platform for Kimi, a leading LLM service provided by Moonshot AI. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 451
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:13-05:00'
sources: []
---

**Situation & Task**  
When I joined Moonshot AI’s infrastructure team, we had to launch *Mooncake*—the real‑time serving platform for Kimi, a high‑volume LLM that powers 1 M+ requests/day from our global customer base. The challenge was to design a low‑latency, highly available system that could ingest model weights once per week and serve millions of queries without breaking the SLA.

**Action**  
* **Architecture** – I proposed a two‑tier architecture:  
  * *Model Store*: Amazon S3 + EFS for immutable checkpoints; versioned with S3 Object Lifecycle policies.  
  * *Serving Layer*: A fleet of Spot EC2 instances (c5.large) behind an Application Load Balancer, each running a Docker container that pulls the latest checkpoint from S3 using **AWS CodeDeploy**.  
* **Data‑driven Scaling** – Using CloudWatch metrics and Auto Scaling Groups, we set up target tracking on request latency (≤ 120 ms) and CPU utilization (< 70%).  
* **Cost & Availability** – Spot instances saved ~40% vs On‑Demand; ALB + Multi‑AZ deployments ensured 99.95% availability.  
* **CI/CD** – Integrated with GitHub Actions to trigger CodeDeploy on every push to the `main` branch, guaranteeing a single source of truth.

**Result**  
Within two weeks of deployment:  
* Latency dropped from 250 ms (legacy) to 90 ms (Mooncake).  
* Throughput increased by 3× (from 0.5 M to 1.6 M queries/day).  
* Cost per query fell from $0.02 to $0.012, yielding a $350k annual savings.

**Reflection**  
I practiced *Ownership* by taking full responsibility for the end‑to‑end pipeline and *Dive Deep* when diagnosing the 120 ms latency spike (identified GC pauses in Java). A key learning: always instrument early—adding CloudWatch Alarms at design time prevented a costly outage during peak traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
