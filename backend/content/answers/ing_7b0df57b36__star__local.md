---
qid: ing_7b0df57b36__star__local
question: 'Explain: Caution — Example: Deploying Cassandra with a StatefulSet | Kubernetes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 333
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:40:01-05:00'
sources: []
---

**Situation:**  
At my previous company we were scaling our recommendation engine and decided to move the Cassandra data layer into production on a managed Kubernetes cluster. The team wanted zero downtime during the upgrade, so we had to deploy Cassandra as a StatefulSet.

**Task:**  
I was responsible for designing a rollout that preserved data integrity, maintained quorum, and avoided split-brain scenarios while keeping the cluster’s write latency under 10 ms.

**Action:**  
First, I set up a rolling update strategy with `maxUnavailable: 0` to guarantee at least one node stayed online. I used persistent volumes backed by SSDs and enabled `ReadWriteOncePod` access mode for strict isolation. To handle the initial seed list, I added an external ConfigMap that dynamically injected IPs from a headless service, ensuring each pod discovered its peers correctly. I also configured Cassandra’s `auto_snapshot` to false during upgrades, then manually triggered snapshots before any node restart. For monitoring, I hooked Prometheus exporters to track `cassandra_write_latency_seconds` and used a custom script to verify that the `QUORUM` write consistency level was still achievable after each pod replacement.

**Result:**  
The upgrade completed in 4 hours with zero data loss and no service interruption. Write latency stayed below 8 ms, meeting SLA requirements. I learned that careful seed management and strict update policies are essential when running stateful workloads on Kubernetes; otherwise, you risk split-brain or prolonged downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
