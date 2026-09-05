---
qid: ing_fdfe565088__star__local
question: 'Explain: Putting our own AI to work — ElevenLabs \u2014 ElevenLabs Agents
  and the Candidate Experience'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 328
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:45-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with revamping our hiring portal after we saw a 35 % drop in applicant engagement and a 4‑day average response time from recruiters.

**Task:**  
I needed to create an AI‑driven assistant that could answer candidate questions, schedule interviews automatically, and collect real‑time sentiment data—all while staying compliant with GDPR.

**Action:**  
I leveraged ElevenLabs Agents. First, I built a custom voice model using their Speech Synthesis API, training it on our brand tone and key FAQs. Then I integrated the Agent into our ATS via REST calls; the Agent listened to candidate voice input, parsed intents with NLP, and routed them to the right micro‑service (calendar booking, document upload, or FAQ). For sentiment analysis I used ElevenLabs’ Speech-to-Text followed by a lightweight transformer model hosted on AWS Lambda. Finally, I set up an analytics dashboard in Grafana that visualised response times, sentiment scores, and candidate drop‑off rates.

**Result:**  
Within two weeks of launch the portal’s engagement rose from 48 % to 82 %, interview scheduling time dropped by 70 % (from 4 days to 1.2 days), and we logged a 15 % increase in offer acceptance rate. I learned that combining ElevenLabs’ high‑fidelity voice synthesis with lightweight on‑prem analytics can dramatically improve candidate experience while keeping infrastructure lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
