---
qid: ing_e741fbc033__eli5__local
question: 'Explain: Structural Patterns — Top 10 Kubernetes Design Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 351
total_tokens: 510
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:41:47-05:00'
sources: []
---

Imagine Kubernetes as a bustling city where each container is a house that needs power, water, and roads to thrive. The **Top 10 Structural Patterns** are the city’s blueprints that keep everything running smoothly.

1. **Service Mesh** – like an underground subway system routing traffic between neighborhoods without drivers knowing the exact routes.  
2. **Ingress Controller** – the city hall’s front desk directing visitors (HTTP requests) to the right building.  
3. **StatefulSet** – a row of apartments that keep their own identity and history, even if the landlord moves them.  
4. **DaemonSet** – a garbage‑collection truck that parks in every house to perform housekeeping tasks.  
5. **Horizontal Pod Autoscaler** – traffic lights that change based on rush hour, adding more lanes when cars pile up.  
6. **Persistent Volume Claim (PVC)** – a shared storage locker each apartment can reserve and keep its own files.  
7. **ConfigMap/Secret** – a city bulletin board where residents read common rules or passwords safely.  
8. **Custom Resource Definition (CRD)** – adding new building types to the zoning map so planners can manage them just like any other structure.  
9. **Job/cronJob** – a factory that runs once or on schedule, delivering goods only when needed.  
10. **NetworkPolicy** – city fences that let certain vehicles in while blocking others, ensuring security.

These patterns are simply proven layouts that make Kubernetes behave predictably—just like a well‑planned city keeps its citizens happy and safe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
