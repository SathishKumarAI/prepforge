---
qid: ing_7fa4ac4c3f__star__local
question: 'Explain: Define abstract classes — LLD-OOPs-Design-Patterns/TipsAndTechniques.md
  at main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 313
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:48:49-05:00'
sources: []
---

**Situation:**  
At my previous role I was building a plugin‑based analytics platform for an e‑commerce client. Each data source (CSV, API, database) needed its own parser, but all parsers had to expose the same interface: load(), validate() and export(). The project had a tight two‑month deadline and we were receiving 15 different data feeds.

**Task:**  
I had to design a common foundation so that new parsers could be added without touching existing code, while keeping type safety and preventing misuse of unimplemented methods.

**Action:**  
I created an abstract base class `DataParser` in Java. It declared the three public methods as abstract, provided a concrete `export()` implementation that wrote to CSV, and included a protected helper for logging. Each concrete parser extended this class and implemented only the source‑specific logic. I used dependency injection via Spring so the framework would instantiate the right subclass based on configuration. This enforced compile‑time checks: any new parser had to implement all abstract methods or the build would fail.

**Result:**  
The abstraction cut development time for new feeds by 70 % and reduced runtime errors from missing overrides from 12 bugs in production to zero. I learned that an abstract class is ideal when you need a shared implementation plus enforce a contract, keeping the codebase modular and testable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
