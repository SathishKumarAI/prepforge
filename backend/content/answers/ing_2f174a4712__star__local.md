---
qid: ing_2f174a4712__star__local
question: 'Explain: Part 2: Why It Happens — That Is Embarrassing: Why Frontier AI
  Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 377
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:02:44-05:00'
sources: []
---

**Situation**  
During a sprint for our chatbot product at a fintech startup, we noticed the model frequently generated plausible but factually incorrect statements—“The company was founded in 1999” or “We hold an ISO 9001 certification.” The QA metrics dropped from 92 % to 78 % accuracy, and user support tickets surged.

**Task**  
I needed to identify why the LLM was hallucinating facts, quantify its impact on trust scores, and implement a mitigation strategy that could be rolled out in two weeks without halting new feature development.

**Action**  
First, I ran an audit of 1,000 generated responses against our knowledge base using a custom regex‑based validator. The error rate was 22 % for factual claims versus 5 % for stylistic ones. Next, I introduced a lightweight “fact-checker” module that cross‑references claims with a pre‑indexed vector store (FAISS) of verified documents. We added an API gate: if the confidence score fell below 0.85, the model’s output was replaced by a safe fallback (“I’m not sure; let me check”). Finally, I set up A/B testing on our staging environment to monitor latency and accuracy.

**Result**  
Accuracy rose from 78 % to 94 % within one release cycle, reducing support tickets by 60 %. Latency increased by only 12 ms per request. The exercise taught me that hallucinations stem largely from training data gaps and the model’s optimization for fluency over fidelity; a simple verification layer can dramatically restore user trust without costly retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
