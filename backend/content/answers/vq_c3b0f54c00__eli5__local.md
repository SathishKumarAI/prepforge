---
qid: vq_c3b0f54c00__eli5__local
question: How do you handle data encryption in ADLS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 263
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:26:47-05:00'
sources: []
---

Think of ADLS like a huge library that stores every book (data file) you ever write.  
When you put a book on the shelf, you can choose two kinds of locks:  

1. **At rest** – the shelves themselves are wrapped in a protective coating so that if someone opens the building, the books still stay sealed. In ADLS this is called *Azure Storage Service Encryption (SSE)*; it automatically scrambles every file with a secret key before writing it to disk and unscrambles it only when you read it.

2. **In transit** – while you’re walking from your desk to the shelf, you carry each book in a secure bag so no one can peek at its contents. ADLS uses *Transport Layer Security (TLS)* for this; data is encrypted over the network as it travels between your computer and Azure’s servers.

You don’t need to do anything special – the library staff (Azure) handles both locks. If you want extra control, you can bring your own key (Customer‑Managed Keys) so only you have the master key that unlocks the books when you read them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
