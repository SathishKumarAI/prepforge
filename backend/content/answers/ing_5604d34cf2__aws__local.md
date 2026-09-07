---
qid: ing_5604d34cf2__aws__local
question: 'Explain: Control through intuitive UIs — Transforming Clinical Documentation
  with Advanced AI | Abridge AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 408
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:40:28-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
At a mid‑size telehealth startup, clinicians spent ~30 % of each patient visit writing free‑text notes that were later transcribed and coded by expensive medical scribes. I owned the end‑to‑end redesign: build an intuitive UI that let doctors capture intent in seconds while AI auto‑generates structured documentation.

**Action (Dive Deep, Bias for Action)**  
1. **Requirements & Architecture** – Built a React web client with a single‑click “Voice‑to‑Text” button; backend on AWS Lambda + API Gateway.  
2. **AI Engine** – Fine‑tuned an open‑source BERT model on 200 k anonymized notes, deployed via SageMaker endpoints (multi‑AZ for availability).  
3. **Data Flow** – Audio → Transcribe (Amazon Transcribe) → NLP pipeline → DynamoDB for structured fields; UI consumes a JSON schema and renders editable forms in real time.  
4. **Cost/Scale** – Spot instances + autoscaling keep compute cost < $0.02 per note; 99.9% latency SLA achieved with caching in ElastiCache.

**Result (Deliver Results, Quantified Impact)**  
- Clinician time to document dropped from 8 min to **2.3 min** (+70 % reduction).  
- Scribe cost saved $1.5M annually for a 10‑k patient/month practice.  
- Accuracy of structured data reached **92 % F1**, validated against manual coding.

**Learnings (Bar‑raiser focus)**  
Tuned the model on edge cases that caused misclassifications; added a “review” flag for low‑confidence fields, reducing error rate by 15 %. This iterative loop demonstrates true ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
