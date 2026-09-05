---
qid: ing_32beba1157__eli5__local
question: 'Explain: Some limitations of orchestration: — Orchestration vs. Choreography
  in Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 272
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:56:19-05:00'
sources: []
---

Think of a kitchen where many chefs (micro‑services) prepare dishes together.  

**Orchestration** is like a head chef who sits at the center, shouting “Chef A, bring the sauce now!” and “Chef B, set the table.” The head chef knows every step, coordinates timing, and can change the plan on the fly.  
**Choreography** is like each chef following a shared recipe card: when the sauce finishes, the next chef automatically starts their part without anyone telling them to. They react only to local signals, not to a central boss.

**Limitations of orchestration**

1. **Single point of control** – if the head chef falls asleep or loses the phone, all cooking stops.  
2. **Scalability limits** – one boss can’t efficiently manage hundreds of chefs; the coordination overhead grows fast.  
3. **Rigidity** – changing a step requires updating the central script, which may disrupt other chefs already working.

Choreography avoids those bottlenecks by letting services act autonomously, but it can make global coordination and error handling trickier. The choice is a trade‑off between tight control and loose coupling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
