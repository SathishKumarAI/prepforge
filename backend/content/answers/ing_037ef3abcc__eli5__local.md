---
qid: ing_037ef3abcc__eli5__local
question: 'Explain: You have an embedding model and a reranker. Why sell both? Design
  the two-stage retrieval pipeline and tell me when the reranker earns its latency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 240
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:40:38-05:00'
sources: []
---

Think of searching for a book in a huge library.  
The **embedding model** is like a quick “book‑fingerprint” scanner that turns every title into a short code (a vector). When you ask for something, the scanner looks at all codes and pulls out the 100 books whose fingerprints are closest to yours – that’s the first stage.

Now we have 100 candidates. The **reranker** is a careful librarian who reads the first few pages of each book and decides which one truly matches your request. It only works on those 100, so it can afford to spend extra time (latency) for accuracy.

You sell both because the scanner gives speed, while the reranker boosts precision. The reranker earns its latency after the first stage has narrowed the field; if you tried to rank all books from scratch, the delay would be too great. Thus, a two‑stage pipeline—fast scan, then smart re‑rank—delivers quick and accurate results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
