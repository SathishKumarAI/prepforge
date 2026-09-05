---
qid: ing_695558a457__star__local
question: 'Explain: Design a defence-in-depth strategy for a customer-facing agent
  that reads user data and can take actions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 384
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:41-05:00'
sources: []
---

**Situation**  
In my last role I built an AI‑powered virtual assistant for a fintech client that accessed sensitive customer data and could trigger account actions like transfers or bill payments. The product had to meet PCI DSS, GDPR, and internal audit requirements while remaining highly available.

**Task**  
I was tasked with designing a defense‑in‑depth security architecture that protected user data at rest, in transit, and during processing, without compromising the agent’s responsiveness or user experience.

**Action**  
1. **Zero‑Trust Network Segmentation** – deployed micro‑segments around the inference servers; only authenticated services could reach the database via least‑privilege IAM roles.  
2. **Encrypted Data Plane** – used TLS 1.3 for all external traffic and AES‑256 GCM for internal gRPC calls.  
3. **Homomorphic Encryption & Secure Enclaves** – offloaded sensitive fields to an Intel SGX enclave so the model never saw raw PII; used homomorphic encryption for optional end‑to‑end protection in cloud.  
4. **Model Auditing & Runtime Monitoring** – instrumented the inference pipeline with a custom watchdog that logs feature vectors, prediction scores, and flags outliers; alerts trigger automatic rollback to a safe baseline.  
5. **Redundancy & Disaster Recovery** – mirrored model weights across regions, used Kubernetes health probes for graceful failover, and performed quarterly chaos‑engineering drills.

**Result**  
The agent achieved 99.9% uptime, reduced data exposure risk by >90%, and passed an external SOC 2 audit with zero findings. I learned that blending cryptography, hardware isolation, and continuous monitoring is essential when AI interacts directly with user data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
