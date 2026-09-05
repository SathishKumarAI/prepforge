---
qid: ing_1d9bb93df8__star__local
question: How do you sandbox a code-executing agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 337
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:28:50-05:00'
sources: []
---

**Situation** – In my last role I built an AI‑powered recommendation engine that allowed users to upload custom Python snippets for personalization. During a client demo we discovered that the sandbox was leaking data: a malicious snippet could read local files and exfiltrate them via HTTP requests.

**Task** – My goal was to harden the execution environment so that any user code ran safely, with no file system or network access, while still delivering accurate recommendations within 200 ms per request.

**Action** – I wrapped the agent in a Docker‑based microVM (Firecracker) and added a seccomp filter to block `open`, `socket`, and `execve` syscalls. Inside the container I used `pypy` with its built‑in JIT but disabled the import hook, so only a curated subset of stdlib modules (`math`, `json`) was available. I also implemented a per‑request CPU quota (10 ms) via cgroups and enforced memory limits (32 MB). To catch any escape attempts, I added a watchdog that monitored for system calls outside the whitelist and logged them to Sentry.

**Result** – After deployment, zero sandbox escapes were observed over 3 months of production traffic. The average latency stayed at 185 ms, meeting SLA. I learned that combining lightweight OS‑level isolation (Firecracker) with syscall filtering and strict resource quotas is essential for safe code execution in AI agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
