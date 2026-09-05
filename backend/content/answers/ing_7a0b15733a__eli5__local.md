---
qid: ing_7a0b15733a__eli5__local
question: 'Explain: Sentence/Document Embeddings — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 198
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:50:02-05:00'
sources: []
---

Think of a sentence like a secret recipe written in a special language that only the computer can read.  
**Embedding** is the computer’s way of turning that recipe into a list of numbers—like a barcode—that captures its meaning.  
When many recipes are turned into barcodes, they all live inside an invisible **vector space**: a room where every point represents one possible “meaning.”  

In this room, similar sentences sit close together (their barcodes differ only slightly), while unrelated ones are far apart. You can now ask the computer to find the closest recipe to a new query by simply measuring distance in that room—no need to understand words, just numbers.  
So embeddings give each sentence a unique coordinate; the vector space lets us compare and manipulate those coordinates with simple geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
