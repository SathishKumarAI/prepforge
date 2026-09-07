---
qid: ing_d78014e0a9__aws__local
question: 'Explain: Note — Example: Deploying Cassandra with a StatefulSet | Kubernetes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 470
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:41-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that had to move our production‑grade Cassandra cluster from an on‑prem VM fleet into EKS for better resilience and cost control. The goal was to achieve ≥ 99.9 % availability, keep the write latency under 5 ms, and reduce ops overhead by 30 %.

**Action**  
- **Design:** Used a *StatefulSet* with `podAntiAffinity` to spread replicas across AZs, and an `initContainer` that runs `cassandra‑setup.sh` for schema bootstrap.  
- **Storage:** Provisioned EBS gp3 volumes (10 GiB) per pod; leveraged the `ebs-csi-driver` so volumes persist through pod rescheduling.  
- **Networking:** Configured a headless Service (`clusterIP: None`) to give each pod a stable DNS name, and applied NetworkPolicies to restrict traffic to Cassandra ports only.  
- **Observability:** Instrumented with Prometheus (cassandra‑exporter) and Grafana dashboards; set up CloudWatch Logs via the `aws-for-fluent-bit` sidecar for audit logs.  
- **Automation:** Used Helm charts stored in an S3 artifact bucket, deployed via CodePipeline/CodeBuild, and promoted through stages using GitOps (ArgoCD).  

**Result**  
- 99.97 % uptime over six months vs. 95 % pre‑migration.  
- Write latency dropped from 12 ms to 4 ms (average).  
- Ops effort cut by 35 %, freeing engineers for new features.  

**Learnings & Ownership**  
I owned the risk of data loss, so I added a nightly snapshot schedule using `cassandra‑snapshot` and automated restores in case of failure. The bar‑raiser would note my deep dive into Cassandra internals (commit‑log placement, read repair strategy), the quantified impact, and the iterative learning loop that turned a risky migration into a scalable, cost‑effective service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
