---
qid: ing_36c56db669__eli5__local
question: 'Explain: Shadow — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 242
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:02:34-05:00'
sources: []
---

**Shadow (Canary) Deployment in Kubernetes**

Imagine a bakery that wants to test a new cake recipe before serving it to everyone. The baker keeps the old cake on the counter for regular customers while secretly baking a small batch of the new one in a separate kitchen. Customers taste both, but only the old cake is officially sold; the new cake’s feedback is collected silently.

In Kubernetes, **shadow deployment** (or canary) works the same way.  
- A *deployment* is a set of identical pods that run your app.  
- A *pod* is a single running container instance.  
- The system creates a new version of the deployment but routes only a fraction of real traffic to it, while the rest still goes to the old version.  

You watch metrics and logs from the new pods without affecting users. If everything looks good, you gradually shift more traffic until the new version fully replaces the old one. This lets developers test changes safely, just like the baker testing a cake before offering it shop‑wide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
