---
qid: ing_edb689766c__faang__local
question: 'Explain: Walk me through how you would threat-model a new agent before
  it ships.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 513
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:53:10-05:00'
sources: []
---

**Clarify**  
We’re building a new autonomous agent that will run on user devices and in the cloud, process personal data, and potentially trigger actions (e.g., controlling IoT). I’d confirm: *What data flows?* *Where does the code execute?* *Which threat actors are realistic (malicious insiders, external attackers, compromised services)?* *What regulatory constraints apply?*  

**Approach**  
1. **Asset inventory & value mapping** – list data, compute resources, APIs, and third‑party services.  
2. **Threat enumeration** – use STRIDE (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege).  
3. **Vulnerability assessment** – static analysis, dependency checks, sandbox execution.  
4. **Attack surface mapping** – all inputs (network, sensors, user commands) and outputs (actuators, logs).  
5. **Risk scoring** – combine likelihood (from threat intelligence) with impact (confidentiality, integrity, availability).  

**Depth**  
- *Spoofing*: verify authentication of external services; use mutual TLS.  
- *Tampering*: code signing, integrity checks on binaries and configuration files.  
- *Repudiation*: tamper‑evident logs stored in a write‑once storage (e.g., immutable S3).  
- *Information disclosure*: encrypt data at rest/transport, enforce least‑privilege IAM roles.  
- *Denial of Service*: rate limiting on input streams, circuit breakers for downstream calls.  
- *Privilege escalation*: sandbox the agent with minimal OS permissions; run in containers with seccomp profiles.  

**Edge cases**  
- Adversarial ML inputs that could trigger unsafe actions.  
- Compromise of a trusted third‑party API.  
- Device loss or jailbreak leading to privilege abuse.  
Tests: fuzzing command streams, penetration tests on the agent’s APIs, and chaos engineering for fault tolerance.

**Optimize & Communicate**  
Iterate threat models with security champions; automate scanning tools in CI/CD. Summarize findings in a concise risk matrix presented to product leads, highlighting high‑risk vectors that require architectural changes versus low‑risk mitigations that can be handled in code reviews. This structured cycle ensures the agent ships with a defensible posture while keeping engineering velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
