---
qid: ing_59b835d0f5__faang__local
question: 'Explain: Security for Hadoop Data Lake on Google Cloud Storage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 590
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:12:19-05:00'
sources: []
---

**Clarify**  
The interviewer asks how to secure a Hadoop‑based data lake that stores its raw and processed files in **Google Cloud Storage (GCS)**. Key assumptions: we’re using GCP’s native services, the cluster runs on Dataproc or GKE, and we need confidentiality, integrity, and availability for both data at rest and in transit.

**Approach**  
1. Control access with IAM & VPC‑SC.  
2. Encrypt data at rest (customer‑managed keys).  
3. Secure inter‑service traffic (TLS + mutual auth).  
4. Audit and monitor via Cloud Logging/Monitoring.  
5. Implement network isolation (private endpoints, firewall rules).

**Depth**  

| Layer | Implementation |
|-------|----------------|
| **Identity & Access Management** | Use IAM roles (`roles/storage.objectViewer`, `objectAdmin`) scoped to GCS buckets; enforce least privilege. Enable VPC Service Controls to create a security perimeter around the bucket and Dataproc clusters. |
| **Encryption at Rest** | GCS automatically encrypts with Google‑managed keys, but for stronger control use Customer‑Managed Encryption Keys (CMEK) via Cloud KMS or Customer‑Supplied Encryption Keys (CSEK). Rotate keys quarterly. |
| **Transport Security** | All Dataproc/Hadoop clients connect to GCS over HTTPS; enforce TLS 1.2+. Use mutual TLS for cluster‑to‑cluster communication (Dataproc’s `--enable-mtls` flag). |
| **Network Isolation** | Deploy clusters in private VPCs, use Private Google Access so traffic never hits the public internet. Add firewall rules to allow only required ports (HDFS 8020, YARN 8032, etc.). |
| **Audit & Monitoring** | Enable Cloud Audit Logs for GCS and Dataproc; set up alerts on `DATA_READ`/`WRITE` events. Use Security Command Center to scan for misconfigurations. |
| **Backup & Disaster Recovery** | Cross‑region bucket replication with CMEK, enforce retention policies. |

**Edge Cases**  
- IAM policy propagation delays → test with short‑lived service accounts.  
- Bucket lifecycle rules deleting data before audit logs expire → adjust retention.  
- VPC‑SC misconfig leading to “access denied” errors → validate perimeter via `gcloud access-context-manager`.  

**Optimize & Communicate**  
Explain trade‑offs: CMEK adds latency but meets regulatory requirements; VPC‑SC reduces attack surface but requires careful perimeter design. Summarize that the layered defense—identity, encryption, network, audit—provides robust security for a Hadoop data lake on GCS while remaining scalable and manageable in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
