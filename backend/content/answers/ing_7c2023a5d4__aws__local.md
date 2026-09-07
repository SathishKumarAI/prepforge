---
qid: ing_7c2023a5d4__aws__local
question: 'A generated note contains a medication the patient never mentioned. Treat
  that as a safety incident: how do you detect it before a clinician sees it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 395
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:00-05:00'
sources: []
---

**Situation & Task (S)**  
While building a clinical note‑generation model for our AI assistant, I noticed that the LLM occasionally inserted medication names that patients had never mentioned. A clinician seeing such an entry could prescribe incorrectly—an unacceptable safety risk.

**Action (A)**  
I treated it as a *safety incident* and built an automated detection pipeline:

1. **Extract all medication tokens** from the generated note using spaCy + our custom medical dictionary.  
2. **Cross‑check against patient’s historical EMR** (RxNorm codes) stored in a DynamoDB table (`PatientMedications`).  
3. If a token is *not* present, flag it and publish a message to an SNS topic that triggers a Lambda for manual review.

The pipeline runs as part of the note‑postprocessing step, so clinicians never see the raw output until it passes the safety gate.

**Result (R)**  
- **Latency:** <200 ms per note, keeping turnaround time under 1 s.  
- **Accuracy:** 99.8 % true‑positive detection; zero false negatives in a 3‑month pilot covering 12k notes.  
- **Cost:** <$0.01 per note (DynamoDB reads + Lambda).  

**Leadership Principles**  
*Customer Obsession* – protecting patient safety above all. *Ownership* – I owned the entire flow, from data ingestion to alerting.

**Bar‑raiser cues**  
I documented trade‑offs: we accept a small false‑positive rate to guarantee zero missed errors, and I iterated on the dictionary after the first month of feedback. This shows deep dive into metrics and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
