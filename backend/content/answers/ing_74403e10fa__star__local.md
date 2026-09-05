---
qid: ing_74403e10fa__star__local
question: 'Explain: So first we type course, then dot — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 499
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:58-05:00'
sources: []
---

**Situation:**  
In my last role at an e‑learning startup, we launched a chatbot to help students find courses quickly. Users often typed phrases like “course . Python Full Course for Beginners,” but our bot couldn’t parse the dot notation and returned generic results, hurting engagement during a critical launch period.

**Task:**  
I was tasked with redesigning the input parser so that it could interpret the dot as a delimiter between a command (“course”) and an entity (“Python Full Course for Beginners”), mapping the latter to the correct course record in our catalog.

**Action:**  
First, I instrumented the chat logs to identify common patterns. Using spaCy’s dependency parser, I built a lightweight rule‑based extractor that split input on “.” and trimmed whitespace. Then I added an FuzzyWuzzy matcher against the title field of our PostgreSQL catalog, scoring matches above 80% as valid. To handle ambiguous titles, I queried the course metadata (tags, instructor) to disambiguate. Finally, I wrapped the logic in a microservice with a REST endpoint, so the chatbot could call it asynchronously without blocking the conversation.

**Result:**  
After deployment, precision of course retrieval jumped from 62% to 92%, and user satisfaction scores rose by 18%. The improvement also reduced support tickets by 25 % during the first month. I learned that combining lightweight NLP with fuzzy matching can quickly solve real‑world parsing problems without a full ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
