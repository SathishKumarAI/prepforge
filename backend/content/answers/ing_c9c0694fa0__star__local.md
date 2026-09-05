---
qid: ing_c9c0694fa0__star__local
question: 'Explain: Where agent evals are going: Agent-as-a-Judge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 325
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:12:38-05:00'
sources: []
---

**Situation:**  
During the launch of our new conversational AI platform, we noticed that user satisfaction scores dropped by 12% after deploying the latest policy‑driven fine‑tuning cycle. The dev team suspected that our human‑labeling pipeline was becoming a bottleneck and introducing bias.

**Task:**  
I had to redesign the evaluation workflow so that autonomous agents could serve as judges, reducing reliance on costly manual reviews while preserving accuracy and fairness.

**Action:**  
First, I built a lightweight “Judge” agent trained on a curated set of annotated dialogs. Using OpenAI’s LLM with prompt‑engineering, it scored responses on relevance, safety, and style. Then I introduced a multi‑stage cascade: the Judge agent pre‑filters out low‑confidence outputs; only those below a 0.8 threshold are routed to human reviewers. We integrated this into our CI pipeline via Dockerized inference containers, logging confidence scores in a PostgreSQL DB for auditability. Finally, we ran A/B tests comparing the new system against the legacy workflow.

**Result:**  
The judge‑driven pipeline cut manual review time by 70%, from 1.2 hrs per batch to 0.36 hrs, and improved overall satisfaction scores back up to +5% above baseline. I learned that combining LLM inference with confidence‑based routing can scale evaluations without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
