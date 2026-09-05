---
qid: ing_a14450f2dc__star__local
question: 'Explain: On-call playbook — Multi Tenant Fine Tuning Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 374
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:11-05:00'
sources: []
---

**Situation:**  
Our company launched a new multi‑tenant AI fine‑tuning service that lets each client train models on shared GPU clusters. A week after go‑live, we saw an unexpected spike in GPU memory usage and slow response times for several tenants.

**Task:**  
I had to create an on‑call playbook that would let the ops team quickly isolate tenant‑specific issues, roll back problematic tuning jobs, and restore service levels without affecting other customers.

**Action:**  
1. **Telemetry & Alerts:** Added per‑tenant metrics (GPU usage, queue depth, job latency) to Prometheus and set thresholds in Grafana.  
2. **Isolation Scripts:** Wrote a bash script that queries the scheduler for tenant queues, pauses or cancels jobs above the threshold, and restarts only the affected GPU nodes using Ansible.  
3. **Rollback Procedure:** Implemented a version‑controlled job history table; if a fine‑tune caused memory leaks, the playbook automatically reverts to the last stable checkpoint stored in S3.  
4. **Documentation & Training:** Drafted concise runbooks with screenshots, ran tabletop drills with the on‑call squad, and added automated Slack notifications for status updates.

**Result:**  
During the next peak period, we identified a memory leak in Tenant B’s job within 12 minutes, paused its queue, and restored normal latency to <200 ms across all tenants—down from 5 s. The playbook reduced mean time to recovery by 70%, and I learned how fine‑grained observability combined with scripted automation can keep a shared AI platform reliable at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
