---
qid: ing_eb0500e27e__eli5__local
question: The system prompt says one thing, the user asks for another, and a retrieved
  document says a third. How do you design conflict resolution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 238
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:47:17-05:00'
sources: []
---

Think of an AI like a chef in a kitchen that must obey three “orders”:  

1. **The recipe book** (the system prompt) tells the chef what style to cook in.  
2. **A diner’s request** (the user query) says what dish they want.  
3. **A delivery note** (a retrieved document) supplies an ingredient list that may suggest a different taste.

When all three point to different things, the chef follows a simple hierarchy:  

- First, follow the recipe book – it sets the overall cooking style and safety rules.  
- Second, satisfy the diner’s request – this is the user’s goal.  
- Finally, use the delivery note only if it doesn’t conflict with the first two; otherwise ignore or ask for clarification.

If a conflict remains (e.g., the recipe says “no dairy” but the document lists milk), the chef politely asks the diner to choose: “Do you want the dish vegan or with dairy?” This layered, transparent approach keeps everyone happy and ensures the AI behaves safely and predictably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
