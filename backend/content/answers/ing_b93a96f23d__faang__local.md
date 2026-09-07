---
qid: ing_b93a96f23d__faang__local
question: What is WER, and why is it a misleading metric for a voice product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 386
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:53:46-05:00'
sources: []
---

**Clarify**  
WER (Word Error Rate) measures the ratio of substitutions, deletions, and insertions needed to transform a system’s transcription into a reference transcript. It assumes that every word is equally important and that errors are uniformly distributed. I’d confirm whether the product cares about *semantic* correctness, user intent, or downstream tasks like search.

**Approach**  
1. Define WER mathematically.  
2. List its assumptions (word‑level granularity, equal cost).  
3. Explain why those fail for voice products: varied error impact, intent loss, and context sensitivity.  

**Depth**  
WER = (S + D + I) / N where S=substitutions, D=deletions, I=insertions, N=reference words. It’s easy to compute but treats a “the” deletion the same as deleting a critical keyword. Voice products often need intent recognition or command execution; a single mis‑transcribed word can flip the action while most other errors are benign. Moreover, WER ignores prosody, speaker identity, and user satisfaction metrics (e.g., task completion rate).

**Edge Cases**  
- Homophones: “weather” vs. “whether.”  
- Rare or domain‑specific terms that inflate error counts but rarely affect intent.  
- Multi‑speaker diarization errors that skew WER without hurting usability.

**Optimize & Communicate**  
Replace or supplement WER with *Intent Accuracy*, *Task Success Rate*, or *User Satisfaction Scores*. Use a weighted loss function where critical words (e.g., commands, entities) carry higher penalties. Explain to stakeholders that optimizing raw WER can mislead product decisions; focus on metrics aligned with business outcomes and user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
