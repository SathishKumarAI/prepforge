---
qid: ing_fb581e2a40__faang__local
question: 'Explain: Evaluation plan — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 415
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:24:39-05:00'
sources: []
---

**Clarify**  
We’re designing an evaluation plan for a *Meeting‑Assistant* AI that schedules, agendas, minutes, and follow‑ups. Key assumptions:  
1) The assistant runs on a cloud platform with real‑time calendar access.  
2) Success is measured by user satisfaction, accuracy of actions (e.g., correct time zones), and business metrics (meeting turnaround).  
3) We have a test cohort of 200 employees across two orgs.

**Approach**  
1. **Define metrics**: Precision/recall for scheduling tasks; NPS & CSAT for UX; latency (<500 ms); error‑rate per task type.  
2. **Create a benchmark dataset**: Curate 5k real meeting logs (transcripts, agendas).  
3. **A/B test**: Control group uses legacy manual booking; treatment uses the assistant.  
4. **Iterative feedback loop**: After each sprint, collect qualitative insights via interviews.

**Depth**  
- *Precision/Recall*: For agenda extraction use a fine‑tuned BERT model; compute F1 on held‑out set.  
- *Latency*: Instrument API endpoints with Prometheus; target <200 ms average for scheduling calls.  
- *Business impact*: Measure reduction in meeting prep time (minutes saved) and increase in completed action items.

**Edge Cases**  
- Time‑zone mismatches, overlapping meetings, or ambiguous attendee names. Test by injecting synthetic conflicts.  
- Privacy: ensure no sensitive data leaks; run GDPR compliance audit.

**Optimize & Communicate**  
After initial results, fine‑tune the NER model on misclassified entities and introduce caching for recurring agendas to lower latency. Present findings in a 10‑slide deck: problem → metrics → baseline → A/B results → next steps. This demonstrates structured thinking, clear communication, and depth expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
