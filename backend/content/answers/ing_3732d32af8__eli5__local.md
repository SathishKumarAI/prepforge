---
qid: ing_3732d32af8__eli5__local
question: 'Explain: Step 4: Scale the design — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 272
total_tokens: 471
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:03:17-05:00'
sources: []
---

**Step 4: “Scale the Design”**

Think of your system as a growing garden.  
At first you plant a few seeds (the core features). As more people visit, the soil (your infrastructure) can become crowded and the plants start competing for water and light. Scaling is like expanding the garden beds, adding irrigation lines, and planting taller, sturdier varieties so every visitor gets enough fresh produce.

**Key ideas**

- **Horizontal scaling** – add more identical “beds” (servers) instead of enlarging a single one; it’s cheaper and prevents a single point of failure.  
- **Vertical scaling** – upgrade the size of one bed (more CPU, memory); useful early on but has limits.  
- **Caching** – like placing pots near the entrance so visitors can grab fruit quickly without walking to the back garden.  
- **Load balancing** – a gardener’s assistant that directs visitors to the least crowded path.

In the GitHub primer, scaling means designing your architecture (databases, caches, queues) so it keeps running smoothly when traffic grows—just as a well‑planned garden thrives even with a crowd of bees and humans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
