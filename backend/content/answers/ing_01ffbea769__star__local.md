---
qid: ing_01ffbea769__star__local
question: 'Explain: Architecture 2: Native Hybrid (Single System)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 345
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:26-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time fraud detection service for credit cards. The legacy monolith was written in Java and served over HTTP, but our new machine‑learning model lived in Python and required GPU acceleration. Our SLA demanded sub‑100 ms latency per transaction.

**Task:**  
I had to design an architecture that let the Java system call the Python model without incurring network hops or serialization overhead, while still keeping the ability to update the model independently.

**Action:**  
I chose a native hybrid (single‑system) approach: we embedded the Python runtime directly into the JVM using JEP (Java Python Embedding). The Java service loaded the compiled TensorFlow graph as a shared library and exposed a thin JNI wrapper. We deployed both binaries in the same Docker container, sharing memory buffers for input features. For GPU access, we used CUDA‑aware NCCL to let the Python code pull data from the JVM heap without copying. This kept the model updates isolated; I scripted automated re‑deployment of the shared library and used Gradle to rebuild the Java wrapper whenever the model version changed.

**Result:**  
Latency dropped from 350 ms (HTTP proxy) to 80 ms, meeting our SLA with a 70% margin. The deployment pipeline shortened by 40 %, and we avoided costly inter‑process communication costs. I learned that native hybrid integration can deliver near‑zero overhead when the language boundary is managed carefully, but it requires rigorous versioning and memory‑management discipline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
