---
qid: ing_5bb43a240a__star__local
question: 'Explain: Resource Management using Mesos — DevOps-SRE/2_ContainerOrchestration/ApacheMarathon&Mesos.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 338
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:57-05:00'
sources: []
---

**Situation:**  
In my last role I was leading the migration of our legacy microservices stack to a container‑native architecture on AWS. The team had to run over 120 Docker containers across 12 EC2 instances, and we were seeing CPU oversubscription that caused intermittent request timeouts during peak traffic.

**Task:**  
I needed to redesign the resource allocation so each service got predictable CPU and memory guarantees while keeping costs under our $30k/month cap. The goal was to reduce latency spikes by at least 40% and maintain a high utilization rate (above 70%) on the cluster.

**Action:**  
I introduced Apache Mesos with Marathon as the scheduler. First, I defined fine‑grained resource bundles in Marathon’s JSON app definitions: CPU shares, memory limits, and `cpus`/`mem` constraints per task. Then, using Mesos’ hierarchical allocator, I set a default quota for each team namespace to enforce fair sharing. To avoid overcommitment, I enabled Mesos’ “resource offers” feature so that tasks only launched when sufficient resources were available. For monitoring, I integrated Prometheus with the Mesos metrics endpoint and created Grafana dashboards to track CPU/memory utilization per framework.

**Result:**  
After rollout, we achieved a 55% reduction in latency spikes, brought cluster utilization up to 78%, and stayed within budget—costs dropped by 12%. The exercise also taught me how Mesos’ resource offers can be leveraged for dynamic scaling while preserving strict resource isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
