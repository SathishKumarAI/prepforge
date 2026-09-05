---
qid: ing_1d537f3ab4__eli5__local
question: Clinicians will not sign what they cannot verify. How would you build span-level
  provenance from every line of the note back to the conversation?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 300
total_tokens: 475
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:22:45-05:00'
sources: []
---

Think of a patient’s chart as a recipe book and each sentence in the note as an ingredient list.  
When a clinician wants to “taste” (verify) that ingredient, they need to know exactly where it came from—whether it was spoken by the patient, observed by a nurse, or pulled from a lab report.

To build span‑level provenance, we treat every line of the note like a labeled bookmark that points back to its source conversation.  
1. **Capture the chat**: As the clinician speaks with the patient, we record the dialogue in real time and tag each spoken phrase with a unique ID (e.g., “msg‑001”).  
2. **Link the notes**: When the clinician writes a line (“Patient reports chest pain”), that line is stored together with the ID of the message it came from (“msg‑001”).  
3. **Create a map**: The note becomes a table where each row (a sentence) has two columns—its text and the source ID.  
4. **Trace back**: If a reviewer wants to verify “chest pain,” they click the bookmark, see the exact utterance in the conversation, and confirm it.

Because every line is directly tied to a specific spoken phrase, clinicians can confidently sign off on notes that trace cleanly back to verified patient input.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
