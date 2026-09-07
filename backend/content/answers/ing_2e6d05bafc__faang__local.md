---
qid: ing_2e6d05bafc__faang__local
question: What chunking strategies do you know, and how do you pick one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 442
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:31:14-05:00'
sources: []
---

**Clarify**  
You’re asking about *text chunking* for NLP pipelines—how we split raw text into meaningful units (sentences, paragraphs, clauses) before feeding it to models. I’ll assume the goal is to balance granularity with computational cost and that we have a language‑specific tokenizer available.

**Approach**  
1. List common strategies: sentence tokenization, paragraph splitting, sliding‑window (fixed‑length or overlap), dependency‑based clause extraction, and semantic segmentation via topic modeling.  
2. Map each strategy to use‑cases: quick inference → sentence; long‑form summarization → paragraph/semantic chunks; context‑heavy models (BERT) → sliding window with overlap.

**Depth**  
- **Sentence tokenization** uses regex or language models (e.g., NLTK, spaCy). O(n) time, minimal overhead.  
- **Paragraph splitting** is trivial on newline delimiters but may miss logical breaks in prose.  
- **Sliding‑window**: choose window size *w* and stride *s*. Complexity O(n·(w/s)). Trade‑off between context coverage (larger w) and memory usage.  
- **Clause extraction** via dependency parsing yields syntactically coherent chunks; expensive (O(n³) in worst case for full parse).  
- **Semantic segmentation** (e.g., BERTopic) groups tokens by topic; high compute but captures long‑range semantics.

**Edge Cases**  
- Hyphenated sentences, quoted speech, or nested brackets can break sentence tokenizers.  
- Very short documents: sliding window may produce redundant chunks.  
- Multi‑language corpora: need language detection before applying strategy.

**Optimize & Communicate**  
Start with the simplest (sentence) and profile latency/accuracy. If context loss hurts performance, switch to a larger sliding window or clause extraction. Document decisions in code comments and provide unit tests for edge cases. This iterative, evidence‑based selection aligns with FAANG’s emphasis on structured problem solving and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
