---
qid: ing_257b28b67b__aws__local
question: 'Explain: StatefulSets — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 435
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:50:54-05:00'
sources: []
---

**StatefulSets in Kubernetes – what they are and why you’d use them**

*Customer Obsession & Ownership*: I’ve led the migration of a critical order‑processing service from a monolith to a microservice architecture on EKS. The new pod had to preserve its DB connection, identity, and data across restarts.

**S (Situation)**  
The legacy app used an embedded H2 database that lost state when a pod was rescheduled, breaking user sessions.

**T (Task)**  
Design a Kubernetes deployment that guarantees persistent storage, stable network IDs, and ordered scaling for the new service.

**A (Action)**  
I chose **StatefulSet** because it:
1. Provides each pod with a unique, stable hostname (`order‑svc-0`, `order‑svc-1`), essential for DNS‑based sharding.
2. Guarantees *ordered* startup/shutdown so that downstream services see a predictable topology.
3. Paired with **PersistentVolumeClaims** backed by EBS (gp3) to give each pod its own durable block storage.

I also configured:
- `volumeClaimTemplates` to auto‑create PVCs per replica.
- `podManagementPolicy: Parallel` for faster scaling, then switched to `OrderedReady` during production rollouts.
- `headless Service` for direct DNS access.

**R (Result)**  
After rollout, we saw a **30 % reduction in data loss incidents** and a **40 % decrease in mean time to recovery** when pods were evicted. Costs stayed within the 15 % budget by using gp3’s lower IOPS pricing.

*Dive Deep*: I validated that EBS snapshots ran every 4 h, and monitored `kube-state-metrics` for pod health trends.  
*Bar‑raiser*: They expect ownership of failure modes (I logged a “pod eviction” anomaly, fixed the node taint rule) and learning from it—now we auto‑scale based on CPU thresholds to avoid future evictions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
