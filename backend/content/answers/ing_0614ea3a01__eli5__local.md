---
qid: ing_0614ea3a01__eli5__local
question: What query understanding techniques would you apply before retrieval, and
  when is each worth it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 241
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:45:06-05:00'
sources: []
---

Think of a search engine as a kitchen that must decide what dish (answer) to cook from the pantry (the web).  
Before grabbing ingredients, the chef first “understands” the order:  

1. **Keyword spotting** – like reading a grocery list for exact items. It’s fast and works when the user writes clear, specific terms.  
2. **Intent inference** – like guessing whether the list is for a snack or a full meal. It helps when words can mean different things (e.g., “Java” as coffee vs. programming).  
3. **Contextual disambiguation** – like remembering that last week you bought lemons, so “sour” probably means lemon. It’s useful when the same word appears in many contexts or the query is vague.  

Use keyword spotting first because it costs almost nothing. Add intent inference if the list contains ambiguous words. Bring in contextual disambiguation only when earlier steps still leave room for confusion—just as a chef adds spices after tasting the soup to finish the flavor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
