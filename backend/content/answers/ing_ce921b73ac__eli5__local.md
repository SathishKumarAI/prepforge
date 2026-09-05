---
qid: ing_ce921b73ac__eli5__local
question: 'Explain: Failure Modes and Graceful Degradation — How to Prepare for System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 203
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:02:27-05:00'
sources: []
---

Imagine you’re building a smart home assistant that can answer questions, play music, and control lights. **Failure modes** are the ways this assistant could go wrong—like the microphone stops picking up sound, the internet drops, or the voice‑recognition model mishears “lights” as “lites.” In an interview you’ll be asked to list these possibilities so you can plan for them.

**Graceful degradation** is designing the system so that when one part fails, the assistant still does something useful. If the microphone fails, it could fall back to a touchscreen interface; if the internet goes down, it might answer from a local cache of FAQs instead of trying to reach the cloud. By anticipating each failure mode and showing how the system “shrinks” its capabilities rather than crashing, you demonstrate robust design thinking that interviewers love.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
