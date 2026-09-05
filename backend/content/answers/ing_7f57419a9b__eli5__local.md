---
qid: ing_7f57419a9b__eli5__local
question: 'Explain: Redundancy Across Layers — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 220
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:58:38-05:00'
sources: []
---

**Redundancy Across Layers – Making an AI system “always on”**

Think of a safety‑netted high‑wire act. The performer (your AI model) is the main wire; if it snaps, the net catches them. In a computer system you build several nets—each at a different layer—to catch failures before they reach the performer.

1. **Hardware net** – duplicate servers or storage drives. If one dies, another takes its place.
2. **Software net** – multiple copies of the AI model running in parallel. If one crashes, another keeps working.
3. **Service net** – load‑balancers and monitoring that redirect traffic away from a failed component.

Each “net” is called *redundancy*. It’s a deliberate copy or backup, not a chance event. By layering these nets, the system stays available even when something fails, just like a performer who never falls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
