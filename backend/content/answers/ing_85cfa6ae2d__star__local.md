---
qid: ing_85cfa6ae2d__star__local
question: The patient's chart already lists their medications. How would you use that
  to improve transcription of drug names, and how would you keep it from backfiring?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 330
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:40-05:00'
sources: []
---

**Situation:** While working on a clinical NLP pipeline for a hospital’s EHR system, I noticed that the transcription accuracy of drug names in physician dictations was dropping to around 78%, largely due to homophones and misspellings.

**Task:** My goal was to boost transcription precision to at least 92% without introducing new errors or over‑filtering legitimate variants that clinicians might use.

**Action:** I integrated the existing medication list from each patient’s chart as a context-aware dictionary. The pipeline first performed standard ASR on dictations, then ran a fuzzy-matching step against the patient-specific drug list using Levenshtein distance with a threshold of 0.8. If a match was found, the system auto‑replaced the transcription; otherwise it flagged the term for manual review. To avoid backfiring, I added a confidence score check—only low-confidence transcriptions were replaced—and logged every change for audit. Additionally, I implemented a feedback loop where pharmacists could correct mismatches, feeding those corrections back into the model to refine future predictions.

**Result:** Transcription accuracy rose from 78% to 94% across 12,000 dictations, and pharmacist review time dropped by 35%. The system also maintained flexibility for uncommon drug names, as flagged entries were never auto‑corrected. I learned that leveraging patient-specific context can dramatically improve NLP accuracy, but only when coupled with safeguards like confidence thresholds and audit trails to preserve trust and safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
