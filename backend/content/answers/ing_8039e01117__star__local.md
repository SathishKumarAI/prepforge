---
qid: ing_8039e01117__star__local
question: 'Explain: Although inheritance is a popular OOPs concept, it is less advantageous
  than composition. Explain.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 317
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:50:08-05:00'
sources: []
---

**Situation:**  
In my last role as a senior backend engineer at a fintech startup, we were refactoring the transaction processing engine to support multiple payment gateways. The original codebase was heavily inheritance‑driven: each gateway had its own subclass of `PaymentProcessor`, inheriting from a common base that defined methods like `authorize()`, `capture()`, and `refund()`.

**Task:**  
I needed to reduce technical debt, improve testability, and make it easier to add new gateways without touching the core logic or breaking existing ones.

**Action:**  
I replaced inheritance with composition by introducing a set of interface‑like service contracts (`IAuthorizer`, `ICapturer`, `IRefunder`) and built small, gateway‑specific strategy objects that implement these interfaces. The main `PaymentProcessor` class now holds references to these strategies and delegates calls via dependency injection. I also refactored the base class into a thin facade that simply orchestrates the composed services, removed duplicated code, and wrote unit tests for each strategy in isolation.

**Result:**  
The refactor cut the number of lines in the payment module by 35%, reduced build times by 20 % due to fewer recompilations, and allowed us to add a new gateway in just two days instead of weeks. Most importantly, the code became far easier to maintain and test; I learned that composition gives you greater flexibility and decoupling than inheritance, especially when requirements evolve rapidly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
