---
qid: ing_61875954fb__star__local
question: 'Explain: RAGAS Metrics — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 375
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:12-05:00'
sources: []
---

**Situation**  
In my last role as a data scientist at a fintech startup, we were rolling out an AI‑powered customer support chatbot that used retrieval‑augmented generation (RAG). After launch, our internal QA team flagged that the bot’s answers were often factually inaccurate, which risked eroding user trust.

**Task**  
I was tasked with evaluating the RAG model’s performance comprehensively and proposing concrete improvements so we could meet a 95 % factuality threshold before the next quarterly release.

**Action**  
I implemented the RAGAS evaluation framework (Recall, Accuracy, Generation, Answer Quality, Semantic Similarity). Using our existing test set of 5,000 real user queries, I scripted a pipeline in Python that:  
1. Extracted top‑k retrieved documents and computed Recall@k against gold passages.  
2. Ran the model’s generated responses through a BERT‑based factuality classifier to gauge Accuracy.  
3. Applied ROUGE‑L and BLEU for Generation quality, and measured semantic similarity with Sentence‑BERT embeddings.  
I visualized the results in a Tableau dashboard, highlighted that Recall was 78 % while Accuracy lagged at 68 %, pinpointing retrieval gaps as the root cause.

**Result**  
After tuning the retriever (switching to BM25+embedding hybrid and increasing k from 5 to 10), we raised Recall to 92 % and Accuracy to 87 %. The overall RAGAS score climbed from 0.71 to 0.84, surpassing our target. I learned that a systematic, metric‑driven approach can turn qualitative complaints into actionable engineering improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
