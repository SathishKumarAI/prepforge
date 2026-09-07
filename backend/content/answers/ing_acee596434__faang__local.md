---
qid: ing_acee596434__faang__local
question: 'Q: Why does GPT-4 struggle with simple character counting?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 447
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:25:40-05:00'
sources: []
---

**Clarify**  
The interviewer asks why GPT‑4, a large language model, can miscount characters in a short string. I’ll assume the task is to count alphabetic symbols accurately and that the input length is modest (≤ 200 chars). I’d confirm whether the prompt is free of hidden whitespace or Unicode variants.

**Approach**  
1. **Model architecture & training data** – GPT‑4 predicts tokens, not raw characters; its objective is next‑token probability, not counting.  
2. **Tokenization granularity** – The tokenizer splits text into sub‑word units (≈ 3–5 chars each). A single token may contain multiple characters or be split across tokens, so the model has no internal counter.  
3. **Probabilistic inference** – The network outputs a distribution over tokens; counting requires deterministic logic, which is not part of its learned objective.

**Depth**  
- *Tokenization*: BPE/BPE‑like tokenizers map “abc” to one token but may split “ab c” into two. Counting characters would need the model to decode token boundaries first, a separate step it doesn’t perform.  
- *Training loss*: Cross‑entropy over next token discourages explicit bookkeeping; any counting ability emerges only as a side effect of language patterns.  
- *Inference mechanics*: During decoding, GPT‑4 samples from probabilities; small errors in token alignment can cascade into off‑by‑one counts.

**Edge cases**  
- Mixed‑language or emojis cause larger tokens → higher error rate.  
- Very short strings (≤ 3 chars) may be mis‑tokenized as whole words, leading to zero counts for missing characters.  

**Optimize & communicate**  
To improve accuracy: post‑process with a deterministic counter on the decoded string or fine‑tune GPT‑4 on counting tasks using a loss that penalizes off‑by‑one errors. I’d explain that the root cause is architectural: token‑level prediction, not character‑level bookkeeping, and that any fix must bridge this representation gap.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
