---
qid: ing_71e0ab568a__eli5__local
question: 'Explain: ⭐ Horizontal Pod Autoscaling (HPA) — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 191
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:36:44-05:00'
sources: []
---

Imagine a busy café that serves coffee to customers. The barista (the Kubernetes controller) watches how many cups are sold each minute. If the order volume suddenly spikes, the café hires more baristas so every customer gets served quickly; if orders drop, extra staff is let go to save money.

In Kubernetes, **Horizontal Pod Autoscaling (HPA)** does exactly that for containerized applications. A “pod” is like one barista— a group of containers running your app. HPA monitors a metric (often CPU usage or custom data). When the metric rises above a set threshold, HPA tells the system to spin up more pods; when it falls below another threshold, it removes pods.

So, HPA keeps your application’s “staff” just right— enough pods to handle traffic without wasting resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
