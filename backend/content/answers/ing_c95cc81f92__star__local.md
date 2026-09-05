---
qid: ing_c95cc81f92__star__local
question: 'Explain: Audit Logging for Accountability — Agentic Security And Sandboxing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 313
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:12:03-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were rolling out an autonomous loan‑approval bot that used a proprietary recommendation engine. Regulators required us to prove every decision was traceable and that the model couldn't be tampered with during runtime.

**Task** – I had to design an end‑to‑end audit logging system that captured all agent actions, inputs, outputs, and any internal state changes while keeping the inference pipeline sandboxed for security.

**Action** – First, I wrapped the model in a lightweight container using gVisor, isolating it from the host. Inside, I instrumented the inference code with OpenTelemetry to emit structured events: request payload, token usage, intermediate embeddings, and final decision scores. Each event was signed with an HMAC derived from a rotating key stored in AWS KMS, then written to a tamper‑evident log in DynamoDB Streams. I added a separate “sandbox audit” service that monitored container resource limits (CPU, memory) and flagged any outbound network calls—ensuring the model couldn’t leak data.

**Result** – The audit trail met SOC 2 compliance, reduced manual review time by 70%, and we passed the regulatory audit with zero findings. I learned how to blend security primitives with observability so that AI agents remain accountable without compromising performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
