---
qid: ing_c9124ed953__aws__local
question: 'Explain: Architecture: Sandboxed Environments — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 415
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:27-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the redesign of a multi‑tenant analytics platform that allowed data scientists to run arbitrary Python notebooks on shared GPU clusters. The existing “bare‑metal” approach caused accidental data leakage and regulatory breaches. My goal was to build **sandboxed environments** that isolated each user’s compute agent while keeping cost per notebook under $0.05 h.

**Action**  
I adopted *Customer Obsession* and *Ownership*. I mapped the requirements (CPU/GPU isolation, persistent storage, network segmentation) and chose a serverless‑first stack:  

- **AWS Fargate + ECS** for stateless containerized notebooks.  
- **Amazon EFS** with per‑user mount targets for file isolation.  
- **AWS App Mesh** to enforce policy‑based egress (no internet by default).  
- **AWS Nitro Enclaves** for GPU workloads that need extra security.  

I wrote a CI/CD pipeline that auto‑scales based on *CPU credits* and *GPU queue depth*, ensuring 99.9 % availability. Cost was cut by 40 % because Fargate eliminates over‑provisioning.

**Result**  
After launch, we saw a **50 % reduction in accidental data exfiltration incidents** (from 12 to 6 per quarter) and user satisfaction scores rose from 3.8 to 4.5/5. The platform handled 1,200 concurrent notebooks with <2 s latency spikes, meeting SLA targets.

**Learnings & Bar‑raiser cues**  
I documented failure modes (e.g., enclave launch timeouts) and built automated rollback hooks—demonstrating *Dive Deep* and a bias for action that the hiring team values.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
