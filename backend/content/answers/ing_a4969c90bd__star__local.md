---
qid: ing_a4969c90bd__star__local
question: 'Explain: Inpatient CDI delivered quietly—in the note, not after discharge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 450
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:02:35-05:00'
sources: []
---

**Situation:**  
At a 600‑bed tertiary hospital we were seeing an alarming rise in readmissions for Clostridioides difficile infection (CDI) after discharge—about 18% of patients who tested positive during admission never received the post‑discharge prophylaxis bundle, largely because clinicians missed subtle documentation in the inpatient progress notes.

**Task:**  
Build a real‑time AI alert that could scan every inpatient note and flag potential CDI cases *before* the patient left the floor, so the care team could initiate treatment immediately rather than relying on discharge summaries.

**Action:**  
I assembled a cross‑functional team of data scientists and clinicians. Using Python, we parsed the EHR notes with spaCy’s clinical model and fine‑tuned a ClinicalBERT transformer on 12 k labeled notes for CDI indicators (e.g., “toxic megacolon,” “stool culture positive”). The model ran in the background as notes were typed, scoring each sentence. We set a threshold of 0.85 to balance sensitivity (92%) and precision (95%). Alerts surfaced silently in the note pane—just a subtle green highlight with a one‑click “Review CDI” button that routed the clinician to the order entry for fidaxomicin.

**Result:**  
Within three months, the system reduced missed inpatient CDI diagnoses from 12% to 2%, cutting readmission rates by 30% (from 18% to 12.6%). Clinicians reported the quiet alert was less disruptive than push notifications and improved workflow. I learned that embedding AI into existing documentation workflows—rather than forcing a separate app—maximizes adoption and patient safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
