---
qid: ing_a8d04e831f__think__local
question: Design barge-in for a voice agent. What breaks if you get it wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 468
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:12:00-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What is “barge‑in” here?* – The ability for a user to interrupt or override a spoken prompt (e.g., saying “stop” while the agent is speaking).  
- *Scope of the design:* UI/UX, speech recognition, intent detection, state management.  
- *Assume we’re building on a typical voice‑assistant stack (ASR → NLU → Dialogue Manager → TTS).*

**2️⃣ Adopt a layered mental model**  
1. **Signal capture** – acoustic event detection & wake word / stop token.  
2. **Processing pipeline** – ASR, intent classification, context tracking.  
3. **Control flow** – interrupt vs. queue logic, safety nets (e.g., “I’m still listening”).  

**3️⃣ Step‑by‑step reasoning**  
- Map user utterances that should trigger barge‑in (stop, cancel, next).  
- Define the minimal latency path: bypass TTS buffer → immediate ASR start.  
- Decide on a state machine: *Idle → Speaking → BargeInPending → ExecutingIntent*.  
- Ensure fallback when no intent matches (e.g., “I didn’t catch that”).  

**4️⃣ Common pitfalls to avoid**  
- **ASR lag:** not interrupting fast enough leads to user frustration.  
- **Mis‑classification of intents:** a normal question gets treated as cancel, causing loss of context.  
- **State bleed‑through:** previous intent still active after barge‑in, leading to incoherent replies.  

**5️⃣ Sanity‑check & communicate**  
- Run edge cases: “stop” during different prompts, overlapping commands, noisy environments.  
- Present the flow diagram to stakeholders and ask: *“What would happen if a user says ‘cancel’ while we’re playing an answer?”* – this forces validation of each branch.  

Follow this loop—clarify → model → reason → guard against traps → test & explain—to design a robust barge‑in feature that preserves conversational integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
