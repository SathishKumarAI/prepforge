---
qid: ing_7240af08ec__aws__local
question: 'Q: How would you select a model for a production RAG system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 503
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:43:43-05:00'
sources: []
---

**Situation & Task**  
In my last role I built a Retrieval‑Augmented Generation (RAG) pipeline for a legal‑tech startup that needed to answer user queries from a constantly evolving corpus of contracts. The challenge was to pick the right language model that balanced latency, cost and accuracy while staying compliant with data‑privacy regulations.

**Action**  
1. **Define KPIs** – Accuracy (BLEU > 0.72 on a held‑out test set), inference latency (< 200 ms per request) and cost ($/inference < $0.02).  
2. **Model catalog & benchmarking** – Ran 5 candidate models (OpenAI GPT‑3.5‑turbo, Anthropic Claude‑2, Cohere Command R+, Llama‑2‑70B + fine‑tune, and a distilled BERT‑based retrieval encoder).  
3. **Prototype & A/B test** – Deployed each model behind an API gateway, logged latency, cost, and user satisfaction (NPS).  
4. **Cost‑aware scaling** – Used SageMaker Endpoint with multi‑model hosting; leveraged GPU spot instances for batch inference to cut costs by 35%.  
5. **Security & compliance** – Enforced end‑to‑end encryption, used KMS for key rotation, and added a policy layer that strips PII before sending data to the model.

**Result**  
- Chose Llama‑2‑70B fine‑tuned on domain data: BLEU 0.75, latency 180 ms, cost $0.015 per inference.  
- Reduced overall operational spend by 28% vs. GPT‑3.5 while improving user NPS from 68 to 82 in three months.  
- Established a reusable benchmarking framework that now runs quarterly, catching drift before it impacts production.

**Leadership Principles Reflected**  
- **Customer Obsession** – Delivered faster, cheaper answers that users loved.  
- **Ownership & Dive Deep** – Built end‑to‑end monitoring, fine‑tuned models, and continuously iterated on the pipeline.  

Bar‑raisers listen for clear ownership of metrics, a data‑driven selection process, and evidence of learning from iteration—exactly what this story demonstrates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
