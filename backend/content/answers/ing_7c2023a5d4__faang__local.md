---
qid: ing_7c2023a5d4__faang__local
question: 'A generated note contains a medication the patient never mentioned. Treat
  that as a safety incident: how do you detect it before a clinician sees it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 390
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:32:46-05:00'
sources: []
---

**Clarify**  
The task is to flag any medication mention in an AI‑generated clinical note that the patient never stated. We assume: * (1) we have a list of medications the patient has reported, (2) the note is generated as plain text, and (3) we can run automated NLP before clinician review.

**Approach**  
1. Build a medication dictionary from the patient’s self‑reported list (include brand/Generic synonyms).  
2. Run an entity recognizer on the note to extract all drug mentions.  
3. Compare extracted entities against the dictionary; any mismatch is flagged as a potential safety incident.  
4. Optionally, cross‑check with EHR medication orders for additional context.

**Depth**  
- Use a rule‑based NER (e.g., spaCy’s *med7*) or a transformer fine‑tuned on clinical drug extraction for >95 % recall.  
- Perform fuzzy matching to capture misspellings; threshold tuned via validation set.  
- Complexity: O(n) over note length; memory negligible.

**Edge Cases**  
- Drugs mentioned in “history of” or “previously used” should not trigger unless currently prescribed.  
- Ambiguous drug names (e.g., “aspirin” vs. “aspirate”) – disambiguate with context window.  
- Multi‑word brand names may be split; ensure tokenizer preserves them.

**Optimize & Communicate**  
After initial detection, surface the flagged text to clinicians in a review panel and log the incident for audit. We can improve precision by integrating pharmacist‑reviewed drug ontologies (RxNorm) and iteratively retraining on false positives. This pipeline ensures safety incidents are caught before clinician exposure, aligning with regulatory compliance and patient trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
