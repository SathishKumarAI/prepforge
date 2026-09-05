---
qid: ing_40d8ed69c5__think__local
question: What are the differences between promises and observables in Angular 8?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 457
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:57:57-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- Confirm that “promises” refers to native JavaScript `Promise` objects and “observables” to RxJS `Observable`.  
- Assume the audience knows Angular’s HTTP client returns Observables, but may not know why Observables are preferred.  

**2️⃣ Adopt a comparison framework**  
- Use *Lifecycle*, *Control flow*, *Cancellation*, *Multiple values*, *Operators*, *Subscription management* as axes to structure the reasoning.

**3️⃣ Step‑by‑step reasoning**  
1. **Lifecycle** – A promise resolves once; an observable can emit many times or never.  
2. **Control flow** – Promises use `then/catch`; observables use `subscribe`, `pipe`, and a rich set of operators (`map`, `filter`, `debounceTime`, etc.).  
3. **Cancellation** – Promises have no built‑in cancel; observables can be unsubscribed, automatically tearing down resources.  
4. **Multiple values** – Promise resolves with a single value; observable streams a sequence over time.  
5. **Operators & composition** – Observables allow functional composition of asynchronous streams, whereas promises are linear chains.  
6. **Error handling** – Promises use `catch`; observables emit errors through the stream and can be retried or recovered via operators.  

**4️⃣ Common traps to avoid**  
- Forgetting that a promise is eager (executes immediately) while an observable is lazy until subscribed.  
- Mixing `await` with observables; you need `toPromise()` or `firstValueFrom`.  
- Assuming all RxJS operations are synchronous—many are asynchronous.

**5️⃣ Sanity‑check & communicate**  
- Rephrase the comparison in plain language: “Promises = one shot, fire‑and‑forget; Observables = a live stream you can pause, resume, and cancel.”  
- Verify that each axis above is covered by at least one concrete example (e.g., HTTP GET).  
- Conclude with why Angular favors observables for its reactive architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
