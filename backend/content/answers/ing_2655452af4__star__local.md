---
qid: ing_2655452af4__star__local
question: 'Explain: Template pattern — LLD-OOPs-Design-Patterns/DesignPatterns at
  main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 328
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:27-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were building a new payment gateway that had to support multiple external banks, each with its own API quirks. Our existing codebase used procedural stubs for each bank and quickly became unmanageable as new partners joined.

**Task:**  
I needed to refactor the integration layer so that adding a new bank required minimal code changes while keeping the core workflow—authentication, request building, response parsing, error handling—consistent across all providers.

**Action:**  
I introduced the Template Method pattern. I defined an abstract `BankPaymentProcessor` class with a final `processPayment()` method that orchestrated the steps: `authenticate()`, `buildRequest()`, `sendRequest()`, `parseResponse()`, and `handleErrors()`. Each concrete bank subclass only implemented the provider‑specific logic for those hooks. To keep the code testable, I injected a `HttpClient` interface and used dependency injection to swap mock clients during unit tests.

**Result:**  
The new architecture cut integration time for adding a new bank from two weeks of manual coding to 2–3 days of implementing a single subclass. We reduced runtime errors by 40% because the shared template handled common failure paths, and our test coverage rose from 55% to 78%. I learned that the Template Method pattern is especially powerful when you have a fixed workflow with variable steps—exactly what we had in payment processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
