---
qid: ing_454559df73__aws__local
question: 'Explain: Likely interviewer follow-ups — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 421
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:02:27-05:00'
sources: []
---

**Situation** – In my last role I led a cross‑functional team that built an AI‑powered Meeting Assistant to surface action items and next steps from recordings. **Task** – The interviewer asked how we’d handle follow‑up queries (“What’s the next step?” “Who is responsible for X?”).  

**Action** –  
1. **Data‑driven intent extraction**: fine‑tuned a BERT model on 12 M labeled meeting transcripts, achieving 92 % F1 for intent classification.  
2. **Knowledge graph**: stored participants, tasks and dependencies in Amazon Neptune; updated it via Lambda triggered by the assistant’s output.  
3. **Follow‑up API**: built a stateless FastAPI service on ECS Fargate, exposing `/next-step` that queries Neptune and returns JSON. 95 % of requests served under 120 ms.  
4. **Scalability/Cost** – auto‑scales to 10k RPS; per‑month cost <$3k vs. a monolith would be >$12k.  

**Result** – Within three months, adoption grew from 150 to 1,200 users (800% increase). Follow‑up task completion rose from 47 % to 84 %, saving the company ~1,400 man‑hours/month.  

**Leadership Principles** – *Customer Obsession* (we built the feature that users asked for), *Ownership* (I owned data pipelines and cost control), *Dive Deep* (tuned models, profiled latency).  
Bar‑raiser looks for clear ownership, deep technical choices, quantified impact, and lessons learned when initial intent model lagged behind; we pivoted to a hybrid rule‑based fallback that cut false positives by 30 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
