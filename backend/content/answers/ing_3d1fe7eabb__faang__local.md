---
qid: ing_3d1fe7eabb__faang__local
question: 'Explain: Perplexity AI — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 416
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:05:56-05:00'
sources: []
---

**Perplexity in NLP Models – What It Means and Why Interviewers Care**

| Step | What I’d Say |
|------|--------------|
| **Clarify** | “You’re asking about *perplexity*—a statistical measure used to evaluate language models. We’ll assume a standard transformer‑based model trained on a large corpus.” |
| **Approach** | 1) Define perplexity mathematically. <br>2) Explain its interpretation (lower = better). <br>3) Relate it to common interview questions (“How do you measure model quality?”). |
| **Depth** | Perplexity \(P\) for a test set of size \(N\) is: \[ P = 2^{-\frac{1}{N}\sum_{i=1}^{N}\log_2 p(x_i)} \] <br>It’s the exponential of the average negative log‑likelihood, i.e., the expected “branching factor” the model faces. <br>In practice, a lower perplexity indicates the model assigns higher probability to real sentences—often correlating with better downstream performance but not always (e.g., BLEU vs. perplexity). |
| **Edge Cases** | • Very small test sets inflate variance.<br>• Models over‑fitting training data can have low perplexity yet poor generalization.<br>• Tokenization choices (subword vs. word) dramatically shift perplexity values. |
| **Optimize & Communicate** | “When interviewing, I’d ask candidates to explain how they'd compute perplexity on a held‑out set, discuss its limitations, and propose complementary metrics like BLEU or ROUGE. This demonstrates not only technical grasp but also critical thinking about evaluation trade‑offs.” |

*Word count: 198*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
