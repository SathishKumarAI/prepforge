---
qid: ing_96b3cadc28__aws__local
question: 'Explain: The night-before cheat sheet — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 516
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:57-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
During my senior year, I led a group project to help incoming students prepare for their final exams. We noticed that many students spent hours scrolling through endless PDFs, only to find the most important concepts buried in dense text. The goal was to create a *night‑before cheat sheet*—a concise, searchable snapshot of key facts that could be accessed on any device just before the test.

**Action (Dive Deep + Bias for Action)**  
I scoped requirements: 1) pull data from the syllabus, lecture slides, and past exams; 2) auto‑generate flashcards with spaced repetition tags; 3) host it as a mobile‑first web app.  
Design choices:  
- **AWS Lambda** (stateless compute) to parse PDFs and run NLP for keyword extraction.  
- **Amazon DynamoDB** for low‑latency storage of card metadata.  
- **API Gateway + Cognito** for secure, authenticated access.  
- **React Native** front‑end cached locally with IndexedDB for offline use.  

I wrote unit tests (≥90 % coverage) and performed load testing; the system handled 10k concurrent users with <200 ms latency. The launch coincided with exam week: 1,200 students used it, and post‑survey showed a **15 % increase in self‑reported confidence** compared to peers who didn’t use the tool.

**Result (Deliver Results)**  
The cheat sheet reduced preparation time by an average of 2.5 hours per student and lowered stress scores on a 10‑point Likert scale from 7.8 to 4.9. The project was later adopted by the university’s academic support office as a permanent resource.

**Bar‑raiser takeaways**  
- **Ownership:** I owned end‑to‑end delivery, from data ingestion to UX polish.  
- **Dive Deep:** Leveraged AWS services to meet latency and cost targets while ensuring scalability for future cohorts.  
- **Quantified Impact & Learning:** The 15 % confidence lift proved the value of a focused, tech‑enabled study aid; I iterated on the UI based on A/B testing to further improve usability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
