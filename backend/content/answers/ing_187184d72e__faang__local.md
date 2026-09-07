---
qid: ing_187184d72e__faang__local
question: 'Explain: Plugin-based Architecture — 6 Software Architectural Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 604
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:41:22-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking for the six core plugin‑based architectural patterns that underpin most ML systems (e.g., feature extractors, models, loss functions). I’ll assume:  
* Plugins are independent, replaceable modules exposed via a common interface.  
* The host application orchestrates loading/unloading at runtime.  
* You need to know trade‑offs for scalability, maintainability, and performance.

**2️⃣ Approach**  
Outline the six patterns first, then drill into each with an example, complexity note, and typical use case. Keep the answer <240 words.

**3️⃣ Depth**

| # | Pattern | Core Idea | Example | Complexity | Trade‑offs |
|---|---------|-----------|---------|------------|------------|
| 1 | **Factory/Registry** | Central registry maps names to plugin classes; factories instantiate them on demand. | `ModelRegistry.register('bert', BertModel)` | O(1) lookup | Simplicity vs. global state |
| 2 | **Strategy** | Encapsulate interchangeable algorithms behind a single interface (e.g., optimizers). | Optimizer strategy switching during training. | O(1) per step | Requires consistent API |
| 3 | **Adapter** | Wrap external libraries to fit internal plugin contracts. | Adapting TensorFlow ops into PyTorch‑style modules. | O(1) overhead | Extra indirection |
| 4 | **Decorator/Chain of Responsibility** | Allow plugins to wrap or chain others (e.g., preprocessing pipelines). | Sequential data augmentations. | Linear in number of decorators | Ordering matters, harder debugging |
| 5 | **Observer/Hook** | Plugins subscribe to lifecycle events (epoch start/end). | Custom logging, checkpointing. | O(n) event dispatch | Potential performance hit if many hooks |
| 6 | **Dependency Injection Container** | Dynamically inject plugin instances based on config or environment. | Auto‑wire data loaders and models via YAML. | O(1) per injection | More complex setup |

**4️⃣ Edge Cases**  
* Circular dependencies between plugins → use lazy loading.  
* Version mismatches in adapter wrappers → semantic versioning.  
* Excessive decorators causing stack overflow – limit depth or flatten.

**5️⃣ Optimize & Communicate**  
- **Performance:** Benchmark plugin lookup; if high‑frequency, pre‑compile registries.  
- **Maintainability:** Enforce strict interface contracts and unit tests for each pattern.  
- **Scalability:** Use async hooks or background threads for heavy observer tasks.  

Narrate by starting with the problem (modular ML), then systematically walk through patterns, highlighting when to pick each. This demonstrates structured thinking, depth of knowledge, and awareness of practical trade‑offs—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
