---
qid: ing_a3bf382ab3__star__local
question: What is the usage of Angular 8 ngFor Directive?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 325
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:43-05:00'
sources: []
---

**Situation:**  
At my last role I was building a dashboard for an ML model that predicted customer churn. The UI had to show real‑time lists of customers flagged as high risk, updating every 30 seconds from a WebSocket feed.

**Task:**  
I needed to render thousands of rows efficiently while keeping the page responsive and ensuring each row could trigger a modal with detailed feature importance.

**Action:**  
I used Angular 8’s `*ngFor` directive on a `<table>` body, binding it to an observable stream (`highRisk$`). I added track‑by with the customer ID to avoid re‑creating DOM nodes on every push. To keep performance high, I wrapped the table in a virtual scroll component from `@angular/cdk/scrolling`, so only visible rows were instantiated. Each row included a button that called a service to fetch and display the feature importance chart in a modal.

**Result:**  
The dashboard rendered over 10,000 entries with smooth scrolling; load time dropped from 1.2 s to 0.4 s per refresh. User engagement on churn alerts rose by 35%. I learned that combining `ngFor` with track‑by and virtual scroll is essential for large ML data visualisations in Angular.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
