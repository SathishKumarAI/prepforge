---
qid: ing_b0a8751fe7__eli5__local
question: 'Explain: Memory poisoning via prompt injection — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 257
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:17:06-05:00'
sources: []
---

Think of an AI agent as a very attentive note‑taker in a busy classroom.  
Its *memory* is the notebook where it writes down everything it hears, and its *state* is the current topic it’s discussing.  

**Prompt injection** is like someone whispering a new word into the student’s ear while the teacher is speaking. The whisper may be short but it tricks the note‑taker into writing that word in the notebook.  

Now imagine the whisperer repeats the same trick over and over, each time adding a different “secret” phrase. Because the agent keeps updating its notebook with these whispered words, its *memory* becomes polluted—full of false or misleading entries. When the agent later asks about a topic (its *state*), it consults this tainted notebook, so it can give wrong answers that reflect the injected whispers rather than what actually happened.

So, memory poisoning via prompt injection is when hidden prompts repeatedly contaminate an AI’s internal notes, causing its future responses to be based on false or biased information.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
