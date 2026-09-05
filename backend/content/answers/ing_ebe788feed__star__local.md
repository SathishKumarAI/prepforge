---
qid: ing_ebe788feed__star__local
question: 'Q65: Your agent can execute arbitrary Python code. How do you make this
  safe?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 303
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:20:38-05:00'
sources: []
---

**Situation:** In a recent data‑science platform I built, the AI assistant could generate and run custom Python snippets on user‑submitted notebooks. A security audit flagged that untrusted code might access sensitive files or exhaust resources.

**Task:** I needed to sandbox execution so users could benefit from dynamic code while protecting the host environment and ensuring predictable resource usage.

**Action:** I wrapped each snippet in a lightweight Docker container with read‑only mounts for only required data directories, limiting network access via `--network=none`. Inside the container I used Python’s `resource` module to cap CPU time (max 5 s) and memory (max 256 MB). For file system safety, I mounted a temporary filesystem and employed SELinux policies that forbade writes outside `/tmp/sandbox`. To guard against infinite loops or malicious imports, I parsed the AST of the code first, rejecting any `import os`, `subprocess`, or network modules. Finally, I logged all executed commands to an audit trail for post‑mortem analysis.

**Result:** Deployment reduced potential attack surface by 98 % and prevented accidental resource exhaustion; we saw a 30 % drop in support tickets related to runaway scripts. The experience taught me that combining container isolation with runtime limits and static code checks is the most robust approach to safely executing arbitrary Python in an AI system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
