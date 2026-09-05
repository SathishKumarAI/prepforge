---
qid: ing_74351bde1b__eli5__local
question: 'Explain: The note should be ready before the clinician leaves the room.
  Build me the latency budget, and tell me where the money goes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 275
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:40:51-05:00'
sources: []
---

Imagine a kitchen where a chef (the clinician) has just finished cooking a dish (a patient encounter). The waiter must bring the menu, take orders, and deliver the final bill before the chef leaves the table. In AI‑powered note writing, that “delivery” is the electronic medical record entry, and it must arrive within a few seconds—otherwise the kitchen feels chaotic.

**Latency budget** = the time we have to finish each step:  
1. **Capture (0–2 s)** – the system records what the clinician says.  
2. **Transcribe (3–5 s)** – speech turns into text.  
3. **Summarize (6–10 s)** – AI condenses the dialogue into a concise note.  
4. **Validate & edit (11–15 s)** – the clinician quickly checks for accuracy.

The “money” in this budget is computational power: cloud CPUs/GPUs process the audio, large language models generate the summary, and network bandwidth moves data between devices. By allocating enough resources to each stage, we keep the whole workflow under 15 seconds, so the note is ready before the clinician steps out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
