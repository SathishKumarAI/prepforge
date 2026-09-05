---
qid: ing_dddd72c27d__eli5__local
question: What is data binding in Angular 8? — FrontEnd---JavaScript-TypeScript-React-Angular/AngularJs/Angular8.md
  at main \u00b7 Anshul619/FrontEnd---JavaScript-TypeScript-React-Angular \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 242
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:25:47-05:00'
sources: []
---

Think of an Angular component as a **smart phone** and the HTML template as its **display screen**.  
Data binding is the *wire* that lets information flow between the two.

* **One‑way text binding (`{{ value }}`)** – like printing a name on the phone’s lock screen: whatever you type in the component’s code appears on the display, but touching the screen doesn’t change the code.

* **Event binding (`(click)="doSomething()"`)** – like pressing the phone’s volume button: when you tap the screen element, Angular calls a function defined in your code, letting the component react to user actions.

* **Two‑way binding (`[(ngModel)]="name"`)** – like a live chat window: what you type into an input field instantly updates the variable in the component, and if that variable changes elsewhere, the input reflects it immediately.

So data binding is simply the automatic, two‑directional “conversation” between your TypeScript logic and the HTML view.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
