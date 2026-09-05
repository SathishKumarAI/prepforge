---
qid: ing_79c9e26cfb__eli5__local
question: 'Explain: Rolling Update — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 252
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:49:27-05:00'
sources: []
---

Imagine your app is a big, delicious cake that you want to serve to a crowd. You don’t want to stop the party while swapping it for a fresher one—so you slice a piece off the old cake and replace it with an equally sized slice of the new cake, one bite at a time.  

In Kubernetes this “bite‑by‑bite” swap is called a **rolling update**.  
A *Deployment* keeps several copies (pods) of your app running. When you push a new version, Kubernetes gradually terminates old pods and launches new ones, keeping the total number of healthy pods at or above a safe minimum. The process repeats until every pod runs the fresh code, all while the service stays online.  

Key terms:  
- **Pod** – a single instance of your app.  
- **ReplicaSet** – the group of identical pods managed by a Deployment.  
- **Rolling update** – the step‑by‑step replacement that never drops the whole cake.  

This way, users keep enjoying the service without interruption while you upgrade behind the scenes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
