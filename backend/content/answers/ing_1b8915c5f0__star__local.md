---
qid: ing_1b8915c5f0__star__local
question: 'Explain: More than a judge — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 381
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:25-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a conversational AI for customer support that had to handle 15,000 tickets per day. Early user trials showed an average resolution time of 4 minutes, far above the target of 2 minutes.

**Task:**  
I was tasked with creating a rigorous testing framework that would not only evaluate correctness (the “judge” part) but also measure robustness, safety, and user satisfaction across diverse scenarios.

**Action:**  
1. Built an automated test harness using Python and Docker to spin up isolated agent instances for every update.  
2. Designed a multi‑layered evaluation pipeline:  
   * **Unit tests** for intent parsing with `pytest`.  
   * **Scenario replay** against a curated set of 3,000 real ticket transcripts stored in MongoDB.  
   * **Adversarial testing** by injecting out‑of‑domain prompts and measuring hallucination rates via a custom LLM safety scorer.  
   * **Human‑in‑the‑loop review** on a rotating sample to rate empathy and tone using a 5‑point Likert scale, aggregated in an ElasticSearch dashboard.  
3. Implemented continuous monitoring with Grafana; any drift over 0.2 s in response time triggered alerts.

**Result:**  
After six weeks of iterative testing, average resolution time dropped to 1.8 minutes (a 55% improvement). Hallucination incidents fell from 7% to <1%. The dashboard became a key KPI for the product team, and I documented the framework so it could be reused for future AI agents. I learned that treating evaluation as an ongoing, multi‑dimensional process is essential for delivering safe, high‑performance AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
