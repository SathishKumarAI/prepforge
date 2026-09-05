---
qid: ing_fb0eb26c15__star__local
question: 'Explain: Create specific evaluators — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 310
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:50:58-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a conversational AI for customer support, but the QA team reported that user satisfaction dropped by 12% after the first month. The generic evaluation scripts were only measuring intent accuracy and response length, missing nuanced factors like empathy and context retention.

**Task:**  
I was tasked to design a set of specific evaluators that could capture those hidden dimensions and provide actionable feedback for model retraining.

**Action:**  
First, I mapped out the key performance indicators: emotional tone alignment, contextual continuity over multi-turn dialogs, and factual correctness. Using OpenAI’s GPT‑4 as an evaluator, I built prompt templates that fed a conversation transcript along with a rubric scoring each dimension on a 1–5 scale. I added a “context drift” metric by comparing the model’s current response to the user’s last utterance using cosine similarity on sentence embeddings from SentenceTransformers. I automated this pipeline in Python, integrating it into our CI/CD workflow so every new model version ran through the evaluators before deployment.

**Result:**  
After deploying the evaluator suite, we identified that 35% of failures stemmed from context drift. Fixing the model’s memory layer reduced the error rate by 28%, raising overall user satisfaction to +9%. I learned that tailored, metric‑driven evaluation is essential for aligning AI behavior with real-world expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
