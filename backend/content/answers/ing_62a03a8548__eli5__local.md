---
qid: ing_62a03a8548__eli5__local
question: How to create a service? How to create a Shared service in angular8?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 295
total_tokens: 459
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:12:31-05:00'
sources: []
---

Imagine your Angular app is a kitchen, and every dish (component) needs the same spice blend (data or logic). A **shared service** is like a central spice jar that everyone can reach without each chef making their own copy.

1. **Make the jar** – Create a file `src/app/shared/my‑service.service.ts`.  
   ```ts
   import { Injectable } from '@angular/core';

   @Injectable({
     providedIn: 'root'          // one jar for the whole kitchen
   })
   export class MyService {
     private counter = 0;
     getCount() { return this.counter; }
     increment() { this.counter++; }
   }
   ```

2. **Open the jar in any recipe** – In a component, inject it through the constructor:
   ```ts
   import { MyService } from '../shared/my-service.service';

   export class CounterComponent {
     constructor(private svc: MyService) {}
     add() { this.svc.increment(); }
   }
   ```

3. **Use it everywhere** – Every component that imports `MyService` shares the same instance, so changes made in one are visible to all.

That’s all! The service lives once, and any component can “spice up” its logic by calling the shared methods.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
