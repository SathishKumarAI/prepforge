---
qid: ing_06c5f4f113__faang__local
question: 'Explain: Data Exfiltration and Leakage — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 529
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:10-05:00'
sources: []
---

**Clarify**  
The question asks how to guard against *data exfiltration* (unauthorized removal) and *leakage* (accidental release) in AI systems—i.e., protecting training data, model weights, and inference outputs from adversaries or internal mishandling.

Assumptions:  
- Multi‑tenant cloud deployment.  
- Sensitive data may be used to fine‑tune models.  
- Compliance with GDPR/CCPA is required.

**Approach**  
1. *Data‑at‑rest* encryption & key management.  
2. *Model hardening*: differential privacy, weight masking, and secure enclaves.  
3. *Network controls*: VPNs, zero‑trust access, and egress monitoring.  
4. *Audit & logging*: immutable logs, anomaly detection on data flows.  
5. *Policy enforcement*: least‑privilege IAM, role‑based access, and automated policy compliance checks.

**Depth**  
- **Encryption**: AES‑256 with hardware‐backed HSMs; rotate keys quarterly.  
- **Differential privacy (DP)**: add calibrated noise to gradients during training; trade‑off ε‑DP vs utility.  
- **Secure enclaves (e.g., Intel SGX)**: isolate inference so raw inputs never leave the enclave.  
- **Network segmentation**: micro‑segmentation + egress inspection with ML‑based anomaly detection (e.g., detecting unusual large payloads).  
- **Audit trail**: write logs to a tamper‑proof append‑only store; use signed JWTs for provenance.

Complexity: encryption & DP add O(1) overhead per record; enclaves introduce ~10–20 % latency but eliminate data leakage risk.  

**Edge Cases**  
- Insider threats: enforce separation of duties and audit all privileged actions.  
- Side‑channel leaks in SGX: mitigate with constant‑time operations and periodic enclave reboots.  
- Model inversion attacks: use DP and limit output granularity (e.g., top‑k instead of raw logits).

**Optimize & Communicate**  
Start with a *least‑privilege* baseline, then layer DP and enclaves for high‑risk data. Use clear metrics—exfiltration attempts detected vs false positives—to iterate. Explain trade‑offs to stakeholders: “We’ll pay 15 % latency for zero exfil risk.” This structured narrative aligns with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
