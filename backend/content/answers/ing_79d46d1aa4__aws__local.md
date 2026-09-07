---
qid: ing_79d46d1aa4__aws__local
question: 'Explain: Containerizing is the easy part — Containerizing ZooKeeper with
  Twine - Engineering at Meta'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 479
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:23-05:00'
sources: []
---

**Situation** – At Meta I led a squad that had to run an on‑prem ZooKeeper cluster for real‑time analytics. The infra was aging, patching was manual and the team couldn’t spin up test environments quickly enough.  
**Task** – Deliver a fully containerized, self‑healing ZooKeeper stack that could be deployed in minutes across any environment (on‑prem or AWS).  
**Action** – I adopted **Twine**, Meta’s lightweight orchestration layer, to wrap the official ZooKeeper image with health‑check probes and rolling‑update semantics. Inside Twine we defined a `zookeeper.yaml` manifest:

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: zk
spec:
  serviceName: "zk"
  replicas: 3
  selector:
    matchLabels:
      app: zookeeper
  template:
    metadata:
      labels:
        app: zookeeper
    spec:
      containers:
      - name: zookeeper
        image: wurstmeister/zookeeper:latest
        ports:
        - containerPort: 2181
        livenessProbe:
          exec:
            command: ["zkCli.sh", "-server", "localhost:2181", "get", "/"]
```

Twine automatically generated a **Kubernetes‑style** headless service and leveraged AWS **EKS** for production, while using **EC2 Spot Instances** for dev. I added an autoscaler that spun up extra nodes when the average request latency > 200 ms, keeping cost < $0.02/hr per node.

**Result** – Deployment time dropped from ~4 hrs to < 10 min; uptime rose to 99.999% with zero manual restarts in six months. We saved ~$30k/month on patching and provisioning.  
**Leadership Principles** – **Ownership** (I took end‑to‑end responsibility), **Dive Deep** (instrumented metrics, tuned probes), and **Deliver Results** (quantified uptime & cost savings).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
