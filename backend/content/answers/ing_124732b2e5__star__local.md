---
qid: ing_124732b2e5__star__local
question: You're doing a security review of a coding agent that executes model-generated
  code. What's your threat model and controls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 280
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:10-05:00'
sources: []
---

**Situation:** While leading the audit for our new AI‑powered code assistant, I discovered that it could execute arbitrary Python scripts on our internal servers—potentially giving attackers a backdoor into production.

**Task:** My goal was to define a realistic threat model and implement controls that would let us use the agent safely without compromising our infrastructure or data.

**Action:** First, I mapped out attacker capabilities: they could inject malicious code via prompts, leverage the agent’s file‑system access, and potentially exfiltrate secrets. To counter this, I introduced a sandboxed execution environment using Docker containers with read‑only volumes, enforced the principle of least privilege, and added runtime integrity checks (hashing the interpreter image). I also implemented prompt validation rules—whitelisting allowed libraries and blocking dangerous functions like `os.system` or `subprocess`. Finally, I set up an audit log that captures every executed line and any file access, feeding it into our SIEM for real‑time alerting.

**Result:** After deployment, the agent’s code execution rate dropped to 0 % malicious incidents in a three‑month test period, while still generating over 90 % of requested functions correctly. I learned that combining strict sandboxing with proactive prompt filtering provides robust protection without stifling productivity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
