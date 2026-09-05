---
qid: ing_877a1bff84__eli5__local
question: 'Explain: Request Body — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 211
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:10:54-05:00'
sources: []
---

**What’s a “request body” when you’re designing something like Spotify?**

Think of it as the **menu you hand to a chef** when you order at a fancy restaurant.  
The request body is the part of your message that tells the server exactly what you want: which song, artist, playlist ID, or user preferences. It’s the data packet that travels from your app (the diner) to Spotify’s servers (the kitchen).  

In a system‑design interview, you’ll describe how this “menu” is structured—JSON fields like `songId`, `userId`, `shuffle:true`—and how it gets validated and routed inside the service.  
So, just as a clear menu lets the chef cook the right dish quickly, a well‑defined request body lets the backend deliver the correct music, track info, or playlist to the user.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
