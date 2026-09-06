---
qid: ing_6881c0ed75__fp__local
question: 'Explain: Iterator Pattern — LLD-OOPs-Design-Patterns/DesignPatterns at
  main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 380
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:46:38-05:00'
sources: []
---

### Iterator Pattern – a principled walk through collections

**What problem does it solve?**  
In an object‑oriented system we often expose *collections* (lists, trees, graphs). Clients must traverse them without learning the collection’s internal layout. If each collection implements its own traversal logic, code duplication and tight coupling explode.

**Why a separate iterator is needed:**  
Treat “traversal” as a first‑class abstraction that can be passed around just like any other object. This mirrors the *separation of concerns* principle: the collection stores data; the iterator walks it. It also aligns with *information hiding*: the client never sees indices or pointers.

**Core idea (from geometry):**  
An iterator is a **cursor** moving along an implicit path defined by the collection’s structure. The cursor holds state (current node, index) and exposes two operations: `next()` to advance and `hasNext()` to test validity. This mirrors the concept of a *parametric curve* in math: you can evaluate any point (`next`) without knowing the underlying parametrization.

**Non‑obvious insight:**  
Iterator’s *laziness* is essential for efficiency and safety. By yielding elements on demand, it avoids copying entire collections (memory) and prevents exposing mutable internal state—clients cannot modify the collection through the iterator unless explicitly allowed. This lazy evaluation also enables **composable iterators**: chain filters or maps without materializing intermediate results.

**Bottom line:**  
The Iterator Pattern is a lightweight protocol that decouples traversal from storage, preserves encapsulation, and offers a composable, efficient abstraction—an elegant solution grounded in fundamental principles of abstraction and laziness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
