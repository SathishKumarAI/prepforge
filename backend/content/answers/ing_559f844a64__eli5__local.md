---
qid: ing_559f844a64__eli5__local
question: 'Explain: Daemon Set — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 211
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:52:35-05:00'
sources: []
---

Think of a **DaemonSet** as a “maintenance crew” that must be present on every single worker (node) in your Kubernetes neighborhood.  
When you create a DaemonSet, Kubernetes guarantees that one copy of the specified container runs on each node—just like a city’s garbage‑collection truck or street‑cleaning unit that stops at every block. If a new node is added to the cluster, the crew automatically arrives there; if a node leaves, its crew member disappears.  

The job of this crew can be anything you need running everywhere: log collectors, monitoring agents, or networking helpers. They’re not meant for general application traffic (that’s what Deployments do), but for services that must exist on every machine so they can see everything in the cluster. In short, a DaemonSet is Kubernetes’ way of ensuring “one instance per node” for essential background tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
