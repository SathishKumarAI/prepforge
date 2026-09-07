---
qid: ing_ef7e79c54e__aws__local
question: 'Explain: Dimension 2: Groundedness (Faithfulness)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 384
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:18:44-05:00'
sources: []
---

**Situation & Task**  
While leading the NLP team at a fintech startup, we built an AI‑driven financial advisory chatbot that had to provide *faithful* (grounded) responses to user queries about investment strategies. A single hallucinated recommendation could lead to regulatory fines and loss of trust.

**Action**  
I introduced a *Groundedness* framework: every model output is paired with evidence retrieved from our internal knowledge base. We built an end‑to‑end pipeline using **Amazon SageMaker** for training, **Amazon Kendra** as the retrieval engine, and **AWS Lambda** to orchestrate inference and citation formatting. To enforce faithfulness we added a *retrieval‑augmented generation* layer that conditions the LLM on top‑k retrieved passages and penalizes hallucinations via reinforcement learning with a custom reward function.

I also set up automated unit tests that compare generated responses against ground truth citations, achieving **95 % alignment** on a held‑out validation set. Production metrics show a **40 % drop in user complaints** and a **$2 M annual savings** from avoided compliance penalties.

**Result**  
The system delivered results that customers could verify, reinforcing trust (Customer Obsession) while ensuring we owned the entire data pipeline (Ownership). The quantitative impact—reducing hallucinations by 85 %—demonstrated deep dive into model internals and a bias for action. I learned that coupling retrieval with generation is more scalable than fine‑tuning alone, a lesson shared in our quarterly tech talks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
