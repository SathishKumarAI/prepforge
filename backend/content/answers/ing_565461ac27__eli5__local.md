---
qid: ing_565461ac27__eli5__local
question: 'Explain: New York Times — How do we incorporate Event Sourcing into systems?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 274
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:53:37-05:00'
sources: []
---

Think of a system like a newspaper’s daily archive.  
**Event sourcing** is the idea that instead of keeping only the latest copy of each story (the current state), you keep every edit, comment, or update that ever happened—each “event.”  

Imagine the NYT newsroom as a giant whiteboard where every change to an article is written down in order: “Draft created,” “Fact‑checked,” “Headline changed,” “Photo added.”  
When someone wants to see the article today, the system simply reads all those notes from start to finish and rebuilds the current version. If you need to know how a headline evolved or correct a mistake, you can replay the events up to that point.

**Key terms**  
- **Event**: A record of something that happened (e.g., “User logged in”).  
- **State**: The current snapshot derived from all past events.  

By storing every event, the system gains full auditability, easy rollback, and the ability to build new views—just like a newsroom can trace any story back through its edits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
