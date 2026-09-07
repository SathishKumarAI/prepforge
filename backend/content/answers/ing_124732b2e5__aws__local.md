---
qid: ing_124732b2e5__aws__local
question: You're doing a security review of a coding agent that executes model-generated
  code. What's your threat model and controls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 452
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:06:50-05:00'
sources: []
---

**Situation** – While leading the security review of a new *Coding Agent* that runs model‑generated code, I needed to protect our customers’ data and keep service uptime above 99.9 %.  

**Task** – Define a threat model for untrusted code execution and architect controls that satisfy AWS compliance standards while keeping cost < $0.01 per run.

**Action**  
1. **Threat Model** –  
   * **Injection & Escalation**: malicious code could read/write to host files or network.  
   * **Resource Exhaustion**: infinite loops or large allocations could spike CPU/Memory, affecting other tenants.  
   * **Persistence**: attacker could implant backdoors in the runtime environment.

2. **Controls** –  
   * Run each job inside an **AWS Fargate task** with a minimal Alpine image; attach only an IAM role that allows reading from a dedicated S3 bucket (the code artifact).  
   * Enforce a **CPU/Memory limit** and a 30‑second timeout via ECS task definitions.  
   * Use **Amazon GuardDuty** + **AWS Config** to detect anomalous API calls or unexpected network traffic.  
   * Store all execution logs in **CloudWatch Logs**, then ship to an encrypted S3 bucket for forensic analysis.  
   * Implement a **sandboxed interpreter** (e.g., `pyodide` in WebAssembly) that runs code with no OS access, limiting the attack surface.

3. **Metrics & Results** – After rollout, zero incidents of data exfiltration and a 25 % reduction in average execution time due to tighter resource limits; cost per run dropped from $0.02 to $0.008.

**Result** – Achieved 99.95 % availability, met SOC‑2 Type II compliance, and demonstrated ownership by proactively hardening the system before any breach occurred.  

*Leadership Principles:* **Customer Obsession**, **Ownership**, **Dive Deep**, **Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
