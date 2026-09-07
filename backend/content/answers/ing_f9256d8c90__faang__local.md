---
qid: ing_f9256d8c90__faang__local
question: 'Explain: Mutable Infrastructure — Cloud Native Anti-Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 564
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:19:03-05:00'
sources: []
---

**1️⃣ Clarify**  
The question asks for a discussion of *mutable infrastructure* as an anti‑pattern in cloud‑native environments and how it conflicts with the immutable, declarative model that underpins modern DevOps practices. Key assumptions: we’re talking about on‑prem or public clouds (AWS/GCP/Azure), using containers/VMs, CI/CD pipelines, and desired state management tools like Terraform or Kubernetes.

**2️⃣ Approach**  
I’ll first define mutable vs immutable infra, then list common anti‑patterns (e.g., ad‑hoc SSH changes, manual patching, “just‑in‑time” scaling). Next I’ll explain why these break reproducibility, security, and observability. Finally, I’ll suggest mitigation tactics: declarative IaC, versioned configs, immutable OS images, GitOps pipelines.

**3️⃣ Depth**  
- *Mutable infra*: changes are applied directly on running instances (e.g., “sudo apt‑get install”).  
- *Anti‑patterns*:
  - **Direct SSH/CLI tweaks** → lost in drift, hard to audit.  
  - **Manual patching** → inconsistent rollout, downtime spikes.  
  - **“Just‑in‑time” scaling** without image rebuilds → hidden dependencies.  
  - **Stateful config files** stored on the host → version control gaps.  
- *Impact*: drift leads to “works on my machine” bugs, security holes (unpatched), and rollback nightmares.  
- *Mitigations*:
  - Use immutable OS images (Packer, Docker base layers).  
  - Declare desired state in IaC; run `terraform plan`/`k8s apply`.  
  - GitOps: every change is a PR → audit trail & automated CI/CD.  
  - Immutable containers + blue‑green or canary deployments.

**4️⃣ Edge Cases**  
- Legacy workloads that require live configuration changes (e.g., database migrations).  
- Highly dynamic environments where scaling must react instantly (needs lightweight overlays).  
- Regulatory requirements for manual intervention logs.

**5️⃣ Optimize & Communicate**  
I’d emphasize that the *cost* of mutable infra is high: increased MTTR, security risk, and lost developer velocity. The *solution* is to shift left—define everything declaratively, automate image builds, and treat instances as disposable. In an interview I would conclude with a quick example: “Instead of SSH‑ing into a VM to install a patch, we bake the patch into our base image, tag it, push to the registry, and redeploy via Kubernetes; this guarantees identical replicas across environments.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
