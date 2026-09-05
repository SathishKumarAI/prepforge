---
qid: ing_a83500217b__eli5__local
question: 'Explain: Every assertion in a Harvey answer needs to link back to a specific
  passage. Design the grounding system, and tell me how you would measure the unsupported-claim
  rate.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 209
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:04:43-05:00'
sources: []
---

Imagine your AI is a detective writing a report.  
Every claim it makes—“the suspect was at the café”—must be tied to a concrete clue in the case file (a passage from the text). The grounding system is like a “clue‑tracker” that, when the AI states something, automatically tags the exact sentence or paragraph that backs it up. If no tag can be found, the claim is flagged as “unverified.”  

To gauge how often this happens, we run a simple audit: for each claim in a batch of answers, we check whether a clue‑tracker tag exists. The ratio of untagged claims to total claims gives the *unsupported‑claim rate*. A low percentage means the detective (the AI) is reliably citing evidence; a high one signals it’s guessing too often. This keeps explanations honest and traceable, just like a good report should be.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
