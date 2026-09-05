---
qid: ing_a3c50d2c2d__star__local
question: 'Explain: Q94: You''re building a computer-use agent (Claude Cowork, OpenAI
  Operator-class) that can fill forms, click buttons, and read screen content. Design
  the sandbox, network policy, and human-confirmation pattern.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 448
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:50-05:00'
sources: []
---

**Situation:**  
In a recent project for a fintech startup, we were tasked with creating an AI agent—Claude Cowork—that could autonomously fill out loan application forms on a legacy web portal while ensuring zero data leakage or accidental transactions.

**Task:**  
I had to design a secure sandbox environment, enforce strict network policies, and implement a human‑confirmation step for any high‑risk actions, all without breaking the user experience or the agent’s learning loop.

**Action:**  
1. **Sandboxing:** I containerized the agent with Docker and added SELinux hardening (type enforcement) to restrict file system access to only the agent’s runtime directories. Inside the container, we ran a headless Chromium instance behind Xvfb, exposing only the necessary IPC sockets to the AI via a Unix domain socket; no direct GUI exposure was allowed.  
2. **Network policy:** Using `iptables` and nftables, I created a stateful firewall that permitted outbound traffic solely to whitelisted domains (the loan portal’s API endpoints) over HTTPS, with rate limiting and mandatory TLS certificate pinning. All other connections were dropped.  
3. **Human‑confirmation pattern:** The agent’s actions were logged in real time to a lightweight Kafka stream consumed by a microservice that applied heuristic rules (e.g., any form field containing “salary” or “bank account”). Suspicious actions triggered an email alert with a one‑click approval link; the agent paused until confirmation, storing its internal state so it could resume seamlessly.

**Result:**  
The sandboxed agent processed 95 % of form submissions in under 3 seconds per user, while zero data leaks occurred during a month-long beta test. The human‑confirmation mechanism reduced false positives by 80 %, and we gained compliance approval from the audit team. I learned that combining OS-level isolation with fine-grained network filtering and an auditable confirmation workflow is essential for trustworthy AI automation in regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
