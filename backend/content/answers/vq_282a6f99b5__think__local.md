---
qid: vq_282a6f99b5__think__local
question: What’s the weather like today?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 327
total_tokens: 512
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:19:13-05:00'
sources: []
---

**1. Clarify & set assumptions**  
   - Confirm that the user wants a *current* weather update (not historical or forecast).  
   - Assume they’re asking about their local area; if no location is given, note the limitation and ask for it.

**2. Mental model: “Information‑request flow”**  
   - Identify the request type → locate data source → validate → respond.  
   - Treat this like a simple API call: input (location) → output (weather).

**3. Step‑by‑step reasoning**  
   1. Check if I have real‑time weather capability.  
   2. If yes, query the appropriate service with the user’s location.  
   3. Parse the response into key metrics (temperature, conditions, precipitation).  
   4. Format a concise, friendly reply.

**4. Common traps to avoid**  
   - Assuming I can provide real‑time data when I cannot.  
   - Forgetting to ask for the missing location.  
   - Overloading the user with technical jargon or raw API data.

**5. Sanity‑check & communicate**  
   - Verify that the answer matches the requested scope (today’s weather, not a forecast).  
   - Keep it short: “It’s 72°F and partly cloudy in [City].”  
   - If I can’t supply current data, transparently explain the limitation and offer to help find another source.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
