---
qid: ing_aa570ea2bb__eli5__local
question: 'Explain: Cost estimate (rough token math) — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 240
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:07:43-05:00'
sources: []
---

Imagine your document‑intelligence system as a busy post office that receives letters, reads them, and sends back summaries.  
**Tokens** are like the words in each letter—each word (or piece of a word) is one token. The **cost estimate** tells you how many “postage stamps” you’ll need for a batch of letters.

1. **Input tokens** – every word the system reads from your PDFs or scans.  
2. **Processing tokens** – the AI’s internal words while it thinks (the model’s hidden layers). This is usually about 10‑20 % of input size but can be higher if the model is large.  
3. **Output tokens** – the words in the summary or answer you get back.

Add them up, then multiply by the price per token set by your AI provider (e.g., $0.0004 per 1,000 tokens). That gives a rough “postage cost” for running the pipeline on that batch of documents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
