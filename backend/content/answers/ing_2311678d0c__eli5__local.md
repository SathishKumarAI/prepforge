---
qid: ing_2311678d0c__eli5__local
question: 'Explain: Problem — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 218
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:31:53-05:00'
sources: []
---

**Pattern: Server‑side Service Discovery**

Think of a big office building that has many conference rooms (the “services”). Each room is a different meeting place, but you don’t know where the next one will be until you ask someone in the lobby. In server‑side service discovery, the “lobby” is a *registry* (a database or directory) that keeps a list of all available services and their current addresses. Whenever a machine‑learning component needs to talk to another component—say a data‑storage API or an inference engine—it first asks the registry for the latest location. The registry replies, and the component connects directly.

The pattern is useful because servers can move or scale without breaking connections; they just update the registry, and all clients keep finding them automatically. It’s like having a directory that always points you to the right room no matter who opens it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
