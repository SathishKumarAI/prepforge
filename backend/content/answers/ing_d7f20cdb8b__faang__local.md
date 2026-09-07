---
qid: ing_d7f20cdb8b__faang__local
question: 'Explain: 2.1 - Overview of BERT''s Pre-training Objectives'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 401
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:01:44-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise overview of the two primary objectives that pre‑train BERT: (1) Masked Language Modeling (MLM) and (2) Next Sentence Prediction (NSP). Confirm they’re looking for how each works, why it’s needed, and its impact on downstream tasks.

**Approach**  
Explain MLM first—randomly mask 15 % of tokens, ask the model to predict them. Then NSP—pair sentences, label whether B₂ follows A₁. Highlight the joint objective: loss = λ₁·MLM + λ₂·NSP. Mention training data (Wikipedia + BookCorpus) and tokenization.

**Depth**  
- **MLM**: 15 % tokens masked; 80 % replaced by `[MASK]`, 10 % random, 10 % unchanged. Loss is cross‑entropy over vocabulary. Enables bidirectional context learning.  
- **NSP**: For each pair, 50 % are true consecutive sentences; 50 % shuffled. Binary classification loss encourages sentence‑level coherence useful for QA and NLI.  
- Joint training yields a shared encoder that captures both token‑level and sentence‑level semantics.

**Edge Cases**  
- Very short sequences → insufficient context for MLM.  
- NSP becomes less useful when tasks rely on intra‑sentence relations; later BERT variants drop NSP.  
- Over‑masking can hurt learning stability.

**Optimize & Communicate**  
Mention that newer models (RoBERTa, ALBERT) remove or replace NSP and increase masking ratio to 20 %. Conclude by tying objectives back to downstream performance: MLM gives contextual embeddings; NSP provides a sense of discourse flow. This shows clear understanding of BERT’s pre‑training design and its evolution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
