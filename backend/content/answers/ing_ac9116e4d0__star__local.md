---
qid: ing_ac9116e4d0__star__local
question: 'Explain: Interview Follow-Up Questions — Voice Ai Healthcare'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 352
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:31-05:00'
sources: []
---

**Situation:**  
While working at a mid‑size health tech startup, we were tasked with launching a pilot for an IVR (interactive voice response) system to triage patient inquiries about medication refills and appointment scheduling in a busy outpatient clinic.

**Task:**  
I needed to design a conversational AI that could understand medical terminology, handle 24/7 calls, maintain HIPAA compliance, and integrate with the existing EHR without causing downtime.

**Action:**  
First, I chose Google Dialogflow CX for its intent‑matching accuracy and built custom entities for drug names, dosages, and appointment slots. I then integrated it with a secure REST API that pulled patient data from the EHR using FHIR resources, ensuring token‑based authentication to meet HIPAA standards. To handle edge cases, I implemented fallback intents that routed calls to human agents via Twilio Programmable Voice when confidence fell below 70%. Finally, I set up analytics dashboards in Grafana to monitor call duration, success rates, and error logs, iterating on the model with monthly retraining cycles.

**Result:**  
The pilot saw a 35 % reduction in average call handling time (from 4.8 min to 3.1 min) and a 22 % decrease in missed medication refill requests over three months. The system also achieved an 88 % accuracy rate on intent recognition, surpassing our SLA of 80 %. I learned that balancing automation with human fallback is key in healthcare voice AI, and that continuous monitoring drives meaningful improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
