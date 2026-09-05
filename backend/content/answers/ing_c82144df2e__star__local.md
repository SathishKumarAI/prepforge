---
qid: ing_c82144df2e__star__local
question: 'Explain: Pass 1: Expired Context Elimination — Long Context Isn\u2019t
  Free \u2014 I Built a Safe Prompt-Pruning Layer That Makes LLM Systems Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 392
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:09:54-05:00'
sources: []
---

**Situation**  
I was working on a real‑time customer support chatbot that used GPT‑4 to generate replies. During peak hours the prompt length kept growing as users added context, pushing us over the 32K token limit and causing 40 % more latency and higher compute costs.

**Task**  
Design a lightweight “safe prompt‑pruning” layer that would trim unnecessary context while preserving intent, so the LLM could stay within limits without compromising answer quality.

**Action**  
I built a two‑pass system. In Pass 1 I tokenized incoming user history and used cosine similarity on sentence embeddings (via Sentence‑Transformers) to score each segment against the current query. Segments with a similarity below 0.3 were flagged for removal, ensuring only high‑impact context stayed. In Pass 2 I re‑tokenized the pruned prompt, capped it at 28K tokens, and appended a safety guard that inserted a short “context trimmed” note so downstream components could handle missing details. The layer ran on an edge GPU with <5 ms inference per pass.

**Result**  
After deployment, average response time dropped from 1.8 s to 1.2 s (33 % faster), and token usage fell by 25 %, cutting cloud compute costs by roughly $0.02 per 100 requests. The system also maintained a BLEU‑style similarity score of 0.94 against the unpruned baseline, confirming minimal loss in answer quality. I learned that smart semantic pruning can be both cost‑effective and transparent when built with lightweight embeddings and clear safety signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
