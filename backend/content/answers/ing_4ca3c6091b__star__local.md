---
qid: ing_4ca3c6091b__star__local
question: What is the usage of Angular 8 ngIf Directive?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 327
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:01:28-05:00'
sources: []
---

**Situation**  
When I joined the front‑end team at a fintech startup, our dashboard was reloading the entire user list every time we filtered by risk tier. The API returned 12 k records and our Angular 8 app kept rendering all of them even when most were hidden behind *ngIf* conditions.

**Task**  
I needed to reduce DOM churn so that only the visible rows stayed in the DOM, cut memory usage, and improved scrolling performance for users on mobile browsers.

**Action**  
I refactored the table component to use `*ngFor` with a trackBy function and wrapped each row in an `<ng-container *ngIf="row.isVisible">`. I also added virtual scrolling via Angular CDK’s `cdk-virtual-scroll-viewport`, so only a handful of rows were rendered at any time. I measured the frame rate before and after, using Chrome DevTools Performance panel.

**Result**  
After deployment, the page load time dropped from 4.2 s to 1.8 s on mobile, and memory usage fell by 35%. Users reported smoother scrolling, and we saw a 12% drop in bounce rates for the dashboard page. I learned that *ngIf* isn’t just a binary toggle—it can be combined with virtual scroll to dramatically improve large‑dataset rendering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
