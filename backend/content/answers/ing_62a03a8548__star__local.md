---
qid: ing_62a03a8548__star__local
question: How to create a service? How to create a Shared service in angular8?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 365
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:45:12-05:00'
sources: []
---

**Situation** – At my last role I was working on an e‑commerce SPA built with Angular 8. The product team needed a reusable cart component that could be dropped into any page, but each instance had to sync with a central inventory service and persist state across refreshes.  

**Task** – I had to build a shared Angular service that would (1) expose CRUD operations for the cart, (2) broadcast updates via RxJS so all components stay in sync, and (3) store the cart in `localStorage` for persistence.

**Action** – I created `CartService` as an `@Injectable({providedIn: 'root'})`. Inside, I used a private `BehaviorSubject<CartItem[]>` to hold state and exposed it as an observable (`cart$`). CRUD methods update the subject and then write the array to `localStorage`. For inventory checks I injected a separate `InventoryService` that returns observables of stock levels; each add/remove operation first queries this service asynchronously. I also added error handling with `catchError` and used `shareReplay(1)` so multiple subscribers receive the latest state without re‑executing logic.

**Result** – The shared service reduced duplicated code by 60 %, cut load times for cart operations to <20 ms, and lowered memory churn because components no longer held their own copies of the cart. Post‑deployment analytics showed a 15 % drop in cart abandonment due to instant UI updates across tabs. I learned that proper use of `BehaviorSubject` + `shareReplay` is key to building lightweight, scalable shared services in Angular.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
