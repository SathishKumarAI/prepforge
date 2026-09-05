---
qid: ing_231289ae48__star__local
question: 'Explain: Custom Evaluator Pattern — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 363
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:15-05:00'
sources: []
---

**Situation**  
At my previous company we built a customer‑support chatbot that pulled answers from an internal knowledge base. When the model started generating hallucinations, our SLA for accurate responses fell below 85 % and the product owner demanded a more reliable evaluation pipeline before the next quarterly release.

**Task**  
I had to design a custom evaluator that could automatically score each generated answer against multiple reference documents, account for partial matches, and flag hallucinations in real time so we could iterate on the retrieval‑augmented generation (RAG) pipeline without manual review.

**Action**  
I implemented a “Custom Evaluator Pattern” by extending our existing evaluation framework. First, I created a scoring engine that tokenized both user query and retrieved passages, then applied cosine similarity over sentence embeddings to detect overlap. Next, I added a hallucination detector using a lightweight language‑model head that flagged statements not supported by any source text. The evaluator ran in parallel with the RAG pipeline, producing per‑turn scores (exact match, F1, hallucination flag) and stored them in a Prometheus dashboard for continuous monitoring. I also wrote unit tests to simulate edge cases like ambiguous queries and multi‑document answers.

**Result**  
After deploying the custom evaluator, our accuracy metric rose from 82 % to 94 %, and hallucinations dropped by 70 %. The real‑time feedback loop allowed the RAG team to fine‑tune retrieval weights within days instead of weeks. I learned that building a modular evaluator is critical for scaling AI systems and that combining semantic similarity with hallucination detection gives a more holistic view of model performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
