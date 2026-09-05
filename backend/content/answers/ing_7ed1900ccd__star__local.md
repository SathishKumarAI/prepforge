---
qid: ing_7ed1900ccd__star__local
question: 'Explain: Contains Keywords — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 360
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:47:15-05:00'
sources: []
---

**Situation** – In the fall of 2024 I led a cross‑functional team at a fintech startup that was rolling out an AI‑powered customer support chatbot. Early user tests showed that the bot’s responses were often generic and missed key compliance terms, which risked regulatory breaches.

**Task** – My goal was to build a robust evaluation pipeline that could automatically flag missing or incorrectly used domain‑specific keywords in LLM outputs, ensuring every answer met our compliance checklist before it hit production.

**Action** – I started by defining a “keyword set” of 120 high‑risk terms (e.g., *KYC*, *AML*, *custody*). Using Python and the spaCy NLP library, I built a lightweight extractor that scored each response on keyword presence and contextual relevance. To capture nuance, I integrated a BERT‑based semantic similarity model to catch paraphrases. I then set up an automated CI/CD step: every time the LLM was fine‑tuned, the new checkpoint ran through this pipeline; any score below 0.85 triggered a human review. I also created a dashboard in Grafana that visualized keyword coverage over time.

**Result** – Within two weeks of deployment, our compliance pass rate jumped from 68 % to 95 %. The bot’s average response latency only increased by 120 ms, keeping user experience intact. This exercise taught me the importance of marrying lightweight rule‑based checks with semantic models for practical LLM validation, and it became a standard part of our AI ops toolkit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
