---
qid: vq_d0bd447781__aws__local
question: Have you ever celebrated a holiday in another country?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 422
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:15:27-05:00'
sources: []
---

**Situation & Task (S)**  
During my senior year I was selected to lead the university’s *Global Exchange Program* for the spring semester in Japan. My goal was to ensure every participant felt culturally immersed while staying on budget and within a 10‑day window.

**Action (A)**  
I took full ownership:  
- **Customer Obsession:** Conducted surveys with 30 students to surface pain points—transportation, lodging, and local dining.  
- **Dive Deep & Invent & Simplify:** Built an internal “Travel Concierge” micro‑service on AWS Lambda + DynamoDB that aggregated public transit APIs (Google Maps) and local restaurant data (Yelp). The service suggested optimal routes, budget meals, and cultural events in real time.  
- **Bias for Action:** Deployed the service via API Gateway, integrated with a Slack bot so students could ask questions instantly. I set up CloudWatch alerts to catch any latency spikes.

**Result (R)**  
The program had 25 participants; 96% reported “extremely satisfied” in post‑trip surveys—up from 72% last year. Total spend dropped 18 % due to smarter routing, and we logged only 0.2 ms average API latency across all requests.  

**Learning & Bar‑raiser signals**  
I learned that *Ownership* means building end‑to‑end solutions, not just fixing symptoms. The AWS architecture taught me how to balance cost (serverless) with reliability (auto‑scaling). This experience demonstrates my ability to own a project, dive deep into data, and deliver measurable customer impact—exactly what Amazon looks for in a high‑bar candidate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
