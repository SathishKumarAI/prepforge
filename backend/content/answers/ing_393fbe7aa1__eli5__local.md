---
qid: ing_393fbe7aa1__eli5__local
question: 'Explain: System Design: TINDER as a microservice architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 241
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:06:58-05:00'
sources: []
---

Imagine Tinder is a big kitchen where many chefs (micro‑services) cook different dishes at the same time.  
Each chef has its own recipe book: one prepares user profiles, another matches users, a third handles notifications, and yet another logs activity. They all sit on separate tables (servers) but share a pantry—our shared database—that holds the ingredients (user data).  

When you swipe right or left, your action goes to the “matching chef.” That chef pulls the relevant recipes from the pantry, decides if there’s a match, and tells the “notification chef” to send a buzz. Because each chef works independently, one slow dish doesn’t make the whole kitchen choke; if the matching chef crashes, only matches pause while the rest keep cooking.

**Key terms defined**  
*Micro‑service*: A small, independent program that does one job (e.g., matching).  
*Shared database*: One common storage place where all chefs get their ingredients.  
*Scalable*: Adding more chefs to handle more orders without breaking the kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
