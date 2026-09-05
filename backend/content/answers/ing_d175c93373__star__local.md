---
qid: ing_d175c93373__star__local
question: What are the most common prompt anti-patterns you'd flag in a code review?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 329
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:28:32-05:00'
sources: []
---

**Situation**  
During a quarterly audit of our chatbot’s training data, I was reviewing the prompt templates that developers had auto‑generated from user logs. The project was a 3‑month sprint to roll out a new FAQ module.

**Task**  
I needed to identify any prompt anti‑patterns that could degrade model performance or inflate inference costs before we shipped the feature.

**Action**  
First, I ran a static analysis script that scanned for three red flags: (1) **Overly verbose prompts**—any template > 200 characters that repeated context; (2) **Ambiguous tokenization**—prompts containing unescaped special characters like backticks or newlines that caused the tokenizer to split on unintended tokens; and (3) **Hard‑coded identifiers**—templates embedding literal IDs (e.g., “User1234”) which prevented proper generalization.  
I then refactored each offending prompt: trimmed extraneous text, escaped problematic symbols, and replaced literals with placeholders. I also added a unit test that checks prompt length and token count against our SLA.

**Result**  
The review reduced the average prompt size by 35 % and cut GPU inference time per request from 120 ms to 78 ms, boosting throughput by ~50 %. It also lowered the risk of hallucinations due to ambiguous context. I learned that a simple linting rule can catch subtle anti‑patterns that otherwise slip through manual reviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
