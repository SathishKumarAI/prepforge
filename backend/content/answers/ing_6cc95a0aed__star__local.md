---
qid: ing_6cc95a0aed__star__local
question: 'Explain: Heartbeat with Health Check — How to Detect Node Failures in Distributed
  Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 329
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:04:38-05:00'
sources: []
---

**Situation** – In my last role, our micro‑service platform ran on a Kubernetes cluster that served real‑time analytics for an e‑commerce client. The SLA demanded 99.9 % uptime, but we were seeing intermittent “stale data” errors because one of the worker nodes would silently drop connections after a memory leak.

**Task** – I had to design a lightweight health‑check system that could detect node failures within two seconds and trigger an automatic pod restart without human intervention.

**Action** – I implemented a dual‑layer heartbeat:  
1. A **TCP keep‑alive** ping every 500 ms from the master to each worker, using Go’s `net.Dialer` with a 200 ms timeout.  
2. An HTTP `/healthz` endpoint that runs a quick database query and returns a JSON status.  
The heartbeats were aggregated by Prometheus; when any node missed three consecutive pings, an Alertmanager rule fired a Kubernetes `kubectl rollout restart` on the affected deployment. I also added a jittered back‑off to avoid thundering herd when multiple nodes failed simultaneously.

**Result** – After deployment, we reduced failure detection time from ~30 s to 1.8 s, cutting data latency by 40 % and keeping uptime at 99.97 %. I learned that coupling network keep‑alives with an application‑level health probe provides both speed and accuracy in failure detection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
