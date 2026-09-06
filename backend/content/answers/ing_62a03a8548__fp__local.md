---
qid: ing_62a03a8548__fp__local
question: How to create a service? How to create a Shared service in angular8?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 513
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:34:55-05:00'
sources: []
---

### Why a *shared* service is essential

When an Angular app grows, different components need to **share state or logic**—for example a user’s authentication token or a configuration flag. Instantiating a new class in each component would duplicate data and break the single‑source‑of‑truth principle that underlies reactive programming: *one observable, many observers*. A shared service, provided at the root level, guarantees **singleton behaviour** and lets components subscribe to its streams without coupling them together.

### Building it from first principles

1. **Define a contract (interface).**  
   ```ts
   export interface Auth { token?: string; userId?: number }
   ```
2. **Create the service with `@Injectable({ providedIn: 'root' })`.**  
   This tells Angular’s dependency injector to create *one* instance for the whole app, eliminating manual provider registration.

3. **Use a `BehaviorSubject` (or `ReplaySubject`) to hold mutable state.**  
   ```ts
   private auth$ = new BehaviorSubject<Auth>({});
   getAuth() { return this.auth$.asObservable(); }
   setToken(t: string) { this.auth$.next({ ...this.auth$.value, token: t }); }
   ```
   The subject is a *both* observable and observer; it buffers the latest value so late‑joining components instantly receive it.

4. **Expose pure methods (e.g., `login`, `logout`).**  
   These internally call `setToken` but hide implementation details from callers, enforcing encapsulation.

5. **Inject into any component or other service:**  
   ```ts
   constructor(private auth: AuthService) {}
   ```

### Non‑obvious insight

Using a **BehaviorSubject** instead of a plain property is critical for *reactive* UI updates. If you merely stored the token in a field, components would have to poll or rely on manual change detection. The subject automatically propagates changes and works seamlessly with Angular’s async pipe (`| async`), yielding minimal boilerplate and maximum performance.

> **Tip:** Keep the service stateless beyond the observable; let RxJS operators (e.g., `map`, `filter`) shape data streams, preserving a clean separation between *what* is stored and *how* it’s consumed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
