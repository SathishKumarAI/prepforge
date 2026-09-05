---
qid: ing_3d25ac8bf6__star__local
question: 'Explain: kubectl drain — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 333
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:30:24-05:00'
sources: []
---

**Situation:**  
At my previous company we had a rolling upgrade for the production cluster to patch a critical CVE in the node OS. The upgrade required each worker node to be drained before re‑image, but our existing script only cordoned nodes and left long‑running pods stuck.

**Task:**  
I needed to implement a reliable drain routine that respected pod disruption budgets, avoided eviction of critical system workloads, and completed within 5 minutes per node.

**Action:**  
Using `kubectl drain --pod-selector='!preemptible' --ignore-daemonsets --delete-local-data --force`, I added checks for `--grace-period` to honor graceful shutdowns. I scripted a pre‑drain hook that annotated pods with `maintenance=true` and patched them with `kubectl patch pod <name> -p '{"metadata":{"labels":{"maintenance":"true"}}}'`. The script also logged eviction failures, retried up to three times, and sent alerts via Slack if any node stayed drained beyond the timeout. I validated the process in a staging cluster, iterating until all 12 nodes drained cleanly.

**Result:**  
The upgrade ran 30 % faster than before, with zero data loss and no service interruptions. Post‑upgrade monitoring showed pod restarts dropped from 7 to 0 within the first hour. I learned that combining `kubectl drain` flags with custom pre‑drain hooks yields predictable, compliant node maintenance while keeping SLA intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
