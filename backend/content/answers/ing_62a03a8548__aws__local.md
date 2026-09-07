---
qid: ing_62a03a8548__aws__local
question: How to create a service? How to create a Shared service in angular8?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 396
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:08:21-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation*: My team needed a reusable data‑fetching layer for multiple feature modules in an Angular 8 SPA that consumed the same REST API.  
*Task*: Build a **shared service** that abstracts HTTP calls, handles errors, and caches results to reduce latency.

*Action*:  
1. Created `ApiService` as an injectable singleton (`@Injectable({ providedIn: 'root' })`).  
2. Used Angular’s `HttpClientModule` + RxJS operators (`shareReplay`, `retryWhen`) to expose a `get<T>(url: string, params?: HttpParams): Observable<T>` method.  
3. Integrated **AWS API Gateway** and **Lambda Authorizer** for auth; the service injects a Cognito token via an AuthGuard.  
4. Added optional caching with **LocalStorage** backed by RxJS `BehaviorSubject` to persist data across reloads.  
5. Wrote unit tests (Jest) covering success, retry logic, and cache hit/miss scenarios.

*Result*: The shared service reduced duplicate HTTP code by 70 % and cut API latency by ~35 ms per request due to caching. Deployment to AWS Amplify kept costs < $0.05/day.  

**Bar‑raiser signals**:  
- Demonstrated **ownership** by handling auth, error recovery, and caching in one place.  
- Showed **dive deep** through RxJS pipelines and AWS integration.  
- Quantified impact (70 % code reduction, 35 ms latency).  
- Learned from early failures—initially forgot to `shareReplay`, causing duplicate calls; fixed by adding the operator and documenting its purpose.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
