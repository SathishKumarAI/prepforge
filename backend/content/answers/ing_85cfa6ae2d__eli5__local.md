---
qid: ing_85cfa6ae2d__eli5__local
question: The patient's chart already lists their medications. How would you use that
  to improve transcription of drug names, and how would you keep it from backfiring?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 207
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:08:41-05:00'
sources: []
---

Think of the chart as a “personal dictionary” for the doctor’s voice‑to‑text app.  
When the clinician says, “Give him **Amoxicillin**,” the app first checks the patient’s medication list—just like a spellchecker that knows only words in its own book. If *amoxicillin* is on the list, it can confidently write that exact spelling; if the voice is fuzzy (“amox‑…”) the system still knows which drug to pick.

But if the app blindly trusts the list, it might miss new prescriptions or copy a mistake from an old entry. To prevent this, let the system flag any drug name that isn’t in the current “active” medication set and ask the clinician to confirm—like a safety net that says, “Is this still prescribed?” This keeps transcription accurate without letting stale data mislead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
