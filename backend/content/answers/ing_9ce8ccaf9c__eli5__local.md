---
qid: ing_9ce8ccaf9c__eli5__local
question: 'Explain: Estimate the annual serving cost of adding an LLM summary feature
  for 100 million weekly active users, and how you''d cut it by 10x.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 298
total_tokens: 477
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:46:10-05:00'
sources: []
---

Imagine every user is a thirsty traveler who wants a short “high‑level map” of a long novel (the LLM summary).  
**Serving cost** is the money you pay each time a traveler asks for that map—think of it as the fuel to run the engine that reads the whole novel, writes the summary, and sends it back.

If 100 million travelers ask once a week, that’s about 5 billion requests per year.  
A typical cloud LLM might cost roughly $0.02 per request (fuel + compute).  
Multiplying gives an annual bill of about **$100 million** to keep all those maps running.

To cut it by tenfold you can:

1. **Cache the most common summaries**—store a few popular ones and reuse them, like a tourist guide re‑printing the same brochure.
2. **Use a smaller model or distill the big one**—think of a lighter engine that still gives a good map but uses less fuel.
3. **Batch requests**—run many travelers’ summaries together in one go, like loading several cars onto the same truck.

Each step lowers the “fuel cost” per traveler, and together they bring the yearly bill down to roughly $10 million.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
