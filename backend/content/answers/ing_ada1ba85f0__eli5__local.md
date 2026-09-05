---
qid: ing_ada1ba85f0__eli5__local
question: 'Explain: 3.1. Manual Registration — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 244
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:12:32-05:00'
sources: []
---

**Service discovery** is a way for different parts of a software system—like the data‑preparation module, the model training service, and the prediction API—to find one another automatically instead of hard‑coding addresses.

*Analogy:* Imagine a bustling food truck festival. Each truck (service) signs its name and location on a common bulletin board (the registry). When someone wants to buy tacos, they look at the board, spot “Taco Truck,” and go straight there—no need to ask around or remember where each truck sits.

*Key terms:*  
- **Service** – a self‑contained program that offers a specific function.  
- **Registry/Discovery server** – a central place where services announce their presence and others consult it to find them.  

In machine learning pipelines, as new model versions are deployed or data stores change, they register themselves. Other components query the registry to obtain current addresses, ensuring smooth, dynamic communication without manual configuration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
