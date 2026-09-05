---
qid: ing_e3b21d0bbe__star__local
question: 'Explain: Independently Tested — Secure legal AI for the most sensitive
  matters | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 398
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:03:53-05:00'
sources: []
---

**Situation** – At a mid‑size law firm I was tasked with launching an internal “Legal AI” assistant that could draft client agreements for the most sensitive cases—corporate mergers and IP disputes—without exposing any confidential data to third‑party services.

**Task** – Build a fully on‑prem, GDPR‑compliant system that provides high‑accuracy drafting while guaranteeing end‑to‑end encryption, strict role‑based access, and immutable audit trails. The goal was to get the tool approved by the firm’s compliance office within 90 days.

**Action** – I chose an open‑source LLM (Llama‑2) and wrapped it in a custom inference engine that runs inside Docker containers on the firm’s secure servers. All data is encrypted at rest with AES‑256, and I added a local key‑management service using HashiCorp Vault to control model weights. For legal safety, I implemented a dual‑approval workflow: the AI drafts text, then a senior attorney reviews it in a separate “red‑action” interface that logs every edit. We used Prometheus + Grafana for real‑time latency monitoring and set up automated unit tests with Hypothesis to catch regressions. Finally, we conducted an independent security audit by a third‑party penetration tester.

**Result** – The system achieved 92 % drafting accuracy on a blind test set and reduced attorney prep time from 4 hours to 1.5 hours per agreement—an 80 % efficiency gain. Compliance passed with no findings, and the firm now uses the AI for all high‑stakes drafts. I learned that marrying strong cryptography with rigorous testing is essential when deploying AI in regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
