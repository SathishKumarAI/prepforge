---
qid: ing_84fdd12eb7__star__local
question: 'Explain: Step 4: Build Your Judge Prompt — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 326
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:59:14-05:00'
sources: []
---

**Situation**  
When my team was building a generative QA system for our client’s knowledge base, the initial evaluations kept flagging hallucinations—answers that were plausible but factually wrong. We had to create a robust judge prompt that could automatically score each generated response against ground truth.

**Task**  
Design and implement a “Judge Prompt” module in Langwatch/Langfuse that would (1) ingest the model’s answer, (2) compare it to reference answers, and (3) output a confidence‑weighted score for every sentence, all while keeping latency under 200 ms per request.

**Action**  
I first mapped out the evaluation pipeline: tokenization with HuggingFace’s `tokenizers`, semantic similarity via Sentence‑BERT embeddings, and factuality checks using a lightweight OpenAI function call. I then wrote the Langfuse prompt template, embedding placeholders for context, answer, and reference. Using Langwatch’s observability, I instrumented each step to log token counts, similarity scores, and latency. Finally, I set up a CI test harness that ran 5,000 synthetic QA pairs nightly, automatically flagging regressions.

**Result**  
The judge prompt cut hallucination rates from 27 % to 4 % in production, improved user satisfaction scores by 12 %, and maintained an average latency of 180 ms. I learned the importance of combining semantic matching with factuality checks and how observability tools can surface hidden bottlenecks early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
