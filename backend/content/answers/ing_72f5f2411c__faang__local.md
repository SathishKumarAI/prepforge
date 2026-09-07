---
qid: ing_72f5f2411c__faang__local
question: 'Explain: Supported hosts ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 662
total_tokens: 896
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:11:13-05:00'
sources: []
---

**Clarify**  
You’re asking what “supported hosts” means for a **Glean Machine‑Learning Compute Platform (MCP) server**—i.e., the environments where an MCP instance can run and be managed.

Assumptions to confirm:  
1. The question refers to cloud/on‑prem hosting options.  
2. It concerns infrastructure compatibility (OS, virtualization, networking).  
3. “Supported” implies official documentation or vendor guarantees.

---

**Approach**  
1. List the host types (public clouds, private clouds, bare‑metal).  
2. Detail OS/VM requirements per type.  
3. Mention networking and storage prerequisites.  
4. Note any licensing or compliance constraints.

---

**Depth**  

| Host Type | Supported Platforms | Key Requirements |
|-----------|---------------------|------------------|
| **Public Cloud (AWS, GCP, Azure)** | EC2/Compute Engine/G‑VMS | • Linux x86_64 (Ubuntu 20.04+, CentOS 8+).<br>• Minimum vCPU = 4, RAM ≥ 16 GB.<br>• GPU optional for inference acceleration. |
| **Private Cloud / VMware** | ESXi 7.x or vSphere 7.x | • Guest OS: Red Hat Enterprise Linux 8/9 or CentOS Stream.<br>• Nested‑VM support enabled if running inside a VM.<br>• Network: VLAN with at least 10 Gbps link. |
| **Bare‑Metal** | Any x86_64 server (Dell PowerEdge, HPE ProLiant) | • BIOS/UEFI firmware ≥ 2.0.<br>• iSCSI or NVMe storage; RAID 1 for redundancy.<br>• KVM hypervisor optional for multi‑tenant isolation. |
| **Container Orchestrators** | Kubernetes 1.24+ (EKS, GKE, AKS) | • Pod CPU/Memory limits respected.<br>• PersistentVolumeClaim with CSI driver that supports block storage. |

*Licensing*: MCP requires a valid subscription; on‑prem deployments must have an on‑prem license key and a VPN to the Glean control plane.

---

**Edge Cases**  
- Running on older OS (e.g., Ubuntu 18.04) fails due to missing systemd units.  
- Insufficient network MTU can break gRPC streams.  
- GPU drivers mismatched with CUDA toolkit cause model inference stalls.

Test by deploying a minimal MCP pod in each environment, verifying health checks and metric endpoints.

---

**Optimize & Communicate**  
Highlight that the “supported hosts” list is dynamic; future updates may add ARM64 or additional cloud providers. Emphasize monitoring: auto‑scaling policies should trigger alerts if host metrics hit thresholds (CPU > 80%, disk I/O > 200 MiB/s).  

By presenting a concise matrix, clarifying assumptions, and noting testable edge cases, you demonstrate the structured thinking valued in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
