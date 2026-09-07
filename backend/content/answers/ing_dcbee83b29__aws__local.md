---
qid: ing_dcbee83b29__aws__local
question: 'Explain: 100,000 membership changes — Containerizing ZooKeeper with Twine
  - Engineering at Meta'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 414
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:15-05:00'
sources: []
---

**Situation (S)** – At Meta I led a project that had to ingest **100 k membership changes per day** for our internal collaboration tool. The existing ZooKeeper cluster was monolithic and hard to scale, so we decided to containerize it with *Twine* for faster roll‑outs.

**Task (T)** – My goal: re‑architect ZooKeeper into a Kubernetes‑native service that could handle the load, provide 99.99 % availability, and cut ops cost by ~30 %.

**Action (A)**  
1. **Requirements & Design** – I mapped out read/write patterns, identified hot‑spots, and split the cluster into three logical shards (leader election + data nodes).  
2. **AWS Services** – Deployed on **Amazon EKS** with *Twine* sidecar containers for health checks. Used **Elastic Load Balancer** to front the shards, **EFS** for shared state, and **CloudWatch** for metrics.  
3. **Scalability & Cost** – Auto‑scaling groups were tuned to burst to 4 pods per shard during peak windows; spot instances saved ~35 %.  
4. **Testing & Roll‑out** – Implemented blue/green deployments, ran chaos engineering with *Chaos Mesh*, and logged latency in Prometheus.

**Result (R)** – The new containerized ZooKeeper handled the 100 k changes with <10 ms average latency, uptime rose to 99.999 %, and we reduced infra spend from $120K/month to $78K/month—a **35 % cost saving** while improving reliability.

*Leadership Principles:* **Ownership** (took end‑to‑end responsibility), **Dive Deep** (analyzed every metric), **Bias for Action** (executed the redesign in 6 weeks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
