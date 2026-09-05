---
qid: ing_4d219d4213__eli5__local
question: 'Explain: Event-Driven Architecture — 6 Software Architectural Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 373
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:39:21-05:00'
sources: []
---

Imagine a kitchen where every ingredient (event) is dropped onto a counter and cooks (services) pick it up only when they need it. That’s event‑driven architecture: components send messages instead of calling each other directly, so they stay independent.

**Six patterns you should know**

1. **Publish/Subscribe** – A chef posts a “bread ready” note; any waiter who cares about bread sees it and acts.  
2. **Event Sourcing** – Every change (a slice added or removed) is recorded as a separate event, so the whole recipe can be rebuilt later by replaying those notes.  
3. **Command Query Responsibility Segregation (CQRS)** – One set of chefs writes events (commands), another reads them to build a current menu view (queries).  
4. **Saga** – A long meal is broken into steps; each step sends an event that the next chef follows, ensuring the whole course finishes even if a single step fails.  
5. **Event‑driven microservices** – Each kitchen station runs its own software and only talks through events, so they can grow or shrink independently.  
6. **Message Bus (Broker)** – A central bulletin board that delivers each note to all interested chefs, guaranteeing delivery even if a chef is busy.

In all cases the “event” is simply an immutable record of something that happened; the “handler” is any component that reacts to it. This loose coupling lets systems scale and evolve without breaking others—just like a well‑organized kitchen where every dish can be prepared independently yet still fits into the whole menu.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
