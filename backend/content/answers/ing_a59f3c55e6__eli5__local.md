---
qid: ing_a59f3c55e6__eli5__local
question: 'Explain: Parity — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 298
total_tokens: 456
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:00:37-05:00'
sources: []
---

**Parity‑checksums are a simple “spell‑check” for data.**  
Imagine you’re sending a recipe card to a friend: the card lists all ingredients and their amounts. To make sure nothing gets lost or garbled in the mail, you add one extra line that says “total number of items must be even.” When your friend receives the card, they count the items; if the total is odd, something went wrong.

In computing, a **checksum** (the extra line) is a short number calculated from all the bits in a data block. A **parity bit** is the simplest checksum: you set it to 0 or 1 so that the overall number of 1‑bits becomes even (even parity) or odd (odd parity). When the data arrives, the receiver recomputes the parity; if it differs, an error is detected and the packet can be resent.

**Key terms**  
- **Checksum:** a small value derived from a larger set of data to verify integrity.  
- **Parity bit:** a single‑bit checksum that enforces even or odd total 1‑bits.  

This method is fast and cheap, making it popular in early network protocols and embedded systems where full error‑correction isn’t needed but quick detection is essential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
