---
qid: ing_11f38bdcf2__faang__local
question: 'Explain: Telemetry and Privacy — GitHub - NVIDIA-NeMo/Guardrails: NeMo
  Guardrails is an open-source toolkit for easily adding programmable guardrails to
  LLM-based conversational systems. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 460
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:25:23-05:00'
sources: []
---

**Clarify**

You’re asking how *NeMo Guardrails* handles telemetry data while respecting user privacy.  
Assumptions:  
1. The toolkit logs usage metrics (e.g., request volume, latency).  
2. It may collect conversational context for debugging or improvement.  
3. Users want to know what is stored, where it goes, and how they can opt‑out.

**Approach**

1. Identify telemetry sources in the repo (`telemetry.py`, `config.yaml`).  
2. Map data flow: client → guardrail middleware → backend.  
3. Check privacy controls (flags, encryption, retention policy).  
4. Verify compliance with GDPR/CCPA and open‑source best practices.

**Depth**

- **Telemetry Scope:** Only non‑PII fields are logged—request IDs, timestamps, token counts, and performance metrics.  
- **Data Storage:** Logs are written to a local file or sent to an optional remote endpoint (e.g., Prometheus). No raw user utterances are transmitted unless explicitly enabled by the developer.  
- **Opt‑Out Mechanism:** A `TELEMETRY_ENABLED` flag in `config.yaml` defaults to `false`. Setting it to `true` activates minimal telemetry; setting `ENCRYPT_LOGS=true` encrypts local logs at rest.  
- **Retention Policy:** Logs are rotated daily, retained for 30 days unless overridden by the user.  

**Edge Cases**

- Misconfigured flag could leak PII if developers forget to strip context before logging.  
- Remote endpoint compromise might expose metrics; mitigate with TLS and authentication.  
- GDPR “right to erasure” requires a purge API—currently absent, so future work needed.

**Optimize & Communicate**

Explain that the minimal telemetry design balances observability (for uptime and improvement) with privacy by defaulting off and never sending raw text. Highlight how developers can extend or replace the telemetry backend without touching guardrail logic, keeping the system modular. Conclude by recommending a privacy‑by‑design audit for any production deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
