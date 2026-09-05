---
qid: ing_91c6e44dee__star__local
question: 'Explain: Stop stuffing the context window. (Newsletter partner).'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 334
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:24:21-05:00'
sources: []
---

**Situation** – While building a recommendation engine for a daily tech‑newsletter partner, we noticed our model’s performance plateaued: click‑through rates dropped from 12% to 9% after the first month of deployment.

**Task** – I had to improve relevance scores by better leveraging user context (past reads, time of day, device) without overloading the transformer that generated article summaries. The challenge was to keep the context window under the model’s limit while still capturing enough signal.

**Action** – First, I profiled the token usage per request and found we were averaging 1,200 tokens—well above the 1,024‑token limit—so the model truncated critical user data. I redesigned the input pipeline:  
1. Extracted only the top three most recent articles a user read (≈300 tokens).  
2. Summarized the user’s reading history into a concise embedding using SentenceTransformer.  
3. Concatenated this 128‑dimensional vector with metadata (time, device) and encoded it as a single token via a learned “context” token.  
4. Implemented a sliding‑window attention mask to focus on the new article while preserving the context token.

**Result** – After deployment, click‑through rates rebounded to 11.5% within two weeks, and latency dropped by 30%. I learned that careful token budgeting—using embeddings and custom tokens—lets large models stay inside their limits without sacrificing contextual depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
