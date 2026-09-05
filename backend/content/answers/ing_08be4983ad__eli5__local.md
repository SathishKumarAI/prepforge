---
qid: ing_08be4983ad__eli5__local
question: 'Explain: The Supervisor Pattern (Hierarchical) — Multi Agent Orchestration'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 223
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:49:31-05:00'
sources: []
---

Imagine a busy kitchen where many chefs (agents) each prepare a part of a meal. The **Supervisor** is the head chef who watches over everyone, making sure each station gets its ingredients and finishes on time. If a sous‑chef falls behind or needs help, the supervisor steps in, gives new instructions, or reassigns tasks. The kitchen’s layout is *hierarchical*: the head chef sits at the top, then line cooks below, and finally prep staff at the bottom.

In AI, this is the **Supervisor Pattern** for multi‑agent orchestration. A “supervisor” agent controls a group of lower‑level agents, issuing commands, monitoring progress, and handling failures. If one sub‑agent crashes or misbehaves, the supervisor can restart it or replace it with another, just as a head chef would reassign a dish to keep the service running smoothly. This layered control keeps complex systems organized, reliable, and adaptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
