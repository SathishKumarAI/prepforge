---
qid: ing_b6b9757ed7__aws__local
question: 'Explain: Building Golden Test Sets — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 421
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:17:13-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a cross‑functional team that had to validate an internal RAG (Retrieval‑Augmented Generation) model for legal document search. The product promised 10 × faster query turnaround, but we risked propagating stale or biased knowledge from the retrieval index.

**Action**  
I introduced *Golden Test Sets*—hand‑curated question–answer pairs that mirror real customer queries—and built a *Rag Evaluation Pattern* pipeline:

1. **Data prep** – Extract 5 k high‑confidence QAs, label them with expected answer tokens.  
2. **Evaluation engine** – Use AWS Lambda (Python) to invoke the RAG endpoint; store raw outputs in S3.  
3. **Metric calculation** – Compute BLEU, ROUGE‑L, and a custom “Relevance‑Score” (cosine similarity between retrieved passage embeddings).  
4. **Continuous monitoring** – Deploy the pipeline on EventBridge every night; trigger CloudWatch Alarms if any metric drops > 5 %.  

We also added an *A/B test* branch that swapped in a new retrieval index and logged differences automatically.

**Result**  
After deployment, we caught a 12 % drop in relevance before production roll‑out. The pipeline reduced manual QA time by **70 %**, cutting validation cycles from 3 days to 6 hours. Customer support tickets dropped 18 % in the first month, and we saved $15k/month in compute by only running Lambda for failures.

**Reflection**  
I owned the end‑to‑end workflow, dove deep into metric thresholds, and iterated on the pattern after a false negative that taught us to include edge‑case queries. This experience reinforced my bias for action while delivering measurable results—exactly what Amazon expects from a high‑impact engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
