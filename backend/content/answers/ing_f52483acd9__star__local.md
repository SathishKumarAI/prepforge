---
qid: ing_f52483acd9__star__local
question: How do you design good tool/function definitions for an LLM? What makes
  tool calling fail?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 344
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:36-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a conversational AI assistant that needed to retrieve up-to-date flight prices from several airline APIs. The internal product manager flagged that the bot was returning stale data and users complained about inaccurate suggestions.

**Task:**  
I had to design a set of tool/function definitions for the LLM so it could reliably call the correct API, pass the right parameters, and handle failures gracefully—without manual oversight.

**Action:**  
First, I mapped each API endpoint to a distinct function name with a concise description: `search_flights(departure_city, arrival_city, date)`. I defined JSON schemas for inputs and outputs, explicitly marking required fields and adding example values. To avoid ambiguity, I grouped similar operations under a single umbrella function (`flight_search`) but used a “mode” parameter to distinguish between one‑way and round‑trip queries. I also added a fallback tool `log_error(message)` that the LLM could invoke if it detected missing data or ambiguous intent. Finally, I integrated a retry policy in our middleware: if an API returned a 5xx error, the LLM would automatically reattempt with exponential back‑off and log the incident.

**Result:**  
Within two weeks of deployment, API call success rose from 72 % to 95 %, reducing user-reported errors by 60 %. The system also logged over 200 failure cases, enabling us to refine our schemas. I learned that clear, minimal function signatures combined with built‑in error handling dramatically improves LLM reliability in real‑world tool calling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
