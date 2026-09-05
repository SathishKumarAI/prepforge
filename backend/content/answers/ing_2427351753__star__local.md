---
qid: ing_2427351753__star__local
question: 'Explain: Docker Volumes — Top 8 Must-Know Docker Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 324
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:41:41-05:00'
sources: []
---

**Situation** – While leading a migration of our recommendation engine from on‑prem servers to a Kubernetes cluster, the team hit a wall: each pod kept reloading a 1 GB model file from S3, causing cold starts that pushed latency over SLA.

**Task** – I had to design a solution that (1) cached the model locally, (2) persisted across pod restarts, and (3) allowed zero‑downtime updates for new model versions.

**Action** – I introduced Docker volumes backed by an NFS share. In the Dockerfile I added `VOLUME /app/models` so the runtime engine could mount the volume at `/app/models`. During deployment I used a Kubernetes PersistentVolumeClaim that referenced the NFS export, and set the pod spec to mount it as read‑only for stability. To handle updates I scripted a rolling update: pull the new model into the host directory, then trigger a graceful restart of each pod via a readiness probe that watches `/app/models/latest`. This kept the model in memory between restarts and avoided redundant S3 fetches.

**Result** – Cold start latency dropped from 1.8 s to 350 ms, throughput increased by 35%, and we achieved zero‑downtime updates for every new model release. I learned that proper volume management is a simple yet powerful tool for scaling ML workloads in containers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
