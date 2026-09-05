---
qid: ing_3d25ac8bf6__fp__local
question: 'Explain: kubectl drain — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 368
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:14:19-05:00'
sources: []
---

`kubectl drain <node>` is Kubernetes’ **pre‑emptive cordoning** command.  
At its core it solves the problem of *zero‑downtime node maintenance*: you want to
take a machine out of service, but you must keep all running Pods alive and
re‑scheduled elsewhere.

1. **Cordon first** – the node is marked unschedulable (`spec.unschedulable=true`).
   This prevents new Pods from being assigned while existing ones continue.
2. **Evict in order** – each Pod is sent an eviction request, which Kubernetes
   translates into a graceful termination:  
   * it waits for the Pod’s pre‑stop hook and SIGTERM timeout, then deletes the
     container;  
   * if the Pod has a local `EmptyDir` or hostPath volume that cannot be moved,
     eviction fails – you must delete the Pod manually.  
3. **Rebalance** – once evicted, the scheduler places each Pod on another node,
   subject to resource availability and affinity rules.

Mathematically it is a *resource‑aware flow* problem: we maintain a constant
service level while shifting load across nodes. The non‑obvious insight:
eviction respects **PodDisruptionBudgets (PDBs)**, which are global constraints on
how many replicas of a deployment can be down simultaneously. Thus `drain`
automatically enforces the application’s fault tolerance guarantees without
manual bookkeeping.

In short, `kubectl drain` is an orchestrated “graceful hand‑off” that preserves
availability while allowing maintenance or scaling operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
