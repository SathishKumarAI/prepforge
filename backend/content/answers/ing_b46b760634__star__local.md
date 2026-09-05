---
qid: ing_b46b760634__star__local
question: 'Explain: Key Takeaways for Interviews — Voice Ai Healthcare'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 311
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:32:28-05:00'
sources: []
---

**Situation:**  
During my senior thesis I worked on a prototype for a voice‑activated triage assistant to be used in rural clinics in Kenya. The clinic’s nurses were overwhelmed, and patient wait times averaged 45 minutes.

**Task:**  
I had to design an AI that could reliably interpret patients’ spoken symptoms, prioritize urgency, and provide concise guidance—all while running on low‑power devices with intermittent internet connectivity.

**Action:**  
First, I built a custom acoustic model using Mozilla DeepSpeech fine‑tuned on Kenyan English accents. To handle offline operation, I implemented edge inference via TensorFlow Lite and compressed the model to 30 MB. For symptom extraction, I combined spaCy’s NER with a rule‑based fallback that matched key phrases to an ICD‑10 mapping database. I added confidence thresholds; if speech wasn’t clear enough, the system politely asked for clarification instead of guessing. Finally, I integrated a lightweight SQLite queue so nurses could review flagged cases later.

**Result:**  
After pilot testing in two clinics, average triage time dropped from 45 minutes to 12 minutes—an 73% reduction—and nurse satisfaction scores rose by 18 points on a 5‑point Likert scale. I learned that voice AI success hinges on robust local inference, context‑aware fallback logic, and close alignment with the clinicians’ workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
