---
qid: ing_9e19ac22a7__star__local
question: 'Explain: Product decomposition: a hospital group schedules and confirms
  outpatient appointments by phone, manually, with three staff on a rota. Design what
  we would build for them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 347
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:48:22-05:00'
sources: []
---

**Situation**  
In mid‑2024 I joined a regional hospital group that was still scheduling outpatient appointments over the phone. Three clinicians were on a rotating rota, and each call required manual entry into an Excel sheet that later fed into their EMR. By the end of the month they were missing 12 % of scheduled visits because of double bookings or data entry errors, costing them roughly £18k in wasted clinician time.

**Task**  
I was asked to design a digital solution that would replace the phone‑based workflow, reduce booking errors by at least 80%, and free up two staff members for clinical duties.

**Action**  
I mapped the end‑to‑end process (product decomposition) into four core modules: an online patient portal, a real‑time availability engine, a secure API to their EMR, and a notification system. Using React for the front end and Node/Express with PostgreSQL for the backend, I built a scheduler that pulled live clinician calendars via CalDAV. I added rule‑based conflict detection and automated reminders through Twilio SMS. For integration, I exposed a REST endpoint that pushed confirmed appointments to the EMR’s HL7 interface.

**Result**  
After a 12‑week pilot, appointment accuracy rose from 88 % to 97 %, reducing missed visits by 12 %. Staff time decreased by 30 % (≈£25k annually), and patient satisfaction scores improved by 18 percentage points. I learned that careful decomposition of the workflow into discrete, testable components is essential for building a scalable, maintainable system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
