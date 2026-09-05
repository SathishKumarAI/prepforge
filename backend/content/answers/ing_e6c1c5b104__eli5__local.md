---
qid: ing_e6c1c5b104__eli5__local
question: 'Explain: Your PM wants AI-powered summarization in the app. Walk me through
  the on-device vs cloud decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 280
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:40:37-05:00'
sources: []
---

Imagine your phone is a tiny library and the internet is a huge city library.  
*On‑device summarization* is like having a quick reference book inside your pocket: it works instantly, never needs an internet connection, and keeps all your notes private because nothing leaves the library you carry.  
*Cloud summarization* is like sending your text to the city library’s master librarian who can pull from vast volumes of knowledge and return a polished summary faster for complex topics.

**When to choose each:**

| Factor | On‑device | Cloud |
|--------|-----------|-------|
| **Speed** | Very fast (no network wait) | Slightly slower if you need many requests |
| **Privacy** | Highest – data never leaves device | Lower – text travels over the internet |
| **Accuracy / Complexity** | Good for simple summaries; limited models | Better for nuanced or long documents, thanks to larger AI models |
| **Battery & Data** | Uses little power and no data | Consumes data and can drain battery with frequent calls |

So, if your PM values instant privacy and offline use, go on‑device. If they need deeper understanding and can afford a small data cost, cloud summarization is the way to go.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
