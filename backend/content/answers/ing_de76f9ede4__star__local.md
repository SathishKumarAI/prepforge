---
qid: ing_de76f9ede4__star__local
question: 'Q: How do you evaluate a RAG system when you do not have ground-truth answers?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 366
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:53:36-05:00'
sources: []
---

**Situation** – At my previous company we built a RAG chatbot for internal policy lookup. The knowledge base had over 50 k documents, but there were no labeled Q&A pairs because the domain was proprietary and privacy‑sensitive.  

**Task** – I needed to quantify how well the system retrieved relevant passages and generated accurate answers without any ground truth.  

**Action** – First, I set up a proxy evaluation: we extracted a random 200‑question sample from our ticketing system, anonymized them, and had three senior analysts manually score relevance (1–5) for each top‑3 retrieved docs. For generation quality, I used automatic metrics—BLEU, ROUGE‑L, and METEOR—against a small curated set of “golden” answers that the analysts provided after scoring. To capture user satisfaction, we ran an A/B test with live users, measuring click‑through on suggested documents and a post‑interaction survey (NPS). I also implemented perplexity monitoring to flag overly generic responses.  

**Result** – The relevance score averaged 4.2/5, BLEU rose from 0.32 to 0.45 after fine‑tuning the retriever with BM25 + DPR embeddings, and user NPS improved by 12 points. I learned that combining proxy human scoring, lightweight automatic metrics, and real‑world A/B data gives a robust picture of RAG performance even without formal ground truth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
