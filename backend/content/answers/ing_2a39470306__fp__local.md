---
qid: ing_2a39470306__fp__local
question: 'Explain: Hexagonal architecture the original 2005 article'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 447
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:34:43-05:00'
sources: []
---

**Why a Hexagon?**  
A software system must *solve* user problems while remaining **independent of external frameworks, databases, or UI tools**. If the core logic talks directly to these “outsiders”, every change in a framework forces a rewrite of the domain code—tight coupling and brittle tests. The hexagonal (or ports‑and‑adapters) architecture starts from this *coupling problem* and applies **dependency inversion**: all outward dependencies point *into* the core, not outwards.

**How it works**  
1. **Core** – pure business rules, no framework code.  
2. **Ports** – interfaces (or abstract classes) that describe services the core needs (e.g., `UserRepository`, `EmailSender`).  
3. **Adapters** – concrete implementations of those ports that sit outside the core (JPA, SMTP, REST).  

The core only knows about ports; adapters implement ports and are wired in at runtime (via DI or factories). Thus tests can inject *mock* ports, giving isolation and repeatability.

**Deep connection**  
This is a concrete instantiation of **“information hiding”** from information theory: the core’s behavior depends on *abstract inputs*, not concrete details. It also mirrors **geometric duality**—the hexagon gives a visual cue that the center (domain) is surrounded by interchangeable “sides”.

**Non‑obvious insight**  
The shape is arbitrary; the key is *multiple, symmetrical sides*. Each side can be an input or output port, allowing bidirectional communication. Therefore the architecture naturally supports both **inbound requests** (e.g., HTTP controllers) and **outbound events** (e.g., publishing to a message bus), unifying the flow of data without imposing a specific layering convention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
