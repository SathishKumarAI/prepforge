---
qid: ing_86b84659d7__eli5__local
question: 'Explain: Clients (Web, Mobile) — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 238
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:09:36-05:00'
sources: []
---

Think of a new Instagram‑style app as a big, bustling city where **clients** are the people who walk around—Web browsers and mobile phones. The **design** is like the city’s master plan: it shows how streets (user interfaces), parks (image galleries), and transit lines (data flows) connect so everyone can move smoothly.

When someone snaps a photo on their phone, the **client** sends that image to the city’s central hub (the server). The hub then does three things:  
1. **Stores** the picture in a huge library (a database).  
2. **Notifies** nearby users’ clients so they see it pop up instantly—like a bus schedule alert.  
3. **Keeps track** of who’s looking at what, so recommendations can be made later.

Just as city planners must design roads that fit traffic patterns and future growth, a system designer plans these data routes, storage choices, and real‑time updates to keep the app fast, reliable, and ready for millions of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
