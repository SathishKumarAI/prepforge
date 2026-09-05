---
qid: ing_3c6541fdbc__star__local
question: Walk me through writing a finished note back into Epic. What goes wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 360
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:29:04-05:00'
sources: []
---

**Situation** – In my last role as an EHR integration developer, we were tasked with automating the transfer of AI‑generated discharge summaries from our clinical decision support system back into Epic. The pilot was slated for a single medical unit and had to meet HIPAA and Epic’s FHIR interface guidelines.

**Task** – I needed to design a secure, reliable pipeline that would take the AI output (structured JSON), map it to Epic’s Clinical Document Architecture (CDA) format, push it via the Integrator Engine, and trigger a “note complete” status flag in the patient chart—all within 30 minutes of admission.

**Action** – I first mapped the AI fields to CDA elements using an open‑source mapping library. Then I built a microservice in Python that wrapped the data, added required HL7 v2 segments (MSH, PID, ORC), and signed the payload with our RSA key for Epic’s “Signed Message” endpoint. To handle failures, I implemented idempotent retries with exponential backoff and logged each attempt to an S3 bucket for audit. Finally, I wrote unit tests against Epic’s sandbox and ran a smoke test on a de‑identified patient record.

**Result** – The pilot processed 95 % of notes in <25 minutes, reduced manual entry time by 70 %, and the unit reported no data integrity errors. I learned that early collaboration with Epic’s integration team and rigorous mapping validation are critical to avoid subtle CDA mismatches that can silently corrupt clinical data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
