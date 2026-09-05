---
qid: ing_97c5d4620f__star__local
question: 'Explain: Technical Screen – SWE Infra Questions — My 2026 Perplexity AI
  Interview Process and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 345
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:07-05:00'
sources: []
---

**Situation:**  
During my interview for a senior infrastructure role at Perplexity.ai in 2026, the hiring team wanted to see how I’d handle scaling a real‑time inference service that powers their conversational AI. The current pipeline was bottlenecked by GPU queue times and cost spikes during peak traffic.

**Task:**  
I needed to design an architecture that could reduce GPU wait time by at least 30 % while keeping operational costs below the existing budget, all within a two‑week sprint before product launch.

**Action:**  
First, I introduced a multi‑stage batching strategy: incoming requests were grouped into micro‑batches of 32 tokens using a lightweight scheduler in Rust. I then deployed a containerized GPU pool on Kubernetes with Pod Autoscaling based on CPU and memory usage, adding a preemptible node group to cut idle GPU cost by 40 %. To monitor latency, I integrated OpenTelemetry tracing and set up Prometheus alerts for tail latency >200 ms. Finally, I refactored the inference code to use ONNX Runtime with mixed‑precision (FP16) which reduced memory footprint by 25 % and sped up execution.

**Result:**  
The new pipeline cut GPU queue time from 1.8 s to 1.2 s (34 % improvement) and lowered infrastructure spend by $12k/month, saving 18 % of the budget. I learned that coupling lightweight batching with dynamic scaling and precision tuning can deliver both performance and cost efficiency in a production AI service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
