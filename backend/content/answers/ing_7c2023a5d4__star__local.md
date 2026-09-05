---
qid: ing_7c2023a5d4__star__local
question: 'A generated note contains a medication the patient never mentioned. Treat
  that as a safety incident: how do you detect it before a clinician sees it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 357
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:42:10-05:00'
sources: []
---

**Situation:**  
During a pilot rollout of our clinical notes AI, I noticed that one generated note incorrectly included “metformin” for a patient who had never been prescribed any oral hypoglycemics. The error slipped through because the model was only trained on de‑identified chart text and didn’t have real‑time cross‑check with pharmacy records.

**Task:**  
I needed to build an automated safety guard that would flag any medication mentioned in a generated note that wasn’t present in the patient’s current medication list before it reached a clinician, without adding noticeable latency or false positives that could erode trust.

**Action:**  
1. I extracted the structured medication table from the EHR (using FHIR MedicationStatement resources) and cached it per encounter in Redis with TTL 30 s.  
2. I parsed each generated note using spaCy’s custom NER model tuned on drug vocabularies, normalizing to RxNorm CUIs.  
3. For every extracted CUI, I performed a set‑difference against the patient’s medication list; any mismatch triggered an alert flag in the UI and logged to our incident dashboard.  
4. I added a lightweight rule‑based post‑filter that allowed “discontinued” or “hold” flags to bypass the safety check if the pharmacy record explicitly marked them inactive.

**Result:**  
The system caught 12 out of 15 false medication mentions before clinician review, reducing potential adverse events by 80 %. The latency added was <200 ms per note, keeping workflow seamless. I learned that coupling structured EHR data with real‑time NLP inference is essential for safe AI in clinical settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
