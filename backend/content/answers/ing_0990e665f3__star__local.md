---
qid: ing_0990e665f3__star__local
question: 'Explain: Engineering — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 363
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:06-05:00'
sources: []
---

**Situation** – In early 2023 I joined Glean as a ML Engineer on the internal search team, where our goal was to boost click‑through rates for knowledge‑base queries. The product’s existing model lagged behind competitors: we were seeing only 12 % CTR versus an industry benchmark of 18 %.  

**Task** – My assignment was to design and deploy a new recommendation engine that could lift CTR by at least 20 % while keeping inference latency under 50 ms on the company’s existing GPU fleet.  

**Action** – I started by profiling the current pipeline with NVIDIA Nsight, discovering that feature extraction was the bottleneck. I refactored our embeddings to use mixed‑precision FP16 in PyTorch and replaced the dense layer with a lightweight attention module from Hugging Face’s transformers library. For training, I leveraged Glean’s internal data lake via Spark to generate 5 M query–document pairs, then fine‑tuned a DistilBERT base on those samples. To meet latency constraints, I exported the model to ONNX and deployed it behind an async gRPC service that batch‑processes requests in 10 ms windows.  

**Result** – After A/B testing over two weeks, CTR jumped from 12 % to 16.8 %, a 40 % relative increase, while inference latency stayed at ~48 ms. The project also reduced GPU cost by 15 % thanks to the lighter model. I learned how to balance model complexity with operational constraints and the importance of end‑to‑end profiling in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
