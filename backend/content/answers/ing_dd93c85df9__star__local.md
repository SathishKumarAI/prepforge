---
qid: ing_dd93c85df9__star__local
question: An enterprise customer wants to deploy your RAG system but has no labelled
  data. How do you evaluate it before and after launch?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 417
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:23-05:00'
sources: []
---

**Situation**  
When a large financial services client approached us, they wanted to roll out our Retrieval-Augmented Generation (RAG) chatbot across their support portal but had no pre‑labelled query–answer pairs or usage logs from the new domain.

**Task**  
I needed to devise a plan to evaluate the system’s effectiveness before launch and then monitor its performance post‑deployment, all without relying on historic labels.

**Action**  
Before go‑live I set up a synthetic test harness: we generated a seed set of 5,000 realistic support tickets using their internal FAQ schema, ran them through our RAG pipeline, and had domain experts rate relevance on a 1–5 Likert scale. We also injected controlled noise into the retrieval index to stress‑test precision‑recall trade‑offs. For post‑launch monitoring, I implemented a dual‑pipeline: (1) an automated “confidence score” heuristic that flags low‑certainty responses for human review, and (2) an A/B experiment where 10% of users were routed through the RAG system while 90% used legacy static answers; we compared click‑through rates, time‑to‑resolution, and user satisfaction surveys. We also logged retrieval latency and index hit ratios to catch drift.

**Result**  
Pre‑launch synthetic evaluation revealed a top‑3 recall of 78%, prompting a fine‑tuning round that pushed it to 86% before deployment. After launch, the RAG system cut average resolution time by 32% (from 12 min to 8 min) and improved user satisfaction scores from 4.1 to 4.5 out of 5. The dual monitoring pipeline caught a 0.7% rise in low‑confidence responses within two weeks, allowing us to retrain the retrieval model promptly. I learned that combining synthetic validation with lightweight post‑launch A/B tests provides robust confidence even when labelled data is absent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
